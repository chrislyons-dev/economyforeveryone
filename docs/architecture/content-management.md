# Astro Blog (Static) with React Islands (Option B: `posts.json`)

This spec defines a **no-SSR**, **PR-based** blog workflow using **Astro + Content Collections** and a **React island** for rich filtering/sorting. Posts live as files with frontmatter metadata. The UI fetches a build-generated `posts.json` index.

---

## Goals

- **No SSR.** Site is deployed as static files only.
- Blog posts are **separate files** (Markdown or MDX) committed in branches, merged via PR.
- Posts contain **metadata** (date, title, category, topics, tags, etc).
- Blog index supports **rich sorting + filtering + search** (client-side) without shipping post bodies.
- Keep it fast and simple for ~500 posts.

---

## Non-goals (for now)

- Full-text search across post body content (can be added later with a static indexer like Pagefind).
- CMS integration.
- Server-side personalization or per-request rendering.

---

## Architecture Overview

### Build-time (Astro)

- Posts are stored in `src/content/blog/` as `.md` or `.mdx`.
- `src/content/config.ts` defines a **Content Collection** schema (typed + validated).
- Astro generates:
  - Static post pages: `/blog/<slug>/`
  - Static blog index page: `/blog/`
  - Static JSON index: `/blog/posts.json` (metadata-only)

### Runtime (Browser)

- `/blog/` loads static HTML.
- A **React island** (`BlogBrowser`) hydrates in the browser and fetches `/blog/posts.json`.
- Client-side filtering/sorting/search happens on the fetched metadata.

---

## Requirements

### Hard requirements

- Astro config must set: `output: "static"`
- Do not use SSR adapters or `output: "server"`
- `posts.json` must include **metadata only**, not full post body content
- Draft posts must not be included in production listings/pages

### Nice-to-have

- JS-off fallback for `/blog/` still shows a basic list
- Filter state can optionally sync to query params for shareable URLs

---

## Folder Structure

```text
src/
  content/
    blog/
      2026-02-25-astro-islands.md
      2026-03-04-another-post.mdx
    config.ts
  pages/
    blog/
      index.astro
      [...slug].astro
      posts.json.ts
  components/
    BlogBrowser.tsx
    BlogBrowser.css (optional)
```

---

## Dependencies

- `astro`
- `@astrojs/react`
- `react`, `react-dom`

Install:

- `pnpm add react react-dom`
- `pnpm add -D @astrojs/react`

(Use npm/yarn if preferred.)

---

## Astro Configuration (Static Output)

**File:** `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [react()],
});
```

This guarantees a static build (no SSR at runtime).

---

## Post Authoring

### Post location

All posts live in: `src/content/blog/`

### Frontmatter example

```md
---
title: 'Astro + React Islands: Fast blog UX without a SPA'
description: 'How to mix static pages with client-side filtering.'
pubDate: 2026-02-25
updatedDate: 2026-02-26
draft: false
category: 'Engineering'
topics: ['astro', 'react', 'islands']
tags: ['performance', 'static-site']
heroImage: '/images/posts/astro-islands.png'
---
```

### Conventions

- **Slug** is derived from file name unless explicitly configured otherwise
- `pubDate` is required
- `draft: true` means:
  - post page may still build (optional policy), but it must not appear in lists
  - post must not appear in `posts.json`

---

## Content Collection Schema

**File:** `src/content/config.ts`

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      category: z.string(),
      topics: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
```

Notes:

- `z.coerce.date()` allows dates to be written as strings in frontmatter.
- `image()` validates referenced images live in `src/` and are discoverable by Astro.

Optional future tightening:

- enforce category enum with `z.enum([...])`
- enforce max tag count, etc.

---

## Static JSON Index (`posts.json`)

### Purpose

Provide a metadata-only list of posts for the client-side BlogBrowser UI.

### Endpoint

`/blog/posts.json`

### Implementation

**File:** `src/pages/blog/posts.json.ts`

```ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((p) => ({
      slug: p.slug,
      title: p.data.title,
      description: p.data.description ?? '',
      pubDate: p.data.pubDate, // serialized to ISO by JSON.stringify
      updatedDate: p.data.updatedDate ?? null,
      category: p.data.category,
      topics: p.data.topics ?? [],
      tags: p.data.tags ?? [],
      heroImage: p.data.heroImage ?? null,
    }));

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
```

### Data contract (TypeScript)

Example shape of each entry:

```ts
type PostIndexItem = {
  slug: string;
  title: string;
  description: string;
  pubDate: string; // ISO string after serialization
  updatedDate: string | null;
  category: string;
  topics: string[];
  tags: string[];
  heroImage: string | null;
};
```

---

## Static Post Pages

### Route

`/blog/<slug>/`

### Implementation

**File:** `src/pages/blog/[...slug].astro`

```astro
---
import { getCollection } from 'astro:content';
import { render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<article>
  <header>
    <h1>{post.data.title}</h1>
    <p>
      <em>
        {post.data.pubDate.toDateString()} · {post.data.category}
      </em>
    </p>
  </header>

  <Content />
</article>
```

Policy note:

- This spec excludes drafts from static paths. Draft posts will not be built or deployed.

---

## Blog Index Page (Static + Island)

### Route

`/blog/`

### Requirements

- Static HTML page is present
- React island is loaded with `client:visible` (recommended) or `client:load` (immediate)

### Implementation

**File:** `src/pages/blog/index.astro`

```astro
---
import { getCollection } from 'astro:content';
import BlogBrowser from '../../components/BlogBrowser.tsx';

// Optional JS-off fallback list:
const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
---

<h1>Blog</h1>

<noscript>
  <p>JavaScript is off. Here’s the latest posts:</p>
  <ul>
    {
      posts.slice(0, 25).map((post) => (
        <li>
          <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
          <small> — {post.data.category}</small>
        </li>
      ))
    }
  </ul>
</noscript>

<BlogBrowser client:visible endpoint="/blog/posts.json" />
```

---

## React Island: BlogBrowser

### Responsibilities

- Fetch `/blog/posts.json`
- Render:
  - search box (title/description)
  - category filter
  - topic and tag filters (single-select to start; multi-select optional)
  - sort selector (newest/oldest/title)
- Display filtered list with links to `/blog/<slug>/`

### Performance constraints

- Operate on metadata only
- Avoid expensive operations on each keystroke:
  - use `useMemo`
  - optionally debounce search input

### Optional UX upgrades

- Sync filters into query params (shareable URLs)
- Show counts by category/topic
- “Clear filters” button
- Persist last-used filters in `localStorage`

### Component API

```ts
type BlogBrowserProps = {
  endpoint: string; // "/blog/posts.json"
};
```

---

## Build & Deploy Workflow

### Content workflow

- Create a new branch
- Add a post file under `src/content/blog/`
- Open a PR
- CI runs:
  - typecheck/build (ensures frontmatter matches schema)
  - preview deploy (optional)
- Merge to `main`
- `main` is deployed to production

### What “deployment” produces

A fully static site output (HTML/CSS/JS/assets) that can be hosted on:

- GitHub Pages
- Netlify
- Vercel (static)
- Cloudflare Pages
- S3 + CloudFront
- etc.

No server runtime required.

---

## Testing & Validation

### Build-time validation

- Content schema validation prevents missing/incorrect metadata.
- Drafts are excluded from lists and pages.

Recommended scripts:

- `pnpm astro check` (or `astro check`)
- `pnpm astro build`

### Quick manual checks

- `/blog/` loads and shows results
- `/blog/posts.json` returns correct JSON
- Draft posts are not present anywhere
- Post pages render and link correctly

---

## Future Enhancements

### Static category/topic/tag pages

Create pages like:

- `/blog/category/[category].astro`
- `/blog/topic/[topic].astro`
  generated via `getStaticPaths()` from the collection.

### Full-text search (still static)

Add Pagefind to index the built HTML and provide a fast client-side search UI without shipping post bodies in JSON.

### RSS + sitemap

Generate RSS feed and sitemap as static outputs.

---

## Decisions Log

- **Option B chosen**: build a metadata-only JSON index and fetch it in a React island.
- Keep runtime fast by limiting JSON to metadata only.
- Keep site static-only by enforcing `output: "static"` and using build-time `getStaticPaths()`.

---

## Case Studies Metadata (V1)

Start with case studies first, using Astro Content Collections in `src/content/case-studies/`.

### Required fields

- `title: string`
- `bucket: "success" | "failure" | "turnaround" | "warning" | "mixed"`
- `corePattern: string`
- `studyDate: date` (writeup timestamp for this case-study document)
- `status: "draft" | "published"`
- `claim: string`

### Optional fields (recommended)

- `eventWindowStart: date`
- `eventWindowEnd: date`
- `summary: string`
- `evidenceLevel: "high" | "medium" | "low"` (default `medium`)
- `policyDomain: string[]`
- `tags: string[]`
- `sources: { title, url, publisher?, publishedDate? }[]`

### Date semantics

- `studyDate`: when this analysis was authored/updated.
- `eventWindowStart` and `eventWindowEnd`: when the underlying events occurred.

### File locations

- Schema: `src/content.config.ts` (`case-studies` collection)
- Author template: `src/content/case-studies/TEMPLATE.md`
