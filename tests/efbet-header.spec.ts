import { test, expect } from '@playwright/test';

test.describe('Efbet Sports Betting', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/UK');
  });

  test('1. Check navigation tabs', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();
    const navigationList = page.locator('#EfbetChannelNavigationComponent15-navigation-list');
    
    const expectedTabs = [
      'Sport',
      'In-Play',
      'Casino',
      'Live Casino',
      'Virtuals',
      'TV Games',
      'Bonuses',
      'Casinos'
    ];

    for (const tab of expectedTabs) {
      await expect(navigationList).toContainText(tab);
    }
  });

  test('2. Check left navigation tabs', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    // Локатор для лівого бічного меню
    const leftNav = page.locator('#ph-main-left');

    const expectedTabs = [
      'Program',
      'My Favourites',
      'Top Events',
      'Football',
      'Euro 2024',
      'Copa America 2024',
      'Wimbledon',
      'Tennis',
      'Basketball',
      'Volleyball',
      'Handball',
      'Table Tennis',
      'Darts',
      'Boxing/MMA',
      'American football',
      'Aussie rules',
      'Baseball',
      'Rugby',
      'ESport'
    ];

    for (const tab of expectedTabs) {
      await expect(leftNav).toContainText(tab);
    }
  });
});
