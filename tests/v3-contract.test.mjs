import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import test from 'node:test';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

function filesUnder(directory, extensions = /\.(?:ts|tsx|css)$/) {
  const start = join(root, directory);
  const result = [];
  for (const entry of readdirSync(start)) {
    const absolute = join(start, entry);
    if (statSync(absolute).isDirectory()) result.push(...filesUnder(relative(root, absolute), extensions));
    else if (extensions.test(entry)) result.push(relative(root, absolute));
  }
  return result;
}

function occurrences(text, pattern) {
  return [...text.matchAll(new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`))];
}

function loadSiteConfig() {
  // site.ts is deliberately data-only. Evaluating just its object literal lets these
  // tests inspect the contract without booting Next or coupling to generated output.
  const source = read('lib/site.ts');
  const match = source.match(/export const site\s*:\s*SiteConfig\s*=\s*({[\s\S]*});\s*$/);
  assert.ok(match, 'lib/site.ts must continue to export a data-only SiteConfig object');
  return Function(`"use strict"; return (${match[1]});`)();
}

const applicationFiles = [...filesUnder('app'), ...filesUnder('components'), ...filesUnder('lib')];


test('primary navigation has exactly the approved labels and destinations', () => {
  const source = read('lib/content.ts');
  const navBlock = source.match(/export const nav\s*=\s*\[([\s\S]*?)\];/);
  assert.ok(navBlock, 'nav export is missing');
  const items = [...navBlock[1].matchAll(/\{\s*href:\s*['"]([^'"]+)['"]\s*,\s*label:\s*['"]([^'"]+)['"]\s*\}/g)]
    .map(([, href, label]) => ({ href, label }));
  assert.deepEqual(items, [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact-us', label: 'Contact Us' },
  ]);

  const chrome = read('components/SiteChrome.tsx');
  assert.match(chrome, /<nav\b[^>]*id="primary-navigation"[^>]*>[\s\S]*nav\.map\(/);
});


test('header is sticky and its mobile navigation is an accessible toggle menu', () => {
  const css = read('app/globals.css');
  const chrome = read('components/SiteChrome.tsx');
  const headerRule = css.match(/\.site-header\s*\{([^{}]*)\}/)?.[1] ?? '';
  assert.match(headerRule, /position\s*:\s*sticky\b/, '.site-header must use position: sticky');
  assert.match(headerRule, /top\s*:\s*0(?:px)?\b/, '.site-header must be anchored to the viewport top');

  assert.match(chrome, /<button[^>]*className="nav-toggle"[^>]*aria-expanded=\{open\}[^>]*aria-controls="primary-navigation"/);
  assert.match(chrome, /<nav[^>]*className=\{open\s*\?\s*['"]is-open['"]\s*:\s*['"]["']/);
  assert.match(chrome, /event\.key\s*===\s*['"]Escape['"]/);
  assert.match(css, /\.nav-toggle\s*\{/i, 'the menu toggle needs base CSS');
  assert.doesNotMatch(css, /\.powered-header\s*\{[^{}]*display\s*:\s*none\b/i, 'parent attribution must remain visible in the header at every viewport');
  assert.doesNotMatch(css, /\.powered\s*\{[^{}]*text-transform\s*:\s*uppercase\b/i, 'the exact Powered by StealthAgents casing must remain visible');

  const mobile = css.slice(css.search(/@media\s*\(\s*max-width\s*:\s*9\d\dpx\s*\)/i));
  assert.ok(mobile, 'a mobile media query near the 900px breakpoint is required');
  assert.match(mobile, /\.nav-toggle\s*\{[^{}]*display\s*:\s*(?!none\b)[^;}]+/i, 'the toggle must be visible on mobile');
  assert.match(mobile, /\.site-header\s+nav\s*\{[^{}]*display\s*:\s*none\b/i, 'mobile navigation must be collapsed initially');
  assert.match(mobile, /\.site-header\s+nav\.is-open\s*\{[^{}]*display\s*:\s*(?:flex|block|grid)\b/i, 'is-open must reveal mobile navigation');
});


test('subsidiary and parent branding appear in both header and footer', () => {
  const chrome = read('components/SiteChrome.tsx');
  assert.equal(occurrences(chrome, /src="\/logo\.svg"/g).length, 2, 'subsidiary /logo.svg must appear in header and footer');
  assert.equal(occurrences(chrome, /src="\/images\/stealth-agents-logo-black\.png"/g).length, 2, 'parent logo must appear in header and footer');
  assert.equal(occurrences(chrome, />Powered by StealthAgents</g).length, 2, 'the exact parent attribution must appear in header and footer');
});


test('skip link points to one shared main-content target', () => {
  const chrome = read('components/SiteChrome.tsx');
  const layout = read('app/layout.tsx');
  assert.match(chrome, /<a[^>]*className="skip-link"[^>]*href="#main-content"[^>]*>Skip to main content<\/a>/);
  assert.match(layout, /id="main-content"[^>]*tabIndex=\{-1\}/);

  const allSource = applicationFiles.map((file) => read(file)).join('\n');
  assert.equal(occurrences(allSource, /id=["']main-content["']/g).length, 1, 'main-content id must be globally unique');
});


test('promotional and timed lead popups are absent', () => {
  const forbidden = /TimedLeadModal|PromotionalPopup|promo(?:tional)?[-_ ]?(?:popup|modal)|lead[-_ ]?modal/i;
  const offenders = applicationFiles.filter((file) => forbidden.test(read(file)));
  assert.deepEqual(offenders, []);
});


test('ACR tracking uses the approved identity, proxy endpoint, script, and route', () => {
  const site = loadSiteConfig();
  const layout = read('app/layout.tsx');
  assert.equal(site.siteId, 'inside-sales-assistant');
  assert.match(layout, /siteId:\s*['"]\$\{site\.siteId\}['"]/);
  assert.match(layout, /endpoint:\s*['"]\/ingest\/track['"]/);
  assert.match(layout, /src="https:\/\/acrtracking\.stealthagents\.us\/v1\/tracker\.js"/);
  assert.match(read('app/ingest/track/route.ts'), /https:\/\/acrtracking\.stealthagents\.us\/api\/track/);
});


test('LeadForm preserves protected fields and redirects only after accepted success', () => {
  const source = read('components/LeadForm.tsx');
  const names = new Set([...source.matchAll(/name="([^"]+)"/g)].map(([, name]) => name));
  const protectedFields = [
    'first_name', 'last_name', 'email', 'phone_country', 'phone', 'company',
    'company_website', 'company_size', 'positions_to_fill', 'referral_source',
    'name', 'message', 'source', 'website_url',
  ];
  for (const field of protectedFields) assert.ok(names.has(field), `LeadForm lost protected field: ${field}`);

  assert.match(source, /const data\s*=\s*new FormData\(form\)/);
  assert.match(source, /fetch\(['"]\/api\/submit-lead['"]\s*,\s*\{\s*method:\s*['"]POST['"]\s*,\s*body:\s*data\s*\}/);
  const rejection = source.indexOf('if(!response.ok||!result.ok)');
  const redirect = source.indexOf("router.push('/thank-you')");
  assert.ok(rejection >= 0, 'both HTTP acceptance and result.ok must be checked');
  assert.ok(redirect > rejection, 'redirect must happen only after the rejected-response branch returns');
  assert.equal(occurrences(source, /router\.push\(['"]\/thank-you['"]\)/g).length, 1);

  const route = read('app/api/submit-lead/route.ts');
  for (const field of ['first_name', 'last_name', 'email', 'company', 'company_size', 'positions_to_fill', 'referral_source']) {
    assert.match(route, new RegExp(`form\\.get\\(['"]${field}['"]\\)`), `submit route must retain ${field}`);
  }
  assert.match(route, /personalDomains\.has\(email\.split\(['"]@['"]\)\[1\]\)/);
});


test('approved scheduler appears only on /thank-you and post-booking route exists', () => {
  const approved = 'https://go.oncehub.com/StealthAgentsTeam';
  const schedulerFiles = applicationFiles.filter((file) => read(file).includes(approved));
  assert.deepEqual(schedulerFiles, ['app/thank-you/page.tsx']);
  assert.match(read('app/thank-you/page.tsx'), /<iframe\b[^>]*src=\{schedulerUrl\}/);

  const postBooking = read('app/thanks-whats-next/page.tsx');
  assert.match(postBooking, /export default function\s+\w+/);
  assert.match(postBooking, /robots:\s*\{\s*index:\s*false\s*,\s*follow:\s*false\s*\}/);
  assert.match(read('DEPLOYMENT_CONTRACT.md'), /https:\/\/insidesalesassistant\.com\/thanks-whats-next/);
});


test('ten reviews have first-party provenance and are rendered from that source', () => {
  const provenance = JSON.parse(read('app/review-provenance.json'));
  assert.equal(provenance.source, 'https://stealthagents.com/');
  assert.match(provenance.sourceType, /Official StealthAgents first-party/i);
  assert.equal(provenance.records.length, 10);
  assert.equal(new Set(provenance.records.map(({ name }) => name)).size, 10, 'review names must be unique');
  for (const [index, review] of provenance.records.entries()) {
    for (const key of ['headline', 'body', 'name', 'detail']) {
      assert.equal(typeof review[key], 'string', `review ${index + 1} ${key} must be text`);
      assert.ok(review[key].trim(), `review ${index + 1} ${key} must not be empty`);
    }
  }

  const rail = read('components/TestimonialsRail.tsx');
  assert.match(rail, /import provenance from ['"]@\/app\/review-provenance\.json['"]/);
  assert.match(rail, /provenance\.records\.map\(/);
  assert.match(rail, /href=\{provenance\.source\}/);
  assert.match(rail, /aria-label="Ten verified reviews"/);
});


test('exactly six deep services retain every structured section', () => {
  const site = loadSiteConfig();
  assert.equal(site.services.length, 6);
  assert.deepEqual(site.services.map(({ slug }) => slug), [
    'prospect-research', 'crm-administration', 'meeting-coordination',
    'sales-follow-up', 'pipeline-reporting', 'sales-enablement',
  ]);

  const arraySections = ['inputs', 'tasks', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'related'];
  for (const service of site.services) {
    assert.ok(service.audience?.trim(), `${service.slug} needs an audience`);
    assert.ok(service.problem?.trim(), `${service.slug} needs a problem statement`);
    for (const section of arraySections) {
      assert.ok(Array.isArray(service[section]), `${service.slug}.${section} must be an array`);
      assert.ok(service[section].length >= 2, `${service.slug}.${section} must contain substantive structured content`);
    }
    for (const scenario of service.scenarios) assert.ok(scenario.title && scenario.body, `${service.slug} has an incomplete scenario`);
    for (const item of service.faq) assert.ok(item.q && item.a, `${service.slug} has an incomplete FAQ`);
  }

  const page = read('app/services/[slug]/page.tsx');
  for (const section of arraySections) assert.match(page, new RegExp(`service\\.${section}`), `service page must render ${section}`);
  assert.match(page, /return\s+<main\b/, 'service page must return its rendered main tree');
});


test('lead validation is server-owned and ignored honeypots cannot advance the funnel', () => {
  const route = read('app/api/submit-lead/route.ts');
  const form = read('components/LeadForm.tsx');
  assert.doesNotMatch(route, /source\.startsWith\(/, 'client-controlled source must not choose server validation');
  for (const field of ['first_name', 'last_name', 'company', 'company_size', 'positions_to_fill', 'referral_source']) {
    assert.match(route, new RegExp(`form\\.get\\('${field}'\\)`), `server must validate ${field}`);
  }
  assert.match(route, /ignored:\s*true/, 'honeypot acknowledgement must identify ignored submissions');
  assert.match(form, /result\.ignored/, 'client must suppress tracking and navigation for ignored submissions');
  for (const guard of [/allowedOrigins\.has\(origin\)/, /multipart\/form-data;/, /MAX_BODY_BYTES/, /RATE_LIMIT/]) {
    assert.match(route, guard, `lead route is missing anti-abuse guard ${guard}`);
  }
  assert.match(route, /await fetch\(TRACKING_API/, 'success must await durable server acceptance');
  assert.match(route, /event_type:\s*'lead_acceptance'/, 'server acceptance must be independently recorded');
  assert.match(route, /acceptanceId:\s*eventId/, 'accepted response must return its durable receipt');
});


test('the form has one ACR lead-ingestion owner', () => {
  const route = read('app/api/submit-lead/route.ts');
  const form = read('components/LeadForm.tsx');
  assert.match(form, /window\.acrTracker\?\.trackLead/, 'accepted lead must use the standard ACR tracker');
  assert.doesNotMatch(route, /ACR_LEAD_ENDPOINT/, 'API validation route must not duplicate ACR lead ingestion');
  assert.match(form, /const name=\[payload\.first_name,payload\.last_name\]/, 'trackLead must receive the required combined name');
  assert.match(form, /acceptance_id:result\.acceptanceId/, 'client lead event must carry the server acceptance receipt');
});


test('tracking proxy validates first-party ACR batches without forwarding spoofable IP headers', () => {
  const route = read('app/ingest/track/route.ts');
  assert.match(route, /payload\.site_id\s*!==\s*SITE_ID/, 'proxy must enforce the configured site identity');
  assert.match(route, /allowedOrigins\.has\(origin\.origin\)/, 'proxy must use a fixed origin allowlist');
  assert.doesNotMatch(route, /x-forwarded-host|requestHost/i, 'proxy must not derive trust from caller-controlled host headers');
  assert.doesNotMatch(route, /X-Forwarded-For|X-ACR-Client-IP|cf-connecting-ip|x-real-ip/i, 'proxy must not relay caller-controlled IP headers');
});


test('direct-access funnel pages avoid unverified success claims', () => {
  assert.doesNotMatch(read('app/thank-you/page.tsx'), /Request received/i);
  assert.doesNotMatch(read('app/thanks-whats-next/page.tsx'), /consultation is on the calendar/i);
});


test('indexable routes declare canonicals while conversion-completion routes are noindex', () => {
  const staticCanonicals = new Map([
    ['app/page.tsx', '/'],
    ['app/services/page.tsx', '/services'],
    ['app/contact-us/page.tsx', '/contact-us'],
    ['app/about/page.tsx', '/about'],
    ['app/blog/page.tsx', '/blog'],
    ['app/research/page.tsx', '/research'],
    ['app/privacy/page.tsx', '/privacy'],
    ['app/terms/page.tsx', '/terms'],
  ]);
  for (const [file, canonical] of staticCanonicals) {
    const escaped = canonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(read(file), new RegExp(`alternates\\s*:\\s*\\{\\s*canonical\\s*:\\s*['"]${escaped}['"]`), `${file} needs canonical ${canonical}`);
  }
  assert.match(read('app/services/[slug]/page.tsx'), /canonical:\s*`\/services\/\$\{service\.slug\}`/);
  assert.match(read('app/blog/[slug]/page.tsx'), /canonical:\s*`\/blog\/\$\{[^}]+\.slug\}`/);
  assert.match(read('app/research/[slug]/page.tsx'), /canonical:\s*`\/research\/\$\{[^}]+\.slug\}`/);

  for (const file of ['app/thank-you/page.tsx', 'app/thanks-whats-next/page.tsx']) {
    assert.match(read(file), /robots:\s*\{\s*index:\s*false\s*,\s*follow:\s*false\s*\}/, `${file} must be noindex, nofollow`);
    assert.match(read(file), /alternates:\s*\{\s*canonical:\s*['"]\/(?:thank-you|thanks-whats-next)['"]\s*\}/, `${file} must retain its self-referencing canonical`);
  }
  const robots = read('app/robots.ts');
  assert.match(robots, /['"]\/thank-you['"]/);
  assert.match(robots, /['"]\/thanks-whats-next['"]/);
});


test('favicon and universal security headers remain configured', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /icons:\s*\{[^{}]*icon:\s*['"]\/logo\.svg['"][^{}]*shortcut:\s*['"]\/logo\.svg['"][^{}]*apple:\s*['"]\/logo\.svg['"]/);
  assert.ok(existsSync(join(root, 'app/favicon.ico')), 'a conventional favicon.ico generated from the subsidiary logo is required');
  assert.ok(statSync(join(root, 'app/favicon.ico')).size > 0, 'favicon.ico must not be empty');

  const config = read('next.config.mjs');
  for (const header of ['Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy', 'Content-Security-Policy']) {
    assert.match(config, new RegExp(`key:\\s*['"]${header}['"]`), `missing ${header}`);
  }
  assert.match(config, /source:\s*['"]\/\(\.\*\)['"]\s*,\s*headers:\s*securityHeaders/, 'security headers must apply to every route');
  assert.match(config, /frame-src https:\/\/go\.oncehub\.com/);
  assert.match(config, /script-src[^'"]*['"]?[^;]*https:\/\/acrtracking\.stealthagents\.us/);
  assert.doesNotMatch(config, /unsafe-eval/, 'production CSP must not allow unsafe-eval');
});


test('accessible color and motion controls meet the release contract', () => {
  const site = loadSiteConfig();
  const rail = read('components/TestimonialsRail.tsx');
  const contactCss = read('app/contact-us/contact.css');
  assert.equal(site.primary.toLowerCase(), '#c24130');
  assert.doesNotMatch(contactCss, /#ff755f/i, 'legacy low-contrast coral must be removed');
  assert.match(rail, /aria-pressed=\{userPaused\}/);
  assert.match(rail, /Pause reviews/);
  assert.match(rail, /Resume reviews/);
  assert.doesNotMatch(rail, /testimonial-card[^>]*tabIndex=/, 'review cards must not add unnecessary tab stops');
});
