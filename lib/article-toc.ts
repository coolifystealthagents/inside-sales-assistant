export type ArticleHeadingInput = {
  level: 2 | 3;
  text: string;
  existingId?: string;
};

export type ArticleHeading = ArticleHeadingInput & {
  id: string;
};

export type TocHeading = ArticleHeading & {
  level: 2;
  children: ArticleHeading[];
};

export function headingSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'section';
}

export function assignHeadingIds(headings: ArticleHeadingInput[]): ArticleHeading[] {
  const used = new Set<string>();

  return headings.map((heading) => {
    const base = heading.existingId?.trim() || headingSlug(heading.text);
    let id = base;
    let suffix = 2;

    while (used.has(id)) {
      id = `${base}-${suffix}`;
      suffix += 1;
    }
    used.add(id);

    return {
      level: heading.level,
      text: heading.text,
      id,
    };
  });
}

export function buildTocTree(headings: ArticleHeading[]): TocHeading[] {
  const tree: TocHeading[] = [];

  for (const heading of headings) {
    if (heading.level === 2) {
      tree.push({ ...heading, level: 2, children: [] });
      continue;
    }

    const parent = tree.at(-1);
    if (parent) parent.children.push(heading);
  }

  return tree;
}
