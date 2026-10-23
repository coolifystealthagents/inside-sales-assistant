export type ServiceFaq = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  audience: string;
  problem: string;
  inputs: string[];
  tasks: string[];
  workflow: string[];
  deliverables: string[];
  boundaries: string[];
  qualityControls: string[];
  scenarios: { title: string; body: string }[];
  faq: ServiceFaq[];
  related: string[];
  visual: { intake: string; process: string; output: string };
};
export type BlogPost = { slug: string; title: string; description: string; category: string; publishedAt: string; readTime: string; thumbnail?: string; sections: { heading: string; paragraphs: string[] }[]; faq: { q: string; a: string }[]; internalService: string; internalSibling: string; source: { label: string; url: string } };
export type ResearchPost = { slug: string; title: string; summary: string; cluster: string; publishedAt: string; thumbnail?: string; finding: string; sections?: { heading: string; paragraphs: string[] }[]; sources: { label: string; url: string }[] };
export type SiteConfig = {
  name: string; domain: string; siteId: string; niche: string; audience: string; design: string;
  eyebrow: string; hero: string; heroAccent: string; heroBody: string; manifesto: string;
  primary: string; secondary: string; accent: string; canvas: string; ink: string;
  displayFont: string; bodyFont: string; heroImage: string; heroAlt: string;
  services: Service[]; categories: string[]; principles: string[]; sources: { label: string; url: string }[];
};
