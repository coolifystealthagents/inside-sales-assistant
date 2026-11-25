import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('approved contextual photography is mapped with provenance without changing article thumbnail logic', () => {
  const mapping = read('lib/site-imagery.ts');
  const site = read('lib/site.ts');
  const serviceIndex = read('app/services/page.tsx');
  const serviceDetail = read('app/services/[slug]/page.tsx');
  const blog = read('app/blog/page.tsx');
  const research = read('app/research/page.tsx');
  const serviceFiles = [
    'prospect-research.webp',
    'crm-workflow.webp',
    'remote-meeting.webp',
    'follow-up-call.webp',
    'pipeline-review.webp',
    'sales-enablement.webp',
    'collaboration.webp'
  ];

  for (const file of serviceFiles) {
    assert.match(mapping, new RegExp(file.replace('.', '\\.')));
    assert.ok(statSync(join(root, 'public/images/inside-sales', file)).size > 50_000, `${file} should contain a production image`);
  }
  assert.match(site, /heroImage:\s*'\/optimization\/home\.webp'/);
  const licensedAssets = [
    ...JSON.parse(read('public/optimization/sources.json')),
    ...JSON.parse(read('public/optimization/standards-sources.json')),
  ];
  for (const asset of licensedAssets) {
    assert.match(asset.source, /^https:\/\/www\.pexels\.com\/photo\//);
    assert.match(asset.license, /^https:\/\/www\.pexels\.com\/license\//);
    assert.ok(statSync(join(root, 'public', asset.file.replace(/^\//, ''))).size > 50_000, `${asset.file} should contain a documented production photo`);
  }
  for (const file of ['/optimization/services.webp', '/optimization/blog.webp', '/optimization/research.webp']) {
    assert.ok(mapping.includes(file), `${file} should be mapped to its page context`);
  }
  assert.doesNotMatch(serviceIndex, /<TopicVisual/);
  assert.doesNotMatch(serviceDetail, /<TopicVisual/);
  assert.match(blog, /post\.thumbnail[\s\S]*<TopicVisual compact/);
  assert.match(research, /post\.thumbnail[\s\S]*<TopicVisual compact/);
});

test('every service keeps the structured operating depth while using a route-specific image', () => {
  const serviceDetail = read('app/services/[slug]/page.tsx');
  for (const field of ['audience', 'problem', 'inputs', 'tasks', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'related']) {
    assert.match(serviceDetail, new RegExp(`service\\.${field}`), `missing service.${field}`);
  }
  assert.match(serviceDetail, /serviceImagery\[service\.slug\]/);
  assert.match(serviceDetail, /not a performance chart or measured result/);
});

test('services index exposes the complete offering from its hero and keeps long titles readable', () => {
  const page = read('app/services/page.tsx');
  const css = read('app/globals.css');
  assert.match(page, /href="#full-offering"/);
  assert.match(page, /id="full-offering"/);
  assert.match(page, /site\.services\.map\(service/);
  assert.match(css, /\.services-page \.page-hero h1,.ob-service-detail \.page-hero h1\{[^}]*font-size:clamp\(3rem,4\.6vw,4\.5rem\)/);
});

test('services index keeps its eight thumbnails compact without changing card copy or links', () => {
  const page = read('app/services/page.tsx');
  const detail = read('app/services/[slug]/page.tsx');
  const css = read('app/globals.css');
  assert.match(page, /<div className="service-card-image-frame"><Image className="service-card-image"/);
  assert.match(page, /site\.services\.map\(service/);
  assert.match(page, /href=\{`\/services\/\$\{service\.slug\}`\}/);
  assert.match(page, /<h3>\{service\.name\}<\/h3><p>\{service\.short\}<\/p><span className="text-link">Inspect role scope/);
  assert.match(page, /const cardPosition = service\.slug === 'inbound-lead-routing' \? 'center 72%' : image\.position \?\? 'center center'/);
  assert.match(css, /\.service-card-image-frame\{[^}]*width:min\(100%,15rem\)[^}]*max-height:10rem[^}]*aspect-ratio:3\/2/);
  assert.match(css, /\.service-card-image\{[^}]*width:100%;height:100%[^}]*object-fit:cover/);
  assert.doesNotMatch(css, /\.service-card-image\{[^}]*margin:-/);
  assert.doesNotMatch(detail, /service-card-image(?:-frame)?/);
});

test('homepage first fold keeps the primary CTA before imagery with natural responsive sizing', () => {
  const marketing = read('components/Marketing.tsx');
  const css = read('app/globals.css');
  const heroStart = marketing.indexOf('<section className="hero"');
  const cta = marketing.indexOf('cta-home-hero-bookcall', heroStart);
  const visual = marketing.indexOf('className="hero-visual"', heroStart);

  assert.ok(heroStart >= 0 && cta > heroStart && visual > cta, 'CTA must precede the visual in source and focus order');
  assert.match(css, /\.home \.hero\{[^}]*min-height:0;height:auto/);
  assert.doesNotMatch(css, /\.home \.hero\{[^}]*min-height:calc\(100(?:s|l)?vh/);
  assert.match(css, /@media\(max-width:600px\)[\s\S]*\.home \.hero-actions \.button\{width:100%\}/);
  assert.match(marketing, /Operating sequence: qualitative, not measured performance/);
  assert.doesNotMatch(marketing, /className="method-art"/);
});

test('homepage hero, workflow strip, and introduction stay centered without scaling the page', () => {
  const css = read('app/globals.css');
  const layout = read('app/layout.tsx');
  assert.match(css, /\.home \.hero-copy\{[^}]*justify-self:center;text-align:left/);
  assert.match(css, /\.design-signal \.hero-visual\{[^}]*aspect-ratio:3\/2/);
  assert.match(css, /\.design-signal \.signal-strip\{[^}]*justify-items:center/);
  assert.match(css, /\.home \.intro\{[^}]*justify-items:center[^}]*text-align:center/);
  assert.doesNotMatch(css, /(?:^|[;{])\s*zoom\s*:/i, 'native browser zoom must not be overridden');
  assert.doesNotMatch(layout, /maximum-scale|user-scalable\s*=\s*["']?no/i, 'the viewport must remain user-zoomable');
});

test('homepage adds reviewable operating depth without unsupported performance claims', () => {
  const marketing = read('components/Marketing.tsx');
  const site = read('lib/site.ts');
  const cssForHome = read('app/globals.css');
  const sources = JSON.parse(read('public/optimization/sources.json'));
  for (const section of ['home-audience', 'home-ledger', 'home-onboarding', 'home-fit', 'home-faq']) {
    assert.match(marketing, new RegExp(`className="[^"]*${section}`), `homepage is missing ${section}`);
  }
  assert.match(marketing, /data-label="Preparation record"/);
  assert.match(cssForHome, /\.home-ledger-table tbody td:before\{content:attr\(data-label\)/);
  assert.match(site, /heroImage:\s*'\/optimization\/home\.webp'/);
  assert.ok(sources.some((asset) => asset.file === '/optimization/home.webp' && asset.photograph === true && asset.license));
  assert.ok(statSync(join(root, 'public/optimization/home.webp')).size > 50_000);
  assert.match(marketing, /Operating sequence: qualitative, not measured performance/);
});

test('controlled-start steps keep their copy and use ordered, decorative workflow icons', () => {
  const marketing = read('components/Marketing.tsx');
  const icons = read('components/Icons.tsx');
  const css = read('app/globals.css');
  const start = marketing.indexOf('const onboardingSteps = [');
  const end = marketing.indexOf('\n];', start);
  const steps = marketing.slice(start, end);
  const expected = [
    ['Choose one recurring queue', 'Start with work that has known inputs and an existing owner.', 'QueueListIcon'],
    ['Set the handoff boundary', 'Name the source, expected output, access level, reviewer, and exception path.', 'ShieldIcon'],
    ['Review a bounded sample', 'Compare completed work with the acceptance checklist and keep each exception visible.', 'ClipboardCheckIcon'],
    ['Expand only after review', 'Add scope when the owner can inspect the record and explain the next action.', 'ExpandArrowsIcon'],
  ];
  let cursor = -1;
  for (const [title, copy, icon] of expected) {
    const next = steps.indexOf(`title: '${title}'`, cursor + 1);
    assert.ok(next > cursor, `${title} should stay in order`);
    assert.ok(steps.slice(next).includes(`copy: '${copy}'`), `${title} copy should remain unchanged`);
    assert.ok(steps.slice(next).includes(`Icon: ${icon}`), `${title} should use ${icon}`);
    assert.match(icons, new RegExp(`function ${icon}\\(\\)[^\\n]*aria-hidden="true"`));
    cursor = next;
  }
  assert.match(marketing, /className="home-onboarding-icon" aria-hidden="true"><Icon \/><\/span>/);
  assert.doesNotMatch(steps, /padStart|index \+/);
  assert.match(css, /\.home-onboarding-icon\{display:grid;width:3rem;height:3rem/);
  assert.match(css, /\.home-onboarding-icon\{margin-bottom:1rem\}/);
});

test('blog and research indexes include every published family and expose working search and topic filters', () => {
  const blog = read('app/blog/page.tsx');
  const research = read('app/research/page.tsx');
  const filters = read('components/ResourceFilters.tsx');
  for (const [source, archiveName, collectionName] of [[blog, 'archivedBlogPosts', 'blogPosts'], [research, 'archivedResearchPosts', 'researchPosts']]) {
    assert.match(source, new RegExp(`const ${archiveName}`));
    assert.match(source, /october12(?:Blog|Research)\.map/);
    assert.match(source, /october13(?:Blog|Research)\.map/);
    assert.ok(source.includes(`...${archiveName}`));
    assert.ok(source.includes(`...${collectionName}`));
    assert.match(source, /data-resource-card/);
    assert.match(source, /data-topic=/);
    assert.match(source, /data-search=/);
  }
  assert.match(filters, /role="search"/);
  assert.match(filters, /type="search"/);
  assert.match(filters, /<select/);
  assert.match(filters, /filterResources\(targetId, query, topic\)/);
  assert.match(filters, /aria-live="polite"/);
});

test('blog and research detail headers use a restrained responsive editorial scale', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.page-hero:has\(\+ \.content-wrap\.article-layout\) h1\{[^}]*font-size:clamp\(2\.75rem,5\.15vw,4\.25rem\)/);
  assert.match(css, /\.page-hero:has\(\+ \.content-wrap\.article-layout\) \.article-thumbnail\{[^}]*border-radius:0/);
  assert.match(css, /@media\(max-width:600px\)\{\.page-hero:has\(\+ \.content-wrap\.article-layout\)[\s\S]*font-size:clamp\(2\.35rem,10vw,3\.15rem\)/);
});

test('contact context precedes the form on desktop and mobile', () => {
  const css = read('app/contact-us/contact.css');
  const page = read('app/contact-us/page.tsx');
  assert.ok(page.indexOf('className="contact-intro"') < page.indexOf('className="contact-form-card"'), 'mobile source order must put context before the form');
  assert.match(css, /\.contact-first-fold\{grid-template-columns:minmax\(0,\.9fr\) minmax\(0,1\.1fr\)/);
  assert.match(css, /\.contact-intro\{grid-column:1;grid-row:1\}\.contact-form-card\{grid-column:2;grid-row:1\}/);
  assert.match(css, /@media\(max-width:1000px\)\{\.contact-first-fold\{grid-template-columns:1fr\}[\s\S]*\.contact-intro,.contact-form-card\{grid-column:1;grid-row:auto\}\.contact-form-card\{order:0\}\.contact-intro\{order:0\}/);
});
