import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
  canonicalizeBlogTopics,
  canonicalizeTags,
  toCanonicalBlogCategory,
} from '../../utils/taxonomy';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      updatedDate: post.data.updatedDate ?? null,
      category: toCanonicalBlogCategory(post.data.category),
      topics: canonicalizeBlogTopics(post.data.topics ?? []),
      tags: canonicalizeTags(post.data.tags ?? []),
      oneSmallAction: post.data.oneSmallAction ?? null,
      sourceChannel: post.data.sourceChannel,
      earlyRelease: post.data.earlyRelease ?? false,
    }));

  return new globalThis.Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
