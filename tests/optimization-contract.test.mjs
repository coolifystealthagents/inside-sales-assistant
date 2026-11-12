import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('licensed contextual imagery replaces site-level synthetic visuals without changing article thumbnail logic', () => {
  const mapping = read('lib/site-imagery.ts');
  const serviceIndex = read('app/services/page.tsx');
  const serviceDetail = read('app/services/[slug]/page.tsx');
  const blog = read('app/blog/page.tsx');
  const research = read('app/research/page.tsx');
  const files = [
    'team-crm-review.webp',
    'prospect-research.webp',
    'crm-workflow.webp',
    'remote-meeting.webp',
    'follow-up-call.webp',
    'pipeline-review.webp',
    'sales-enablement.webp',
    'collaboration.webp'
  ];

  for (const file of files) {
    assert.match(mapping, new RegExp(file.replace('.', '\\.')));
    assert.ok(statSync(join(root, 'public/images/inside-sales', file)).size > 50_000, `${file} should contain a production image`);
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
