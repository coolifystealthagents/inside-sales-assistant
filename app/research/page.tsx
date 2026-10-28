import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { october27ResearchBatch } from '@/lib/october27Batch';
import { october28ResearchBatch } from '@/lib/october28Batch';
import { october12Research } from '@/lib/october12-research';
import { october13Research } from '@/lib/october13-research';
import { TopicVisual } from '@/components/TopicVisual';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist support roles.', alternates: { canonical: '/research' } };
export default function ResearchPage() {
  return <main><header className="page-hero split-hero"><div><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></div><TopicVisual title="Sales operations research library" intake="SOURCE DATA" process="METHOD" output="REVIEW" /></header><section className="content-wrap"><div className="content-grid editorial-index">
    {october28ResearchBatch.map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · Research brief</p><span className="text-link">Review the brief</span></Link>)}
    {researchPosts.filter(post => ![...october28ResearchBatch,...october27ResearchBatch].some(batch => batch.slug === post.slug)).map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}><TopicVisual compact title={post.title} seed={post.slug} intake={post.cluster.toUpperCase()} process="EVIDENCE" output="BRIEF" /><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · Research brief</p><span className="text-link">Review the brief</span></Link>)}
    {october13Research.map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.question}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · Research protocol</p><span className="text-link">Review the study</span></Link>)}
    {october12Research.map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.question}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · Research protocol</p><span className="text-link">Review the study</span></Link>)}
  </div></section></main>;
}
