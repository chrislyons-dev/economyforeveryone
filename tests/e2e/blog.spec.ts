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
