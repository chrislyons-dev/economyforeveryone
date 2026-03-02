import { expect, test } from '@playwright/test';

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
  await page.goto('/blog');

  await expect(page.getByRole('heading', { name: 'The Monthly Squeeze Series' })).not.toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Housing: The Bill That Sets the Whole Month on Fire' })
  ).not.toBeVisible();

  await page.goto('/blog?showFuture=1');

  await expect(page.getByRole('heading', { name: 'The Monthly Squeeze Series' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Housing: The Bill That Sets the Whole Month on Fire' })
  ).toBeVisible();
});

test('future related-reading blog links stay live on blog detail pages', async ({ page }) => {
  await page.goto('/blog/fast-relief-slow-repair/');

  const relatedReading = page.getByRole('heading', { name: 'Related reading' }).locator('..');
  await expect(
    relatedReading.getByRole('link', { name: 'The Monthly Squeeze Series' })
  ).toHaveAttribute('href', '/blog/monthly-squeeze-series-index/');
  await expect(
    relatedReading.getByRole('link', {
      name: 'Housing: The Bill That Sets the Whole Month on Fire',
    })
  ).toHaveAttribute('href', '/blog/monthly-squeeze-housing/');
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
