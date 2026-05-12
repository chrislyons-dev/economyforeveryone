import { expect, test } from '@playwright/test';

test('home page renders and exposes nav', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Make sense of the squeeze and do something about it.' })
  ).toBeVisible();
  await expect(
    page.locator('.nav-links-desktop').getByRole('link', { name: 'Case Studies' })
  ).toBeVisible();
});

test('desktop navigation is visible and marks active page', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/case-studies');

  const desktopNav = page.locator('.nav-links-desktop');
  await expect(desktopNav).toBeVisible();
  await expect(page.locator('.nav-links-desktop a[aria-current="page"]')).toHaveText(
    'Case Studies'
  );
});

test('mobile navigation switches to hamburger and expands links', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/about');

  await expect(page.locator('.mobile-nav')).toBeVisible();
  await expect(page.locator('.nav-links-desktop')).not.toBeVisible();

  await page.locator('.mobile-nav summary').click();
  await expect(page.locator('.nav-links-mobile')).toBeVisible();
  await expect(page.locator('.nav-links-mobile a[aria-current="page"]')).toHaveText('About');
});

test('footer icon links are visible with accessible labels', async ({ page }) => {
  await page.goto('/');

  const footer = page.locator('.footer-minimal');
  await expect(footer).toBeVisible();

  await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Facebook' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Substack' })).toBeVisible();
});
