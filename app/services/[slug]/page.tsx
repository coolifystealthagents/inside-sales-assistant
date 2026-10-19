import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { TopicVisual } from '@/components/TopicVisual';
import { ArrowIcon } from '@/components/Icons';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` } } : {};
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section><h2>{title}</h2><ul className="signal-list">{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map(item => serviceBySlug(item)).filter(Boolean);
  return <main className="ob-service-detail">
    <header className="page-hero split-hero"><div><p className="eyebrow">Specialist inside sales role</p><h1>{service.name}</h1><p>{service.short}</p><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role <ArrowIcon /></Link></div><TopicVisual title={service.name} seed={service.slug} {...service.visual} /></header>
    <section className="section service-intro"><div><p className="eyebrow">Audience and problem</p><h2>Where this role creates useful capacity.</h2></div><div><p><strong>Built for:</strong> {service.audience}</p><p>{service.problem}</p></div></section>
    <div className="content-wrap service-prose">
      <div className="service-two-col"><ListBlock title="Inputs required" items={service.inputs} /><ListBlock title="Scope and tasks" items={service.tasks} /></div>
      <section><p className="eyebrow">Working sequence</p><h2>A workflow the owner can inspect.</h2><ol className="workflow-list">{service.workflow.map(step => <li key={step}>{step}</li>)}</ol></section>
      <div className="service-two-col"><ListBlock title="Deliverables" items={service.deliverables} /><ListBlock title="Owner decision boundaries" items={service.boundaries} /></div>
      <ListBlock title="Quality controls" items={service.qualityControls} />
      <section><p className="eyebrow">Realistic operating examples</p><h2>How the boundary works in practice.</h2><div className="scenario-grid">{service.scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.body}</p></article>)}</div></section>
      <section className="faq"><p className="eyebrow">Role questions</p><h2>Frequently asked questions</h2>{service.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
      <section><p className="eyebrow">Related services</p><h2>Connect the adjacent handoffs.</h2><div className="related-grid">{related.map(item => item && <Link key={item.slug} href={`/services/${item.slug}`}><h3>{item.name}</h3><p>{item.short}</p><span className="text-link">Review this role <ArrowIcon /></span></Link>)}</div></section>
    </div>
    <section className="closing"><p className="eyebrow">Create a controlled first workflow</p><h2>Turn this scope into a role brief.</h2><p>Bring the queue, systems, current owner, and known exceptions. We will help make the handoff precise.</p><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation <ArrowIcon /></Link></section>
  </main>;
}
