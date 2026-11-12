import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { october27ResearchBatch } from '@/lib/october27Batch';
import { october28ResearchBatch } from '@/lib/october28Batch';
import { october12Research } from '@/lib/october12-research';
import { october13Research } from '@/lib/october13-research';
import { TopicVisual } from '@/components/TopicVisual';
import { ContextImage } from '@/components/ContextImage';
import { imagery } from '@/lib/site-imagery';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist support roles.', alternates: { canonical: '/research' } };
export default function ResearchPage() {
  return <main><header className="page-hero split-hero"><div><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></div><ContextImage image={imagery.research} className="page-hero-image" priority /></header><section className="content-wrap"><div className="content-grid editorial-index">
    {[...researchPosts].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt))).map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail ? <img src={post.thumbnail} width="1200" height="630" alt="" /> : <TopicVisual compact title={post.title} seed={post.slug} intake={post.cluster.toUpperCase()} process="EVIDENCE" output="BRIEF" />}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${post.publishedAt.slice(0,10)}T00:00:00Z`))}</time> · Research brief</p><span className="text-link">Review the brief</span></Link>)}
  </div></section></main>;
}
