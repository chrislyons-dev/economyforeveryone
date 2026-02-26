import { expect, test } from '@playwright/test';

test('case studies list remains visible after hydration and interaction', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/case-studies');

  const listItems = page.locator('.timeline-list > li');
  await expect(listItems.first()).toBeVisible();
  const initialCount = await listItems.count();
  expect(initialCount).toBeGreaterThan(0);

  await page.waitForTimeout(1500);
  await expect(listItems.first()).toBeVisible();
  await expect(listItems).toHaveCount(initialCount);

  const search = page.getByLabel('Search');
  await search.fill('costco');
  await expect(listItems.first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Costco' })).toBeVisible();

  await search.clear();
  await expect(listItems).toHaveCount(initialCount);
  expect(pageErrors).toEqual([]);
});

test('case study detail remains visible after navigation and idle time', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/case-studies');
  await page.getByRole('link', { name: 'Read full case' }).first().click();

  await expect(page.locator('.prose-e4e')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Back to case studies' }).first()).toBeVisible();

  await page.waitForTimeout(2000);
  await expect(page.locator('.prose-e4e')).toBeVisible();
  expect(pageErrors).toEqual([]);
});
