import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../config/world';

Given('I navigate to the {string} tab on the header page', async function (this: CustomWorld, tabName: string) {
  const page = this.page;
  await page?.goto('https://www.efbet.com/UK');

  const sportTab = page?.locator(`a:has-text("${tabName}")`).first();
  await sportTab?.waitFor({ state: 'visible', timeout: 5000 });
  await sportTab?.click();
});

Then('I should see the following left navigation tabs:', async function (this: CustomWorld, dataTable) {
  const page = this.page;
  const expectedTabs = dataTable.raw().flat();

  for (const tab of expectedTabs) {
    const tabElement = page?.locator(`#ph-main-left span:has-text("${tab}")`);
    await tabElement?.waitFor({ state: 'visible', timeout: 30000 });
    const isVisible = await tabElement?.isVisible();
    console.log(`Tab: ${tab}, Is Visible: ${isVisible}`);
    expect(isVisible).toBe(true);
  }
});
