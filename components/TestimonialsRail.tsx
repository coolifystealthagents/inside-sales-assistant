'use client';

import { useEffect, useRef, useState } from 'react';
import provenance from '@/app/review-provenance.json';

export function TestimonialsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const paused = interactionPaused;

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let previous = performance.now();
    let position = rail.scrollLeft;
    const move = (now: number) => {
      position += Math.min(now - previous, 50) * 0.03;
      previous = now;
      const first = rail.firstElementChild as HTMLElement | null;
      const duplicate = rail.children[provenance.records.length] as HTMLElement | undefined;
      const distance = first && duplicate ? duplicate.offsetLeft - first.offsetLeft : 0;
      if (distance > 0 && position >= distance) position %= distance;
      rail.scrollLeft = Math.round(position);
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return <section className="testimonials" aria-labelledby="reviews-title"   onFocusCapture={() => setInteractionPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false); }}>
    <div className="reviews-heading">
      <div><p className="eyebrow">Verified client perspective</p><h2 id="reviews-title">StealthAgents reviews</h2></div>
      <div className="reviews-controls">
        <a href={provenance.source} target="_blank" rel="noopener noreferrer">View official source</a>
      </div>
    </div>
    <div ref={railRef} className="testimonials-rail" aria-label="Ten verified reviews">
      {[...provenance.records, ...provenance.records].map((review, index) => <article className="testimonial-card" key={`${review.name}-${index}`} aria-hidden={index >= provenance.records.length || undefined}>
        <div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
        <h3>{review.headline}</h3><blockquote>{review.body}</blockquote>
        <p><strong>{review.name}</strong><span>{review.detail}</span></p>
      </article>)}
    </div>
  </section>;
}
