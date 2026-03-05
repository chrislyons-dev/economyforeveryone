import { useMemo, useState } from 'react';
import { getCaseStudyBucketLabel, getEvidenceLevelLabel } from '../utils/taxonomy';

type CaseStudyIndexItem = {
  slug: string;
  title: string;
  bucket: string;
  corePattern: string;
  studyDate: string;
  summary: string;
  claim: string;
  evidenceLevel: string;
  eventWindowStart: string | null;
  eventWindowEnd: string | null;
  tags: string[];
  policyDomain: string[];
};

type CaseStudyBrowserProps = {
  items: CaseStudyIndexItem[];
};

const bucketToneClass: Record<string, string> = {
  success: 'action-card',
  failure: 'guardrail-card',
  mixed: 'receipt-card',
  'stress-test': 'receipt-card',
  turnaround: 'action-card',
  warning: 'guardrail-card',
};

export default function CaseStudyBrowser({ items }: CaseStudyBrowserProps) {
  const [query, setQuery] = useState('');
  const [bucket, setBucket] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  const buckets = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.bucket))).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const searched = items.filter((item) => {
      if (bucket !== 'all' && item.bucket !== bucket) return false;
      if (!q) return true;
      const haystack = [
        item.title,
        item.summary,
        item.claim,
        item.corePattern,
        item.tags.join(' '),
        item.policyDomain.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });

    return searched.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'oldest') {
        return new Date(a.studyDate).valueOf() - new Date(b.studyDate).valueOf();
      }
      return new Date(b.studyDate).valueOf() - new Date(a.studyDate).valueOf();
    });
  }, [bucket, items, query, sortBy]);

  return (
    <div className="section-grid">
      <div className="case-filter-row panel">
        <div>
          <label htmlFor="case-study-filter-search">Search</label>
          <input
            id="case-study-filter-search"
            className="case-filter-input"
            type="search"
            placeholder="Title, claim, pattern, tags..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="case-study-filter-bucket">Bucket</label>
          <select
            id="case-study-filter-bucket"
            className="case-filter-input"
            value={bucket}
            onChange={(event) => setBucket(event.target.value)}
          >
            <option value="all">All buckets</option>
            {buckets.map((value) => (
              <option key={value} value={value}>
                {getCaseStudyBucketLabel(value)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="case-study-filter-sort">Sort</label>
          <select
            id="case-study-filter-sort"
            className="case-filter-input"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as 'newest' | 'oldest' | 'title')}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <p className="muted-note">{filtered.length} case studies</p>

      <ol className="timeline-list">
        {filtered.map((study) => (
          <li
            key={study.slug}
            className={[
              'panel',
              'timeline-item',
              bucketToneClass[study.bucket] ?? 'receipt-card',
            ].join(' ')}
          >
            <p className="eyebrow">
              {getCaseStudyBucketLabel(study.bucket)} | {study.studyDate.slice(0, 10)}
            </p>
            <h3 className="title-reset case-study-title">{study.title}</h3>
            <p>
              <strong>Core pattern:</strong> {study.corePattern}
            </p>
            <p>
              <strong>Claim:</strong> {study.claim}
            </p>
            {study.summary && <p>{study.summary}</p>}
            <p className="muted-note">
              <strong>Evidence level:</strong> {getEvidenceLevelLabel(study.evidenceLevel)}
              {study.eventWindowStart && study.eventWindowEnd && (
                <>
                  {' '}
                  | <strong>Event window:</strong> {study.eventWindowStart.slice(0, 10)} to{' '}
                  {study.eventWindowEnd.slice(0, 10)}
                </>
              )}
            </p>
            <p>
              <a className="case-read-link" href={`/case-studies/${study.slug}/`}>
                Read full case
              </a>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
