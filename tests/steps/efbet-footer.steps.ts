import { Given, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { CustomWorld } from '../config/world';

Given('I navigate to the {string} tab on the footer page', async function (this: CustomWorld, tabName: string) {
  const page = this.page as Page;
  await page.goto('https://www.efbet.com/UK');
  await page.getByRole('link', { name: tabName }).click();
});

Then('I should see the following footer tabs:', async function (this: CustomWorld, dataTable) {
  const page = this.page as Page;
  const footer = page.locator('#OptFooterComponent31');

  const expectedTabs = dataTable.raw().flat();

  for (const tab of expectedTabs) {
    await expect(footer).toContainText(tab);
  }
});

Then('I should see the following payment methods:', async function (this: CustomWorld, dataTable) {
  const page = this.page as Page;
  const paymentMethods = dataTable.raw().flat();

  for (const method of paymentMethods) {
    const imgLocator = page.locator(`img[alt="${method}"]`);
    await expect(imgLocator).toBeVisible();
  }
});

Then('I should see the following social media links:', async function (this: CustomWorld, dataTable) {
  const page = this.page as Page;
  const socialMediaLinks = dataTable.raw().flat();

  for (const social of socialMediaLinks) {
    const imgLocator = page.locator(`img[alt="${social}"]`);
    await expect(imgLocator).toBeVisible();
  }
});

Then('I should see the following disclaimers:', async function (this: CustomWorld, dataTable) {
  const page = this.page as Page;
  const footer = page.locator('#OptFooterComponent31-disclaimerContainer');

  const expectedDisclaimers = dataTable.raw().flat();

  for (const disclaimer of expectedDisclaimers) {
    await expect(footer).toContainText(disclaimer);
  }
});