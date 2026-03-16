import { expect, test, type Page } from '@playwright/test';

type BlogPostSummary = {
  slug: string;
  title: string;
  pubDate: string;
  earlyRelease?: boolean;
};

const SITE_TIME_ZONE = 'America/Chicago';

function dateKeyInSiteZone(value: string): string | null {
  const directMatch = value.match(/^(\d{4}-\d{2}-\d{2})/);
  if (directMatch) return directMatch[1];

  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) return null;

  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(parsed);
}

function todayKeyInSiteZone(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function isFutureDated(pubDate: string): boolean {
  const pubDateKey = dateKeyInSiteZone(pubDate);
  if (!pubDateKey) return false;
  return pubDateKey > todayKeyInSiteZone();
}

async function fetchBlogPosts(page: Page) {
  const response = await page.request.get('/blog/posts.json');
  expect(response.ok()).toBeTruthy();
  return (await response.json()) as BlogPostSummary[];
}

test('blog index renders migrated posts and supports search', async ({ page }) => {
  await page.goto('/blog');

  const listItems = page.locator('.timeline-list > li');
  await expect(listItems.first()).toBeVisible();
  await expect(
    page.getByRole('heading', { name: "The Canyon Isn't Just Information. It's Economic." })
  ).toBeVisible();

  const search = page.getByLabel('Search');
  await search.fill('mutual aid');
  await expect(
    page.getByRole('heading', { name: "I Didn't Know the Term Mutual Aid Until I Needed It" })
  ).toBeVisible();
});

test('blog index hides future-dated posts by default and shows them with query override', async ({
  page,
}) => {
  const posts = await fetchBlogPosts(page);
  const futurePosts = posts.filter((post) => isFutureDated(post.pubDate) && !post.earlyRelease);

  test.skip(
    futurePosts.length === 0,
    'No future-dated posts found in content; schedule override behavior is not currently exercisable.'
  );

  const candidate = futurePosts[0];

  await page.goto('/blog');

  await expect(page.getByRole('heading', { name: candidate.title })).not.toBeVisible();

  await page.goto('/blog?showFuture=1');

  await expect(page.getByRole('heading', { name: candidate.title })).toBeVisible();
});

test('future related-reading blog links stay live on blog detail pages', async ({ page }) => {
  const posts = await fetchBlogPosts(page);
  const futureSlugs = new Set(
    posts.filter((post) => isFutureDated(post.pubDate)).map((post) => post.slug)
  );
  const detailCandidates = posts.filter((post) => !futureSlugs.has(post.slug));

  test.skip(
    futureSlugs.size === 0,
    'No future-dated posts found; related-reading future-link downgrade is not currently exercisable.'
  );

  let found = false;

  for (const candidate of detailCandidates) {
    await page.goto(`/blog/${candidate.slug}/`);

    const relatedReading = page.getByRole('heading', { name: 'Related reading' }).locator('..');
    if ((await relatedReading.count()) === 0) continue;

    const comingSoonTitle = relatedReading.locator('.coming-soon-link');
    if ((await comingSoonTitle.count()) === 0) continue;

    found = true;

    const firstDowngradedTitle = (await comingSoonTitle.first().textContent())?.trim() ?? '';
    if (firstDowngradedTitle) {
      await expect(relatedReading.getByRole('link', { name: firstDowngradedTitle })).toHaveCount(0);
    }
    await expect(comingSoonTitle.first()).toHaveCSS('font-weight', '700');
    await expect(relatedReading.locator('.coming-soon-note').first()).toContainText(
      '(coming soon)'
    );
    break;
  }

  test.skip(
    !found,
    'Future-dated posts exist but no current related-reading block references them in published posts.'
  );
});

test('blog detail shows related methods links only when real receipt groups exist', async ({
  page,
}) => {
  await page.goto('/blog/2026-02-25-e4e-isnt-a-new-ideology-its-a-practical-mash-up/');

  await expect(page.getByRole('button', { name: 'Print or save as PDF' })).toBeVisible();

  const relatedMethods = page.getByText('View receipt groups filtered to this blog post');
  await expect(relatedMethods).toBeVisible();
  await expect(relatedMethods).toHaveAttribute(
    'href',
    '/methods-and-sources?post=2026-02-25-e4e-isnt-a-new-ideology-its-a-practical-mash-up#receipt-groups'
  );

  await expect(page.getByText('Receipts: tracked in Methods and Sources by type:')).toBeVisible();

  await page.goto('/blog/fast-relief-slow-repair/');
  await expect(page.getByText('View receipt groups filtered to this blog post')).toHaveCount(0);
  await expect(page.getByText('Receipts: tracked in Methods and Sources by type:')).toHaveCount(0);
});

test('methods page applies post and type filters from query params', async ({ page }) => {
  await page.goto(
    '/methods-and-sources?post=2026-02-25-e4e-isnt-a-new-ideology-its-a-practical-mash-up&type=independent-analysis#receipt-groups'
  );

  await expect(page.locator('#receipt-filter-post')).toHaveValue(
    '2026-02-25-e4e-isnt-a-new-ideology-its-a-practical-mash-up'
  );
  await expect(page.locator('#receipt-filter-type')).toHaveValue('independent-analysis');

  const items = page.locator('.receipt-group-item:not([hidden])');
  await expect(items).toHaveCount(3);
  await expect(page.locator('#receipt-filter-status')).toContainText('Showing 3 of ');

  await expect(page.locator('#receipt-group-list')).toContainText(
    'Administrative Burden and Practical Policy Filters'
  );
});
