'use client';

import { useEffect, useRef, useState } from 'react';
import provenance from '@/app/review-provenance.json';

export function TestimonialsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const paused = userPaused || interactionPaused;

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let resetTimer = 0;
    const timer = window.setInterval(() => {
      const first = rail.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = Number.parseFloat(getComputedStyle(rail).columnGap || '0');
      rail.scrollBy({ left: first.offsetWidth + gap, behavior: 'smooth' });
      resetTimer = window.setTimeout(() => {
        if (rail.firstElementChild) rail.append(rail.firstElementChild);
        rail.scrollLeft = 0;
      }, 900);
    }, 4200);
    return () => { window.clearInterval(timer); window.clearTimeout(resetTimer); };
  }, [paused]);

  return <section className="testimonials" aria-labelledby="reviews-title" onMouseEnter={() => setInteractionPaused(true)} onMouseLeave={() => setInteractionPaused(false)} onFocusCapture={() => setInteractionPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false); }}>
    <div className="reviews-heading">
      <div><p className="eyebrow">Verified client perspective</p><h2 id="reviews-title">StealthAgents reviews</h2></div>
      <div className="reviews-controls">
        <button className="reviews-pause" type="button" aria-pressed={userPaused} onClick={() => setUserPaused(value => !value)}>{userPaused ? 'Resume reviews' : 'Pause reviews'}</button>
        <a href={provenance.source} target="_blank" rel="noopener noreferrer">View official source</a>
      </div>
    </div>
    <div ref={railRef} className="testimonials-rail" aria-label="Ten verified reviews">
      {provenance.records.map(review => <article className="testimonial-card" key={review.name}>
        <div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
        <h3>{review.headline}</h3><blockquote>{review.body}</blockquote>
        <p><strong>{review.name}</strong><span>{review.detail}</span></p>
      </article>)}
    </div>
  </section>;
}
