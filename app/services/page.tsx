import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { TopicVisual } from '@/components/TopicVisual';

export const metadata: Metadata = { title: 'Specialist support services', description: `Explore remote support roles shaped for ${site.audience}.`, alternates: { canonical: '/services' } };
const faqs = [
  ['Where should a team begin?', 'Choose one recurring queue with known inputs, a clear output, an accountable owner, and a small review sample.'],
  ['Does a remote assistant replace sales judgment?', 'No. Assistants can prepare, coordinate, document, and route work. Your authorized leaders keep strategy, approval, pricing, compliance, and customer commitments.'],
  ['How do we choose between these roles?', 'Start with the operating bottleneck. Research supports preparation, CRM administration supports record quality, coordination supports meetings, follow up supports commitments, reporting supports inspection, and enablement supports current materials.']
];

export default function ServicesPage() {
  return <main className="services-page">
    <header className="page-hero split-hero"><div><p className="eyebrow">Inside sales operations desk</p><h1>Give recurring sales work a visible owner and control path.</h1><p>Build a focused support role around evidence, decision boundaries, and a review rhythm your revenue team can actually use.</p><Link className="button primary" href="/contact-us">Map your workflow <ArrowIcon /></Link></div><TopicVisual title="Inside sales service map" intake="WORK QUEUE" process="OWNER RULES" output="CLEAR HANDOFF" /></header>
    <section className="section service-argument"><div><p className="eyebrow">The operating case</p><h2>Delegate the preparation, not the authority.</h2></div><div><p>Sales capacity is not only a hiring question. It is a workflow design question. When routine research, record maintenance, scheduling, approved follow up, reporting preparation, and content organization have explicit acceptance rules, sellers can spend more attention on conversations and accountable decisions.</p><p>Each role below names the inputs, output, owner boundary, and control points needed for a measured launch. No role should begin as an unbounded task list.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Six focused roles</p><h2>Match the role to the queue.</h2></div><div className="service-grid">{site.services.map(service => <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}><TopicVisual compact title={service.name} seed={service.slug} {...service.visual} /><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Inspect role scope <ArrowIcon /></span></Link>)}</div></section>
    <section className="section decision-grid"><div><p className="eyebrow">Decision guidance</p><h2>Find the first controlled handoff.</h2><p>If seller time is lost before a conversation, begin with prospect research or meeting coordination. If the system cannot explain current status, begin with CRM administration or pipeline reporting. If commitments stall after the call, begin with follow up. If sellers cannot trust current materials, begin with enablement.</p></div><ol><li><strong>Define:</strong> Name the queue, source, output, and accountable owner.</li><li><strong>Test:</strong> Run a bounded sample and preserve every exception.</li><li><strong>Review:</strong> Compare outputs with the acceptance checklist.</li><li><strong>Expand:</strong> Add volume or scope only after the boundary is stable.</li></ol></section>
    <section className="section team-band"><Image src="/images/stealth-agents-team.webp" alt="StealthAgents team in Bacolod" width={1200} height={800} /><div><p className="eyebrow">Managed service support</p><h2>A real team behind the role.</h2><p>StealthAgents supports candidate matching and managed remote staffing while your organization defines systems, access, commercial authority, and review standards.</p></div></section>
    <section className="section faq"><div className="section-heading"><p className="eyebrow">Service questions</p><h2>Plan with the boundary visible.</h2></div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section className="closing"><p className="eyebrow">Start with the work</p><h2>Bring one queue that needs a clearer handoff.</h2><p>We will help translate it into a focused role brief with useful decision boundaries.</p><Link className="button primary" href="/contact-us">Plan a consultation <ArrowIcon /></Link></section>
  </main>;
}
