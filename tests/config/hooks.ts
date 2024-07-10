import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { CustomWorld } from '../config/world';

setDefaultTimeout(60000);

let browser: Browser;

Before(async function (this: CustomWorld) {
  browser = await chromium.launch();
  const page = await browser.newPage();
  this.page = page;
});

After(async function (this: CustomWorld) {
  if (this.page) {
    await this.page.close();
  }
  if (browser) {
    await browser.close();
  }
});