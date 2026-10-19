import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'What happens next', description: 'Prepare for an Inside Sales Assistant consultation with one clear workflow example.', alternates: { canonical: '/thanks-whats-next' }, robots: { index: false, follow: false } };
export default function NextPage() {
  return <main className="confirmation-page"><section className="not-found"><div><Image src="/logo.svg" alt="" width={58} height={58} /><p className="eyebrow">Prepare for the conversation</p><h1>Bring one workflow to discuss.</h1><p>Choose a recurring workflow that needs a clearer owner, output, or review point. It can help make the conversation practical.</p><Link className="button primary" href="/services">Review support roles</Link></div></section></main>;
}
