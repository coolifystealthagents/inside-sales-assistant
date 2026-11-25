import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { imagery, serviceImagery } from '@/lib/site-imagery';
import { ArrowIcon } from '@/components/Icons';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Specialist support services',
  description: `Explore remote support roles shaped for ${site.audience}.`,
  alternates: { canonical: '/services' },
};

const assistantTasks = [
  {
    title: 'CRM cleanup',
    description: 'Update approved fields, flag duplicates and stale records, and route unclear ownership for review.',
  },
  {
    title: 'Meeting coordination',
    description: 'Coordinate calendars, prepare meeting briefs, send approved reminders, and record scheduling outcomes.',
  },
  {
    title: 'Follow-up tracking',
    description: 'Track promised materials and approved next steps, record response status, and escalate stalled actions.',
  },
];

const salesDecisions = [
  'Targeting, qualification, and sales messaging strategy',
  'Pricing, negotiation, and customer commitments',
  'Forecast judgment, commercial approvals, and sensitive exceptions',
];

const workflowSteps: [string, string][] = [
  ['Define the queue', 'Name the recurring work, its source, the expected output, and the accountable owner.'],
  ['Set the boundary', 'Document permitted access, required approvals, and where exceptions should go.'],
  ['Review a bounded sample', 'Compare completed work with the acceptance checklist and keep gaps visible.'],
  ['Expand after review', 'Add scope only when the owner can inspect the record and confirm the handoff.'],
];

const faqs = [
  ['Where should a team begin?', 'Choose one recurring queue with known inputs, a clear output, an accountable owner, and a small review sample.'],
  ['Does a remote assistant replace sales judgment?', 'No. Assistants can prepare, coordinate, document, and route work. Your authorized leaders keep strategy, approval, pricing, compliance, and customer commitments.'],
  ['How do we choose between these roles?', 'Start with the operating bottleneck. Research supports preparation, CRM administration supports record quality, coordination supports meetings, follow up supports commitments, reporting supports inspection, and enablement supports current materials.'],
];

export default function ServicesPage() {
  return <main className={styles.page}>
    <header className={styles.hero}>
      <div className={`${styles.shell} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={`eyebrow ${styles.eyebrow}`}>Inside sales operations</p>
          <h1 className={styles.heroTitle}>Give recurring sales work a visible owner and control path.</h1>
          <p className={styles.heroDescription}>Build a focused support role around evidence, clear decision boundaries, and a review rhythm your revenue team can actually use.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} href="/contact-us">Map your workflow <ArrowIcon /></Link>
            <Link className={styles.secondaryLink} href="#full-offering">Explore all eight roles <span aria-hidden="true">↓</span></Link>
          </div>
          <p className={styles.heroNote}>Start with one recurring queue. Expand only after the handoff and review process works.</p>
        </div>
        <figure className={styles.heroImageFrame}>
          <Image src={imagery.services.src} alt={imagery.services.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectPosition: imagery.services.position }} />
        </figure>
      </div>
    </header>

    <section className={styles.rolesSection} id="full-offering" aria-labelledby="service-offering-heading">
      <div className={styles.shell}>
        <div className={styles.sectionHeading}>
          <p className={`eyebrow ${styles.eyebrow}`}>Eight focused roles</p>
          <h2 id="service-offering-heading">Match the role to the queue.</h2>
          <p>Browse support built around the recurring work your sales team needs to prepare, coordinate, and review.</p>
        </div>
        <div className={styles.roleGrid}>
          {site.services.map(service => {
            const image = serviceImagery[service.slug];
            const cardPosition = service.slug === 'inbound-lead-routing' ? 'center 72%' : image.position ?? 'center center';
            return <Link className={styles.roleCard} href={`/services/${service.slug}`} key={service.slug}>
              <span className={styles.roleImageFrame}>
                <Image className={styles.roleImage} src={image.src} alt={image.alt} width={1200} height={800} sizes="(max-width: 600px) 100vw, 300px" style={{ objectPosition: cardPosition }} />
              </span>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
              <span className={styles.roleLink}>Explore the role <ArrowIcon /></span>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className={styles.boundarySection} aria-labelledby="task-boundary-heading">
      <div className={styles.shell}>
        <div className={styles.sectionHeading}>
          <p className={`eyebrow ${styles.eyebrow}`}>Clear ownership</p>
          <h2 id="task-boundary-heading">Delegate the preparation. Keep the decisions.</h2>
          <p>A useful support role gives repeatable work a defined owner without moving sales authority away from your team.</p>
        </div>
        <div className={styles.boundaryGrid}>
          <article className={styles.taskCard}>
            <p className={styles.cardEyebrow}>Assistant-prepared work</p>
            <h3>Keep the operating queue moving.</h3>
            <ul>{assistantTasks.map(task => <li key={task.title}><strong>{task.title}:</strong> {task.description}</li>)}</ul>
          </article>
          <article className={styles.decisionCard}>
            <p className={styles.cardEyebrow}>Sales team authority</p>
            <h3>Keep commercial judgment with its owner.</h3>
            <ul>{salesDecisions.map(decision => <li key={decision}>{decision}</li>)}</ul>
            <p className={styles.decisionNote}>Assistants prepare evidence and route exceptions; authorized sales leaders approve decisions and customer commitments.</p>
          </article>
        </div>
      </div>
    </section>

    <section className={styles.workflowSection} aria-labelledby="workflow-heading">
      <div className={styles.shell}>
        <div className={styles.workflowIntro}>
          <p className={`eyebrow ${styles.eyebrow}`}>A controlled start</p>
          <h2 id="workflow-heading">Build the workflow before expanding the role.</h2>
          <p>Start with one queue, make the review boundary visible, then add scope when the handoff is working for the people who own it.</p>
        </div>
        <ol className={styles.workflowSteps}>{workflowSteps.map(([title, description], index) => <li key={title}>
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>)}</ol>
      </div>
    </section>

    <section className={styles.managedSection} aria-labelledby="managed-support-heading">
      <div className={`${styles.shell} ${styles.managedGrid}`}>
        <figure className={styles.managedImageFrame}>
          <Image src={imagery.managedSupport.src} alt={imagery.managedSupport.alt} width={2400} height={1600} sizes="(max-width: 900px) 100vw, 48vw" style={{ objectPosition: imagery.managedSupport.position }} />
        </figure>
        <div className={styles.managedCopy}>
          <p className={`eyebrow ${styles.eyebrow}`}>Managed service support</p>
          <h2 id="managed-support-heading">Support around the role.</h2>
          <p>StealthAgents supports candidate matching and managed remote staffing while your organization defines systems, access, commercial authority, and review standards.</p>
          <Link className={styles.secondaryLink} href="/contact-us">Talk through your workflow <ArrowIcon /></Link>
        </div>
      </div>
    </section>

    <section className={styles.faqSection} aria-labelledby="services-faq-heading">
      <div className={`${styles.shell} ${styles.faqInner}`}>
        <div className={styles.sectionHeading}>
          <p className={`eyebrow ${styles.eyebrow}`}>Service questions</p>
          <h2 id="services-faq-heading">Plan with the boundary visible.</h2>
        </div>
        <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>)}</div>
      </div>
    </section>

    <section className={styles.closingSection}>
      <div className={`${styles.shell} ${styles.closingInner}`}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>Start with the work</p>
          <h2>Bring one queue that needs a clearer handoff.</h2>
          <p>We will help translate it into a focused role brief with useful decision boundaries.</p>
        </div>
        <Link className={styles.primaryLink} href="/contact-us">Plan a consultation <ArrowIcon /></Link>
      </div>
    </section>
  </main>;
}
