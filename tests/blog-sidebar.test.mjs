import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const page = fs.readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const october12 = fs.readFileSync(new URL('../components/October12Article.tsx', import.meta.url), 'utf8');
const october13 = fs.readFileSync(new URL('../components/October13Article.tsx', import.meta.url), 'utf8');
const articleToc = fs.readFileSync(new URL('../components/ArticleToc.tsx', import.meta.url), 'utf8');
const research = fs.readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

function blogOnly(source, researchMarker) {
  return source.split(researchMarker)[0];
}

test('the shared TOC gives every blog template an eligible-only containing region', () => {
  const blogTemplates = [
    page,
    blogOnly(october12, 'export function October12ResearchArticle'),
    blogOnly(october13, 'export function October13ResearchArticle'),
  ];

  for (const source of blogTemplates) {
    assert.match(source, /<ArticleToc headings=\{headings\}\/?>/, 'every blog family must use the shared TOC');
    assert.match(source, /<ArticleToc headings=\{headings\}\/?>\s*<div className="article-main"><article className="prose">/, 'TOC must remain before the main reading column and article prose');
  }

  assert.match(articleToc, /if \(headings\.length < 2\) return null;[\s\S]*<div className="article-toc-region">[\s\S]*<div className="article-toc">/);
  assert.doesNotMatch(research, /article-toc-region/, 'research templates must not opt into the blog TOC rail');
});

test('every blog family moves its existing CTA after the article in one main-column wrapper', () => {
  const blogTemplates = [
    page,
    blogOnly(october12, 'export function October12ResearchArticle'),
    blogOnly(october13, 'export function October13ResearchArticle'),
  ];

  for (const source of blogTemplates) {
    assert.match(source, /<ArticleToc headings=\{headings\}\/?>\s*<div className="article-main"><article className="prose">/);
    assert.match(source, /<\/article><aside className="sidebar sidebar-cta">[\s\S]*?<\/aside><\/div><\/section>/);
  }

  assert.equal((page.match(/className="sidebar sidebar-cta"/g) ?? []).length, 2);
  assert.equal((blogOnly(october12, 'export function October12ResearchArticle').match(/className="sidebar sidebar-cta"/g) ?? []).length, 1);
  assert.equal((blogOnly(october13, 'export function October13ResearchArticle').match(/className="sidebar sidebar-cta"/g) ?? []).length, 1);
  assert.match(page, /id="cta-blog-sidebar-schedulecall"[\s\S]*?href="\/contact-us"/);
});

test('desktop gives the sole TOC rail the complete article-column boundary', () => {
  assert.match(css, /\.article-layout--toc>\.article-main\{[^}]*grid-column:1;[^}]*grid-row:1;[^}]*min-width:0/);
  assert.match(css, /\.article-layout--toc>\.article-toc-region\{[^}]*grid-column:2;[^}]*grid-row:1;[^}]*align-self:stretch/);
  assert.match(css, /\.article-layout--toc>\.article-toc-region>\.article-toc\{[^}]*position:sticky;[^}]*top:112px/);
  assert.doesNotMatch(css, /(?:^|\n)\.article-toc-region>\.article-toc\{/);
  assert.match(css, /\.article-layout--toc>\.article-main>\.sidebar-cta\{[^}]*position:static;[^}]*margin-top:2\.5rem;[^}]*border-radius:0/);
  assert.doesNotMatch(css, /\.article-layout--toc>\.sidebar-cta/);
});

test('mobile keeps the collapsible TOC before the main column and CTA after the article', () => {
  const mobile = css.slice(css.lastIndexOf('@media(max-width:900px){'));
  assert.match(mobile, /\.article-layout--toc>\.article-toc-region\{display:contents\}/);
  assert.match(mobile, /\.article-layout--toc>\.article-toc-region>\.article-toc\{[^}]*grid-column:1;[^}]*grid-row:1;[^}]*position:static/);
  assert.match(mobile, /\.article-layout--toc>\.article-main\{[^}]*grid-column:1;[^}]*grid-row:2/);
  assert.match(mobile, /\.article-layout--toc>\.article-main>\.sidebar-cta\{[^}]*margin-top:2\.5rem/);
  assert.match(css, /\.article-toc__nav\[data-open="false"\]\{display:none\}/);
});
