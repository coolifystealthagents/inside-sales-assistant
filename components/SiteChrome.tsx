'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';
import { ArrowIcon } from './Icons';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
        <Image src="/logo.svg" alt="" width={42} height={42} priority />
        <span>{site.name}</span>
      </Link>
      <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}>
        <span className="nav-toggle-label">Menu</span><span aria-hidden="true" className="nav-toggle-mark">{open ? '×' : '+'}</span>
      </button>
      <nav id="primary-navigation" className={open ? 'is-open' : ''} aria-label="Primary navigation">
        {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
      <div className="powered powered-header"><Image src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width={104} height={25} /><span>Powered by StealthAgents</span></div>
      <Link id="cta-global-header-bookcall" className="button compact header-cta" href="/contact-us">Start a brief <ArrowIcon /></Link>
    </header>
  </>;
}

export function Footer() {
  return <footer>
    <div className="footer-identity">
      <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
      <p>Specialist remote staff for {site.audience}.</p>
      <div className="powered powered-footer"><Image src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width={126} height={30} /><span>Powered by StealthAgents</span></div>
    </div>
    <div className="footer-links">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}
