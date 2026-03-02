import { useEffect, useMemo, useState } from 'react';
import { parseShowFutureOverride, shouldShowScheduledPost } from '../utils/blog-schedule';
import {
  BLOG_HIDDEN_TAGS,
  BLOG_HIDDEN_TOPICS,
  getBlogCategoryLabel,
  getBlogTopicLabel,
  getSourceChannelLabel,
  getTagLabel,
  getVisibleTags,
} from '../utils/taxonomy';

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
  const [topic, setTopic] = useState('all');
  const [tag, setTag] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');
  const [showFuture, setShowFuture] = useState(false);

  useEffect(() => {
    const search =
      typeof globalThis.location?.search === 'string' ? globalThis.location.search : '';
    setShowFuture(parseShowFutureOverride(search));
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category))).sort();
  }, [items]);

  const topics = useMemo(() => {
    return Array.from(
      new Set(items.flatMap((item) => getVisibleTags(item.topics, BLOG_HIDDEN_TOPICS)))
    ).sort();
  }, [items]);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();

    items.forEach((item) => {
      getVisibleTags(item.tags, BLOG_HIDDEN_TAGS).forEach((value) => {
        counts.set(value, (counts.get(value) ?? 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .filter(([, count]) => count >= 2)
      .map(([value]) => value)
      .sort();
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const searched = items.filter((item) => {
      if (!shouldShowScheduledPost(item.pubDate, showFuture)) return false;
      if (category !== 'all' && item.category !== category) return false;
      if (topic !== 'all' && !item.topics.includes(topic)) return false;
      if (tag !== 'all' && !item.tags.includes(tag)) return false;
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
  }, [category, items, query, showFuture, sortBy, tag, topic]);

  return (
    <div className="section-grid">
      <div className="case-filter-row panel">
        <div>
          <label htmlFor="blog-filter-search">Search</label>
          <input
            id="blog-filter-search"
            className="case-filter-input"
            type="search"
            placeholder="Title, summary, tags..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="blog-filter-category">Category</label>
          <select
            id="blog-filter-category"
            className="case-filter-input"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((value) => (
              <option key={value} value={value}>
                {getBlogCategoryLabel(value)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="blog-filter-topic">Topic</label>
          <select
            id="blog-filter-topic"
            className="case-filter-input"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          >
            <option value="all">All topics</option>
            {topics.map((value) => (
              <option key={value} value={value}>
                {getBlogTopicLabel(value)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="blog-filter-tag">Tag</label>
          <select
            id="blog-filter-tag"
            className="case-filter-input"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            <option value="all">All tags</option>
            {tags.map((value) => (
              <option key={value} value={value}>
                {getTagLabel(value)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="blog-filter-sort">Sort</label>
          <select
            id="blog-filter-sort"
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

      {showFuture && (
        <p className="muted-note">
          Preview active: showing future-dated posts because <code>?showFuture=1</code> is set.
        </p>
      )}

      <p className="muted-note">{filtered.length} posts</p>

      <ol className="timeline-list">
        {filtered.map((post) => (
          <li key={post.slug} className="panel timeline-item receipt-card">
            <p className="eyebrow">
              {getBlogCategoryLabel(post.category)} | {post.pubDate.slice(0, 10)} |{' '}
              {getSourceChannelLabel(post.sourceChannel)}
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
