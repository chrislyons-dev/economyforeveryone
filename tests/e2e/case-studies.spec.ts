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

test('case study detail exposes related methods links and print control', async ({ page }) => {
  await page.goto('/case-studies/housing-guardrails-and-squeeze/');

  await expect(page.getByRole('button', { name: 'Print or save as PDF' })).toBeVisible();
  await expect(page.getByText('View receipt groups filtered to this case study')).toHaveAttribute(
    'href',
    '/methods-and-sources?case=housing-guardrails-and-squeeze#receipt-groups'
  );
  await expect(page.getByRole('link', { name: /Official data \(\d+\)/ })).toHaveAttribute(
    'href',
    '/methods-and-sources?case=housing-guardrails-and-squeeze&type=official-data#receipt-groups'
  );
});

test('methods page applies case and type filters from related case-study links', async ({
  page,
}) => {
  await page.goto(
    '/methods-and-sources?case=housing-guardrails-and-squeeze&type=official-data#receipt-groups'
  );

  await expect(page.locator('#receipt-filter-case')).toHaveValue('housing-guardrails-and-squeeze');
  await expect(page.locator('#receipt-filter-type')).toHaveValue('official-data');

  const items = page.locator('.receipt-group-item:not([hidden])');
  await expect(items).toHaveCount(1);
  await expect(items.first()).toContainText('Housing Scarcity, Upzoning, and Throughput');
});
