import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { TestimonialsRail } from '@/components/TestimonialsRail';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Inside Sales Staffing Consultation',
  description: 'Talk with Inside Sales Assistant about remote support for prospect research, CRM administration, meeting coordination, and sales follow up.',
  alternates: { canonical: '/contact-us' }
};

const steps = [
  ['Workflow discovery', 'Map the recurring sales work, current owner, systems, handoffs, and escalation points.'],
  ['Role design', 'Define a focused support role with clear inputs, outputs, access, and approval boundaries.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit the workflow and customer communication needs.'],
  ['Controlled launch', 'Start with documented tasks, measured handoffs, and accountable oversight from your revenue team.']
];
const faqs = [
  ['What can an inside sales assistant support?', 'A remote assistant can prepare prospect research, maintain approved CRM fields, coordinate meetings, draft approved follow up, and prepare pipeline review materials.'],
  ['Can an assistant make pricing or commercial decisions?', 'No. Pricing, discounts, qualification standards, customer promises, contracts, compliance conclusions, and final sales decisions stay with authorized leaders.'],
  ['Can we begin with one part of the sales process?', 'Yes. A narrow first workflow makes ownership, quality standards, access, and escalation easier to test before the role expands.'],
  ['How do you approach customer and prospect data?', 'The consultation covers approved sources, least privilege access, consent and channel rules, documented handling, and escalation paths. Your organization remains responsible for privacy, security, telemarketing, and recordkeeping obligations.']
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Inside sales staffing consultation.' };
  return <main className="contact-page">
    <section className="contact-first-fold">
      <div className="contact-intro">
        <p className="eyebrow">Contact the operations desk</p>
        <h1>Turn one recurring sales queue into a clear support role.</h1>
        <p className="contact-lede">Tell us where research, CRM updates, scheduling, approved follow up, reporting, or enablement work is slowing the revenue team. We will focus the conversation on scope, owner decisions, and a controlled first handoff.</p>
        <ul className="contact-scope"><li>Map the queue and current owner</li><li>Separate preparation from accountable judgment</li><li>Define access, output, review, and escalation</li></ul>
        <TestimonialsRail />
      </div>
      <div className="contact-form-card"><p className="eyebrow">Consultation brief</p><h2>Tell us about the work.</h2><p>Share enough to prepare a useful staffing conversation. Do not include customer records, credentials, or payment information.</p><LeadForm source="contact-page-consultation" /></div>
    </section>

    <section className="official-team"><div className="official-team-photo"><Image src="/images/stealth-agents-team.webp" alt="StealthAgents managed service team in Bacolod" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div><div className="official-team-copy"><Image src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width={190} height={46} /><p className="eyebrow">Official team, Bacolod</p><h2>Managed support with human oversight.</h2><p>StealthAgents supports matching and managed remote staffing around a role your business can supervise. Your organization defines the systems, permitted access, decision rights, quality standard, and commercial authority. The service helps keep the staffing and support layer connected to that operating brief.</p><p><strong>{site.name} remains the focused identity for this sales operations service.</strong></p></div></section>

    <section className="contact-section navy-band"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>What happens after you reach out</h2><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Make the conversation specific</p><h2>Prepare for a useful call</h2><div className="prep-grid"><article><h3>Recurring work</h3><p>Identify tasks that recur across research, lead routing, CRM updates, scheduling, and follow up.</p></article><article><h3>Current ownership</h3><p>Note who completes, reviews, approves, and escalates each part of the workflow today.</p></article><article><h3>Systems and access</h3><p>List the CRM, data sources, communication tools, and minimum access the role would need.</p></article><article><h3>Service standard</h3><p>Define what timely, accurate, documented completion looks like for sellers, managers, and prospects.</p></article></div></div></section>
    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote assistants can research approved sources, prepare records, coordinate calendars, draft approved messages, update authorized CRM fields, and flag exceptions. They do not set pricing or discounts, make legal or compliance judgments, approve contracts, make binding promises, misrepresent identity, bypass consent rules, or replace authorized sales and executive owners.</p><p>Your organization retains responsibility for sales strategy, supervision, customer data, privacy, information security, telemarketing and channel consent, suppression lists, commercial approvals, contracts, and every regulated or executive decision.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Explore focused roles</p><h2>Common starting points</h2><div className="path-grid">{site.services.slice(0, 4).map(service => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p></Link>)}</div><Link className="text-link all-services" href="/services">View the full services collection</Link></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Inside sales staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
