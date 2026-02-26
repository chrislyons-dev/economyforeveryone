import { useMemo, useState } from 'react';

type BlogIndexItem = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string | null;
  category: string;
  topics: string[];
  tags: string[];
  oneSmallAction: string | null;
  sourceChannel: string;
};

type BlogBrowserProps = {
  items: BlogIndexItem[];
};

export default function BlogBrowser({ items }: BlogBrowserProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  const categories = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category))).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const searched = items.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (!q) return true;
      const haystack = [
        item.title,
        item.description,
        item.category,
        item.tags.join(' '),
        item.topics.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });

    return searched.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'oldest') return new Date(a.pubDate).valueOf() - new Date(b.pubDate).valueOf();
      return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
    });
  }, [category, items, query, sortBy]);

  return (
    <div className="section-grid">
      <div className="case-filter-row panel">
        <label>
          Search
          <input
            className="case-filter-input"
            type="search"
            placeholder="Title, summary, tags..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label>
          Category
          <select
            className="case-filter-input"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All</option>
            {categories.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort
          <select
            className="case-filter-input"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as 'newest' | 'oldest' | 'title')}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>

      <p className="muted-note">{filtered.length} posts</p>

      <ol className="timeline-list">
        {filtered.map((post) => (
          <li key={post.slug} className="panel timeline-item receipt-card">
            <p className="eyebrow">
              {post.category} · {post.pubDate.slice(0, 10)} · {post.sourceChannel}
            </p>
            <h3 className="title-reset case-study-title">{post.title}</h3>
            <p>{post.description}</p>
            {post.oneSmallAction && (
              <p className="muted-note">
                <strong>One small action:</strong> {post.oneSmallAction}
              </p>
            )}
            <p>
              <a className="case-read-link" href={`/blog/${post.slug}/`}>
                Read full post
              </a>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
