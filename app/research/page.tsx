import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { october12Research } from '@/lib/october12-research';
import { october13Research } from '@/lib/october13-research';
import { TopicVisual } from '@/components/TopicVisual';
import { ContextImage } from '@/components/ContextImage';
import { imagery } from '@/lib/site-imagery';
import { ResourceFilters } from '@/components/ResourceFilters';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist support roles.', alternates: { canonical: '/research' } };

type ResearchIndexPost = { slug: string; title: string; cluster: string; summary: string; publishedAt: string; thumbnail?: string };
const archivedResearchPosts: ResearchIndexPost[] = [
  ...october12Research.map(post => ({ slug: post.slug, title: post.title, cluster: post.cluster, summary: `A reproducible study design for ${post.question}.`, publishedAt: post.publishedAt, thumbnail: post.thumbnail })),
  ...october13Research.map(post => ({ slug: post.slug, title: post.title, cluster: post.cluster, summary: `A reproducible study design for ${post.question}.`, publishedAt: post.publishedAt, thumbnail: post.thumbnail })),
];
const bySlug = new Map<string, ResearchIndexPost>();
for (const post of [...archivedResearchPosts, ...researchPosts]) bySlug.set(post.slug, post);
const indexPosts = [...bySlug.values()]
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
const topics = [...new Set(indexPosts.map(post => post.cluster))].sort((a, b) => a.localeCompare(b));

export default function ResearchPage() {
  return <main><header className="page-hero split-hero"><div><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></div><ContextImage image={imagery.research} className="page-hero-image" priority /></header><section className="content-wrap">
    <ResourceFilters targetId="research-resource-list" resourceNoun="research briefs" topics={topics} total={indexPosts.length} />
    <div className="content-grid editorial-index" id="research-resource-list">
    {indexPosts.map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug} data-resource-card data-topic={post.cluster} data-search={`${post.title} ${post.summary} ${post.cluster}`}>{post.thumbnail ? <img src={post.thumbnail} width="1200" height="630" alt="" /> : <TopicVisual compact title={post.title} seed={post.slug} intake={post.cluster.toUpperCase()} process="EVIDENCE" output="BRIEF" />}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${post.publishedAt.slice(0,10)}T00:00:00Z`))}</time> · Research brief</p><span className="text-link">Review the brief</span></Link>)}
  </div></section></main>;
}
