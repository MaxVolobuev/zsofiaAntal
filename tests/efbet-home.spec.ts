import { test, expect } from '@playwright/test';

test.describe('Efbet Sports Betting', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/UK');
  });

  test('1. Navigate to Sport Tab', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();
    const element = page.getByText("Today's Program");
    await expect(element).toBeVisible({ timeout: 60000 });
  });

  test('2. Select a Sport and Euro 2024 tab', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    const footballLink = page.locator('a').filter({ hasText: 'Euro 2024' }).first();

    await footballLink.click();
  });

  test('3. Check presence of element with text "More..."', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();
    const element = page.getByText("More...");
    await expect(element).toBeVisible({ timeout: 60000 });
  });
});
