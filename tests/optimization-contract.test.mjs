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

test('homepage first fold keeps the primary CTA before imagery with responsive viewport sizing', () => {
  const marketing = read('components/Marketing.tsx');
  const css = read('app/globals.css');
  const heroStart = marketing.indexOf('<section className="hero"');
  const cta = marketing.indexOf('cta-home-hero-bookcall', heroStart);
  const visual = marketing.indexOf('className="hero-visual"', heroStart);

  assert.ok(heroStart >= 0 && cta > heroStart && visual > cta, 'CTA must precede the visual in source and focus order');
  assert.match(css, /\.home \.hero\{[^}]*min-height:calc\(100svh - 78px\)/);
  assert.match(css, /@media\(max-width:600px\)[\s\S]*\.home \.hero-actions \.button\{width:100%\}/);
  assert.match(marketing, /Operating sequence: qualitative, not measured performance/);
  assert.doesNotMatch(marketing, /className="method-art"/);
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
