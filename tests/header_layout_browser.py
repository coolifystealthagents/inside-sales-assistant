import json
import os
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:3000").rstrip("/")
BROWSER = os.environ.get("PLAYWRIGHT_CHROMIUM_EXECUTABLE")
VIEWPORTS = (
    (1440, 900),
    (1280, 800),
    (1200, 800),
    (1181, 800),
    (1180, 800),
    (901, 760),
    (900, 760),
    (899, 760),
    (601, 720),
    (600, 720),
    (599, 720),
    (390, 844),
    (320, 720),
)


def measure(page, state):
    return page.evaluate(
        """(state) => {
          const attribution = document.querySelector('.powered-header');
          const cta = document.querySelector('.header-cta');
          const brand = document.querySelector('.brand');
          const attributionRect = attribution.getBoundingClientRect();
          const ctaRect = cta.getBoundingClientRect();
          const brandRect = brand.getBoundingClientRect();
          const attributionStyle = getComputedStyle(attribution);
          const ctaStyle = getComputedStyle(cta);
          const brandStyle = getComputedStyle(brand);
          const nav = document.querySelector('#primary-navigation');
          const navStyle = getComputedStyle(nav);
          const navLinkTops = [...nav.querySelectorAll('a')].map((link) => Math.round(link.getBoundingClientRect().top));
          const childRects = [...attribution.children].map((child) => {
            const rect = child.getBoundingClientRect();
            return {left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom};
          });
          const paintedRight = Math.max(attributionRect.right, ...childRects.map((rect) => rect.right));
          const paintedBottom = Math.max(attributionRect.bottom, ...childRects.map((rect) => rect.bottom));
          const ctaVisible = ctaStyle.display !== 'none' && ctaRect.width > 0 && ctaRect.height > 0;
          const overlapX = ctaVisible
            ? Math.max(0, Math.min(paintedRight, ctaRect.right) - Math.max(attributionRect.left, ctaRect.left))
            : 0;
          const overlapY = ctaVisible
            ? Math.max(0, Math.min(paintedBottom, ctaRect.bottom) - Math.max(attributionRect.top, ctaRect.top))
            : 0;
          return {
            state,
            attributionText: attribution.textContent.replace(/\\s+/g, ' ').trim(),
            attributionVisible: attributionStyle.display !== 'none' && attributionStyle.visibility !== 'hidden',
            attributionClientWidth: attribution.clientWidth,
            attributionScrollWidth: attribution.scrollWidth,
            attributionRect: {left: attributionRect.left, right: attributionRect.right, width: attributionRect.width},
            childRects,
            ctaVisible,
            ctaHref: cta.getAttribute('href'),
            ctaWhiteSpace: ctaStyle.whiteSpace,
            ctaClientHeight: cta.clientHeight,
            ctaScrollHeight: cta.scrollHeight,
            ctaRect: {left: ctaRect.left, right: ctaRect.right, width: ctaRect.width},
            navVisible: navStyle.display !== 'none',
            navLinkTops,
            paintedOverlapArea: overlapX * overlapY,
            brandFontSize: parseFloat(brandStyle.fontSize),
            attributionFontSize: parseFloat(attributionStyle.fontSize),
            rootClientWidth: document.documentElement.clientWidth,
            rootScrollWidth: document.documentElement.scrollWidth,
            brandRect: {left: brandRect.left, right: brandRect.right},
          };
        }""",
        state,
    )


def main():
    failures = []
    results = []
    parsed_base = urlparse(BASE_URL)
    base_origin = f"{parsed_base.scheme}://{parsed_base.netloc}"

    with sync_playwright() as playwright:
        launch_options = {"headless": True, "args": ["--no-sandbox"]}
        if BROWSER:
            launch_options["executable_path"] = BROWSER
        browser = playwright.chromium.launch(**launch_options)
        for width, height in VIEWPORTS:
            context = browser.new_context(viewport={"width": width, "height": height}, service_workers="block")
            page = context.new_page()

            def intercept(route):
                request = route.request
                parsed = urlparse(request.url)
                same_origin = f"{parsed.scheme}://{parsed.netloc}" == base_origin
                if request.method not in ("GET", "HEAD") or not same_origin:
                    route.abort()
                else:
                    route.continue_()

            page.route("**/*", intercept)
            response = page.goto(BASE_URL + "/", wait_until="domcontentloaded", timeout=60_000)
            page.wait_for_function("document.fonts.status === 'loaded'")
            page.wait_for_timeout(250)

            for state, scroll_y in (("top", 0), ("scrolled", 420)):
                page.evaluate("(y) => window.scrollTo(0, y)", scroll_y)
                page.wait_for_timeout(250)
                result = measure(page, state)
                result.update({"width": width, "height": height, "status": response.status if response else None})
                results.append(result)

                prefix = f"{width}x{height} {state}"
                if result["status"] != 200:
                    failures.append(f"{prefix}: homepage returned {result['status']}")
                if result["attributionText"] != "Powered by StealthAgents":
                    failures.append(f"{prefix}: attribution text changed to {result['attributionText']!r}")
                if not result["attributionVisible"]:
                    failures.append(f"{prefix}: attribution is hidden")
                if result["attributionScrollWidth"] > result["attributionClientWidth"] + 1:
                    failures.append(
                        f"{prefix}: attribution overflows internally "
                        f"({result['attributionScrollWidth']} > {result['attributionClientWidth']})"
                    )
                if result["paintedOverlapArea"] > 0.5:
                    failures.append(f"{prefix}: attribution paint overlaps the CTA")
                if result["ctaHref"] != "/contact-us":
                    failures.append(f"{prefix}: CTA destination changed to {result['ctaHref']!r}")
                if result["ctaVisible"] and (
                    result["ctaWhiteSpace"] != "nowrap"
                    or result["ctaScrollHeight"] > result["ctaClientHeight"] + 1
                ):
                    failures.append(f"{prefix}: visible CTA text wraps")
                if width > 900 and result["navVisible"] and len(set(result["navLinkTops"])) != 1:
                    failures.append(f"{prefix}: desktop navigation wraps onto multiple lines")
                if result["rootScrollWidth"] > result["rootClientWidth"] + 1:
                    failures.append(f"{prefix}: document has horizontal overflow")
                if result["brandFontSize"] <= result["attributionFontSize"]:
                    failures.append(f"{prefix}: parent attribution is no longer visually subordinate to site brand")

            context.close()
        browser.close()

    report_path = Path(os.environ.get("HEADER_LAYOUT_REPORT", "/tmp/inside-sales-header-layout-report.json"))
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps({"baseUrl": BASE_URL, "results": results, "failures": failures}, indent=2), encoding="utf-8")
    if failures:
        raise AssertionError("\n".join(failures))
    print(f"Header layout passed {len(results)} rendered states; report: {report_path}")


if __name__ == "__main__":
    main()
