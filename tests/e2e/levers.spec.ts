import { expect, test } from '@playwright/test';

test('levers index renders cards and filter controls', async ({ page }) => {
  await page.goto('/levers');

  await expect(page.getByRole('heading', { name: 'Levers' })).toBeVisible();
  await expect(page.getByLabel('Search')).toBeVisible();
  await expect(page.getByLabel('Family')).toBeVisible();
  await expect(page.getByLabel('Type')).toBeVisible();
  await expect(page.getByLabel('Tag')).toBeVisible();

  const visibleItems = page.locator('.lever-item:not([hidden])');
  await expect(visibleItems.first()).toBeVisible();
  await expect(page.locator('#lever-filter-status')).toContainText('Showing ');
});

test('levers index filters by type and search', async ({ page }) => {
  await page.goto('/levers');

  await page.getByLabel('Type').selectOption('Bridge');
  await expect(page.locator('#lever-filter-status')).not.toContainText('Showing 0 of');
  await expect(
    page.getByRole('heading', { name: 'How to Explain E4E Without Sounding Partisan' })
  ).toBeVisible();

  await page.getByLabel('Type').selectOption('all');
  await page.getByLabel('Search').fill('ai disruption');
  await expect(page.getByRole('heading', { name: 'AI Disruption' })).toBeVisible();
});

test('ai disruption lever detail shows governance updates', async ({ page }) => {
  await page.goto('/levers/ai-disruption/');

  await expect(
    page.locator('.ledger-header').getByRole('heading', { name: 'AI Disruption' })
  ).toBeVisible();
  await expect(
    page.getByText('frontier-lab versus defense-procurement guardrail conflict')
  ).toBeVisible();
  await expect(page.getByText('Use-boundary enforcement')).toBeVisible();
});
