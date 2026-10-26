import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { october12Blog } from '@/lib/october12-blog';
import { october13Blog } from '@/lib/october13-blog';
import { october22BlogBatch } from '@/lib/october22Batch';
import { TopicVisual } from '@/components/TopicVisual';

export const metadata: Metadata = { title: 'Blog', description: 'Practical guides for designing, delegating, and reviewing specialist remote support.', alternates: { canonical: '/blog' } };
export default function BlogPage() {
  return <main><header className="page-hero split-hero"><div><p className="eyebrow">Practical field notes</p><h1>Clearer roles. Better handoffs.</h1><p>Guides for leaders who want to delegate recurring sales work without losing visibility or control.</p></div><TopicVisual title="Sales operations field notes" intake="LIVE QUEUE" process="OWNER REVIEW" output="FIELD NOTE" /></header><section className="content-wrap"><div className="principles"><span className="pill">All articles ({blogPosts.length + october12Blog.length + october13Blog.length})</span></div><div className="article-grid editorial-index">
    {[...october22BlogBatch].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt))).map(post => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta"><time dateTime={post.publishedAt}>{new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${post.publishedAt.slice(0,10)}T00:00:00Z`))}</time> · {post.readTime}</p><span className="text-link">Read article</span></Link>)}
    {october13Blog.map(post => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.focus}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime}</p><span className="text-link">Read article</span></Link>)}
    {october12Blog.map(post => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}><img src={post.thumbnail} width="1200" height="630" alt="" /><span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.focus}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · 7 min read</p><span className="text-link">Read article</span></Link>)}
    {blogPosts.map(post => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}><TopicVisual compact title={post.title} seed={post.slug} intake={post.category.toUpperCase()} process="WORKFLOW" output="GUIDE" /><span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta"><time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime}</p><span className="text-link">Read article</span></Link>)}
  </div></section></main>;
}
