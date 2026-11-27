'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';
import styles from './SiteChrome.module.css';

const exploreLinks = [
  { href: '/services', label: 'All services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

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
    <header data-site-header="sticky" className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
        <Image src="/logo.svg" alt="" width={42} height={42} priority />
        <span>{site.name}<small className="standard-brand-credit">Powered by Stealth Agents</small></span>
      </Link>
      <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}>
        <span className="nav-toggle-label">Menu</span><span aria-hidden="true" className="nav-toggle-mark">{open ? '×' : '+'}</span>
      </button>
      <nav id="primary-navigation" className={open ? 'is-open' : ''} aria-label="Primary navigation">
        {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
    </header>
  </>;
}

export function Footer() {
  return <footer data-site-footer="true" className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.mainGrid}>
        <div className={styles.brandColumn}>
          <Link className={styles.brand} href="/" aria-label={`${site.name} home`}>
            <Image src="/logo.svg" alt="" width={48} height={48} />
            <span>{site.name}</span>
          </Link>
          <p className={styles.brandCredit}>Powered by StealthAgents</p>
          <p className={styles.brandDescription}>{site.heroBody}</p>
        </div>
        <nav data-footer-menu="true" className={styles.linkColumn} aria-labelledby="footer-services-heading">
          <h2 className={styles.columnHeading} id="footer-services-heading">Services</h2>
          <ul data-footer-menu="true" className={styles.linkList}>
            {site.services.map(service => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.name}</Link></li>)}
          </ul>
        </nav>
        <nav data-footer-menu="true" className={styles.linkColumn} aria-labelledby="footer-explore-heading">
          <h2 className={styles.columnHeading} id="footer-explore-heading">Explore</h2>
          <ul data-footer-menu="true" className={styles.linkList}>
            {exploreLinks.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </nav>
      </div>

      <section className={styles.parentCompany} aria-labelledby="footer-parent-heading">
        <div className={styles.parentLogoPlate}>
          <Image src="/images/stealth-agents-logo-black.png" alt="Stealth Agents" width={149} height={50} />
        </div>
        <div className={styles.parentCopy}>
          <p className={styles.parentLabel} id="footer-parent-heading">Parent Company</p>
          <p className={styles.parentDescription}>StealthAgents supports candidate matching and managed remote staffing around a role your business can supervise. {site.name} remains focused on sales operations support.</p>
          <a className={styles.parentLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">
            Powered by StealthAgents <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <div className={styles.copyrightBar}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <Link href="/">{site.domain}</Link>
      </div>
    </div>
  </footer>;
}
