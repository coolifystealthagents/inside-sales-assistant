import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import ts from 'typescript';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

function loadTocModule() {
  const path = resolve(root, 'lib/article-toc.ts');
  assert.ok(existsSync(path), 'shared heading/TOC utility must exist');
  const source = readFileSync(path, 'utf8');
  const { outputText, diagnostics = [] } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    reportDiagnostics: true,
  });
  assert.deepEqual(diagnostics, [], 'shared heading/TOC utility must transpile cleanly');
  const module = { exports: {} };
  Function('module', 'exports', outputText)(module, module.exports);
  return module.exports;
}

test('heading IDs preserve existing slugs and uniquely suffix repeats and special headings', () => {
  const { assignHeadingIds } = loadTocModule();
  const headings = [
    { level: 2, text: 'Quick overview' },
    { level: 3, text: 'Who owns this control?' },
    { level: 2, text: 'Quick overview' },
    { level: 3, text: 'C++ & CRM: Q/A' },
    { level: 2, text: '***' },
    { level: 3, text: '***' },
    { level: 2, text: 'Quick overview 2' },
  ];
  assert.deepEqual(assignHeadingIds(headings), [
    { level: 2, text: 'Quick overview', id: 'quick-overview' },
    { level: 3, text: 'Who owns this control?', id: 'who-owns-this-control' },
    { level: 2, text: 'Quick overview', id: 'quick-overview-2' },
    { level: 3, text: 'C++ & CRM: Q/A', id: 'c-crm-q-a' },
    { level: 2, text: '***', id: 'section' },
    { level: 3, text: '***', id: 'section-2' },
    { level: 2, text: 'Quick overview 2', id: 'quick-overview-2-2' },
  ]);
});

test('TOC hierarchy keeps H2 order and nests following H3 headings', () => {
  const { buildTocTree } = loadTocModule();
  const headings = [
    { level: 2, text: 'Overview', id: 'overview' },
    { level: 3, text: 'First check', id: 'first-check' },
    { level: 3, text: 'Second check', id: 'second-check' },
    { level: 2, text: 'Next step', id: 'next-step' },
  ];
  assert.deepEqual(buildTocTree(headings), [
    { level: 2, text: 'Overview', id: 'overview', children: [
      { level: 3, text: 'First check', id: 'first-check' },
      { level: 3, text: 'Second check', id: 'second-check' },
    ] },
    { level: 2, text: 'Next step', id: 'next-step', children: [] },
  ]);
});

test('all blog article families use one shared TOC and remove imperative duplicate generation', () => {
  const page = read('app/blog/[slug]/page.tsx');
  const october12 = read('components/October12Article.tsx');
  const october13 = read('components/October13Article.tsx');
  const shared = read('components/ArticleToc.tsx');

  assert.match(page, /ArticleToc/);
  assert.match(october12, /ArticleToc/);
  assert.match(october13, /ArticleToc/);
  assert.doesNotMatch(page, /TocSync/);
  const october12Blog = october12.split('export function October12ResearchArticle')[0];
  const october13Blog = october13.split('export function October13ResearchArticle')[0];
  for (const source of [page, october12Blog, october13Blog]) {
    assert.doesNotMatch(source, /className="toc"/, 'template-local blog TOCs must be removed');
    assert.match(source, /article-layout article-layout--toc/, 'blog layouts must explicitly opt into TOC grid placement');
  }
  assert.doesNotMatch(october12.split('export function October12ResearchArticle')[1], /article-layout--toc/, 'research layouts must remain outside TOC grid placement');
  assert.doesNotMatch(october13.split('export function October13ResearchArticle')[1], /article-layout--toc/, 'research layouts must remain outside TOC grid placement');
  assert.equal((shared.match(/<nav\b/g) || []).length, 1, 'shared component must render exactly one nav');
  assert.match(shared, /aria-expanded=\{open\}/);
  assert.match(shared, /aria-controls="article-table-of-contents"/);
  assert.match(shared, /if\s*\(headings\.length\s*<\s*2\)\s*return null/);
});

test('TOC styling is bounded, responsive, focus-visible, and offsets sticky-header anchors', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.article-toc\s*\{[^}]*position\s*:\s*sticky/i);
  assert.match(css, /\.article-toc\s*\{[^}]*max-height\s*:\s*calc\(100svh\s*-/i);
  assert.match(css, /\.article-toc__nav\s*\{[^}]*overflow-y\s*:\s*auto/i);
  assert.match(css, /\.article-toc__link\s*\{[^}]*min-height\s*:\s*44px/i);
  assert.match(css, /\.article-toc__toggle:focus-visible\s*,\s*\.article-toc__link:focus-visible/i);
  assert.match(css, /\.prose\s+:is\(h2\[id\],h3\[id\]\)\s*\{[^}]*scroll-margin-top/i);
  const mobile = css.slice(css.search(/@media\s*\(max-width\s*:\s*900px\)/i));
  assert.match(mobile, /\.article-toc__toggle\s*\{[^}]*display\s*:\s*flex/i);
  assert.match(mobile, /\.article-toc\s*\{[^}]*position\s*:\s*static/i);
  assert.match(mobile, /\.article-toc__nav\s*\{[^}]*max-height\s*:\s*min\(55svh/i);
});
