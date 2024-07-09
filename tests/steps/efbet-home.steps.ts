import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { CustomWorld } from '../config/world';

Given('I navigate to the {string} tab on the home page', async function (this: CustomWorld, tabName: string) {
  const page = this.page as Page;
  await page.goto('https://www.efbet.com/UK');
  const tab = page.locator('a', { hasText: tabName }).first();
  await tab.waitFor({ state: 'visible', timeout: 30000 });
  await tab.click();
});

Then('I should see {string}', async function (this: CustomWorld, text: string) {
  const page = this.page as Page;
  const element = page.locator(`text=${text}`).first();
  await element.waitFor({ state: 'visible', timeout: 30000 });
  const isVisible = await element.isVisible();
  expect(isVisible).toBe(true);
});

When('I click on {string}', async function (this: CustomWorld, linkText: string) {
  const page = this.page as Page;
  const link = page.locator('a', { hasText: linkText }).first();
  await link.waitFor({ state: 'visible', timeout: 30000 });
  await link.click();
});

Then('I should see {string} in the title', async function (this: CustomWorld, text: string) {
  const page = this.page as Page;
  await expect(page).toHaveTitle(new RegExp(text));
});
