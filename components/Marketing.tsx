import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { imagery } from '@/lib/site-imagery';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon, ClipboardCheckIcon, ExpandArrowsIcon, QueueListIcon, ShieldIcon, SparkIcon } from './Icons';
import styles from './Marketing.module.css';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;

function ServiceCards() { return <div className="service-grid">{site.services.map((service) => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

const handoffStages = [
  ['Queue intake', 'Record the source, required fields, and due time.', 'The queue owner sets acceptance rules.'],
  ['Preparation', 'Research approved sources and prepare authorized record updates or drafts.', 'The assistant follows the written scope.'],
  ['Review', 'Keep missing evidence and exceptions visible.', 'Authorized leaders resolve decisions and approvals.'],
  ['Closeout', 'Record the result, next owner, and remaining actions.', 'Sellers retain customer commitments.'],
];

const onboardingSteps = [
  { title: 'Choose one recurring queue', copy: 'Start with work that has known inputs and an existing owner.', Icon: QueueListIcon },
  { title: 'Set the handoff boundary', copy: 'Name the source, expected output, access level, reviewer, and exception path.', Icon: ShieldIcon },
  { title: 'Review a bounded sample', copy: 'Compare completed work with the acceptance checklist and keep each exception visible.', Icon: ClipboardCheckIcon },
  { title: 'Expand only after review', copy: 'Add scope when the owner can inspect the record and explain the next action.', Icon: ExpandArrowsIcon },
];

const homeFaqs = [
  ['Where should a team begin?', 'Choose one recurring queue with known inputs, a clear output, an accountable owner, and a small review sample.'],
  ['Does a remote assistant replace sales judgment?', 'No. Assistants can prepare, coordinate, document, and route work. Your authorized leaders keep strategy, approval, pricing, compliance, and customer commitments.'],
  ['Can we begin with one part of the sales process?', 'Yes. A narrow first workflow makes ownership, quality standards, access, and escalation easier to test before the role expands.'],
];

export function HomePage() {
  const design = site.design;
  return <main className={`home design-${design}`}>
    <section className="hero" aria-labelledby="home-heading">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1 id="home-heading">{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div>
      <div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div>
    </section>
    {design === 'signal' && <section className="signal-strip" aria-label="Inside sales workflow"><span>Prospecting support</span><span>CRM hygiene</span><span>Follow through</span><span>Pipeline visibility</span></section>}
    {design === 'conversation' && <section className="conversation-band"><div className="bubble one">Clear replies</div><div className="bubble two">Useful context</div><div className="bubble three">Thoughtful escalation</div></section>}
    <section className="home-audience" aria-label="Inside sales support for">
      <span className="eyebrow">Support shaped for</span>
      <div className="home-audience-list"><span>Sales leaders and revenue teams</span><span>Sales development teams</span><span>Revenue operations</span></div>
    </section>
    <section className="section intro"><p className="eyebrow">Specialist support, shaped around your work</p><div><h2>Build capacity without lowering the bar.</h2><p>{site.manifesto} Your assistant works from documented priorities, clear decision rights, and a practical review rhythm.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose the support your team can actually use.</h2></div><ServiceCards /></section>
    <section className="section home-ledger" aria-labelledby="home-ledger-heading">
      <div className="home-ledger-intro"><p className="eyebrow">The operating record</p><h2 id="home-ledger-heading">Make each handoff easy to review.</h2><p>Connect the request to its source, current owner, required approval, and documented closeout. Keep exceptions visible instead of guessing or silently changing a record.</p><Link className="text-link" href="/services">Explore the role scopes <ArrowIcon /></Link></div>
      <div className="home-ledger-scroll"><table className="home-ledger-table"><thead><tr><th scope="col">Stage</th><th scope="col">Preparation record</th><th scope="col">Decision boundary</th></tr></thead><tbody>{handoffStages.map(([stage, record, owner]) => <tr key={stage}><th scope="row">{stage}</th><td data-label="Preparation record">{record}</td><td data-label="Decision boundary">{owner}</td></tr>)}</tbody></table></div>
    </section>
    <section className="section method"><figure className={styles.methodPhoto}><Image src={imagery.homeWorkflow.src} alt={imagery.homeWorkflow.alt} width={2400} height={1600} sizes="(max-width: 900px) 100vw, 50vw" style={{ objectPosition: imagery.homeWorkflow.position }} /></figure><div><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with the recurring work that already has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol><li><strong>Define the boundary.</strong> Separate preparation and coordination from licensed or executive judgment.</li><li><strong>Document the handoff.</strong> Set inputs, output format, review points, and exception rules.</li><li><strong>Improve with evidence.</strong> Review a focused sample and update the process when patterns emerge.</li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div></section>
    <section className="section home-onboarding" aria-labelledby="home-onboarding-heading">
      <div className="section-heading"><p className="eyebrow">A controlled start</p><h2 id="home-onboarding-heading">Onboard the workflow before expanding the role.</h2><p>Useful support begins with a bounded queue, clear access, and a reviewable handoff.</p></div>
      <ol className="home-onboarding-steps">{onboardingSteps.map(({ title, copy, Icon }) => <li key={title}><span className="home-onboarding-icon" aria-hidden="true"><Icon /></span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </section>
    <section className="section home-fit" aria-labelledby="home-fit-heading">
      <div className="section-heading"><p className="eyebrow">Fit and boundaries</p><h2 id="home-fit-heading">Delegate preparation. Keep authority clear.</h2></div>
      <div className="home-fit-grid"><article><h3>A useful first scope has</h3><ul><li>A recurring queue with known inputs</li><li>Approved sources, templates, or procedures</li><li>A named reviewer and exception path</li><li>An output another teammate can inspect</li></ul></article><article><h3>Authorized leaders retain</h3><ul><li>Sales strategy, targeting, and qualification</li><li>Pricing, discounts, contracts, and promises</li><li>Compliance conclusions and consent exceptions</li><li>Final customer and executive decisions</li></ul></article></div>
    </section>
    <section className="section faq home-faq" aria-labelledby="home-faq-heading"><div className="section-heading"><p className="eyebrow">Common questions</p><h2 id="home-faq-heading">Start with a scope your team can review.</h2></div>{homeFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>
    <section className="closing"><p className="eyebrow">Make room for the work only you can do</p><h2>Let us map your first specialist support role.</h2><p>A focused conversation can turn scattered tasks into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></section>
  </main>;
}
