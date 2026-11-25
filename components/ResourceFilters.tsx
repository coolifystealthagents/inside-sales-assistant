'use client';

import { FormEvent, useEffect, useState } from 'react';

type ResourceFiltersProps = {
  targetId: string;
  resourceNoun: string;
  topics: string[];
  total: number;
};

function filterResources(targetId: string, query: string, topic: string) {
  const list = document.getElementById(targetId);
  if (!list) return 0;

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const normalizedTopic = topic.toLocaleLowerCase();
  const cards = [...list.querySelectorAll<HTMLElement>('[data-resource-card]')];
  let visible = 0;

  for (const card of cards) {
    const searchText = (card.dataset.search || card.textContent || '').toLocaleLowerCase();
    const cardTopic = (card.dataset.topic || '').toLocaleLowerCase();
    const matches = (!normalizedQuery || searchText.includes(normalizedQuery)) &&
      (!normalizedTopic || cardTopic === normalizedTopic);
    card.hidden = !matches;
    if (matches) visible += 1;
  }

  return visible;
}

export function ResourceFilters({ targetId, resourceNoun, topics, total }: ResourceFiltersProps) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('');
  const [visibleCount, setVisibleCount] = useState(total);

  useEffect(() => {
    setVisibleCount(filterResources(targetId, query, topic));
  }, [query, targetId, topic]);

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setVisibleCount(filterResources(targetId, query, topic));
  }

  function clearFilters() {
    setQuery('');
    setTopic('');
  }

  return <form className="resource-filters" role="search" aria-label={`Search ${resourceNoun}`} onSubmit={applyFilters}>
    <div className="resource-filter-field">
      <label htmlFor={`${targetId}-query`}>Search {resourceNoun}</label>
      <input id={`${targetId}-query`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search titles and summaries" />
    </div>
    <div className="resource-filter-field">
      <label htmlFor={`${targetId}-topic`}>Topic</label>
      <select id={`${targetId}-topic`} value={topic} onChange={event => setTopic(event.target.value)}>
        <option value="">All topics</option>
        {topics.map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
    <div className="resource-filter-actions">
      <button className="button primary compact" type="submit">Apply filters</button>
      <button className="resource-filter-clear" type="button" onClick={clearFilters}>Clear</button>
    </div>
    <p className="resource-filter-count" role="status" aria-live="polite">{visibleCount} {visibleCount === 1 ? resourceNoun.replace(/s$/, '') : resourceNoun}</p>
  </form>;
}
