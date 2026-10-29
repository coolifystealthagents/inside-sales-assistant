'use client';

import { useState } from 'react';
import { buildTocTree, type ArticleHeading } from '@/lib/article-toc';

export function ArticleToc({ headings }: { headings: ArticleHeading[] }) {
  const [open, setOpen] = useState(false);

  if (headings.length < 2) return null;

  const tree = buildTocTree(headings);

  return (
    <div className="article-toc">
      <button
        type="button"
        className="article-toc__toggle"
        aria-expanded={open}
        aria-controls="article-table-of-contents"
        onClick={() => setOpen((current) => !current)}
      >
        <span>On this page</span>
        <span className="article-toc__toggle-mark" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <nav
        id="article-table-of-contents"
        className="article-toc__nav"
        aria-label="Table of contents"
        data-open={open}
      >
        <p className="article-toc__title">On this page</p>
        <ol className="article-toc__list">
          {tree.map((heading) => (
            <li key={heading.id}>
              <a className="article-toc__link" href={`#${heading.id}`} onClick={() => setOpen(false)}>
                {heading.text}
              </a>
              {heading.children.length > 0 && (
                <ol className="article-toc__children">
                  {heading.children.map((child) => (
                    <li key={child.id}>
                      <a className="article-toc__link" href={`#${child.id}`} onClick={() => setOpen(false)}>
                        {child.text}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
