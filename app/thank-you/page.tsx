import type { Metadata } from 'next';

const schedulerUrl = 'https://go.oncehub.com/StealthAgentsTeam';
export const metadata: Metadata = { title: 'Choose a time', description: 'Choose a consultation time to discuss an Inside Sales Assistant workflow.', alternates: { canonical: '/thank-you' }, robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main className="confirmation-page"><header className="page-hero"><p className="eyebrow">Consultation scheduling</p><h1>Pick a time that works for you.</h1><p>A free consultation can help turn the workflow into a clear support brief.</p></header><section className="content-wrap"><iframe className="booking-frame" title="Book your consultation with StealthAgents" src={schedulerUrl} loading="eager" /><p className="booking-fallback">If the scheduler does not load, <a href={schedulerUrl}>open the accessible booking page</a>.</p></section></main>;
}
