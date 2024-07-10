import { test, expect } from '@playwright/test';

test.describe('Efbet Footer Navigation Tabs', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/UK');
  });

  test('1. Check footer navigation tabs', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    // Локатор для футера
    const footer = page.locator('#OptFooterComponent31');

    const expectedFooterTabs = [
      'Bonuses and Promotions',
      'Payment Methods',
      'General Terms and Conditions',
      'About efbet',
      'FAQ',
      'Affiliate',
      'Responsible Gaming',
      "Cookie's Policy",
      'Results',
      'Statistics',
      'Privacy Policy',
      'Sponsorships',
      'Telephone: 0700 20 788',
      'support@efbet.com',
      'WhatsApp',
      'Chat'
    ];

    for (const tab of expectedFooterTabs) {
      await expect(footer).toContainText(tab);
    }
  });

  test('2. Check footer payment methods', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    const paymentMethods = [
      'Visa',
      'MasterCard',
      'A1',
      'Maestro',
      'Skrill',
      'Payz',
      'Neteller',
      'ePay',
      'EasyPay',
      'Fast Pay',
      'Cashterminal',
      'Bank Transfer'
    ];

    for (const method of paymentMethods) {
      const imgLocator = page.locator(`img[alt="${method}"]`);
      await expect(imgLocator).toBeVisible();
    }
  });

  test('3. Check footer social media links', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    const socialMediaLinks = [
      'Facebook',
      'YouTube',
      'Twitter',
      'Instagram',
      'Linkedin'
    ];

    for (const social of socialMediaLinks) {
      const imgLocator = page.locator(`img[alt="${social}"]`);
      await expect(imgLocator).toBeVisible();
    }
  });

  test('4. Check footer disclaimers', async ({ page }) => {
    await page.getByRole('link', { name: 'Sport' }).click();

    const footer = page.locator('#OptFooterComponent31-disclaimerContainer');

    const expectedDisclaimers = [
      'The operator of this website is Brobet Limited, Maltese company registration number',
      '(License No: 000030-5878/21.05.2024, License No:000030-6916/20.06.2024 )',
      'This website is operated by Brobet Limited under the following license, issued and regulated by NRA:',
      'Administrative address: Sofia, 20 "James Bourchier" Blvd',
      'efbet ® is a Registered Trademark of Brobet Limited',
      'Gambling can be addictive. Please gamble responsibly.',
      'Copyright © 2006. All Rights Reserved.'
    ];

    for (const disclaimer of expectedDisclaimers) {
      await expect(footer).toContainText(disclaimer);
    }
  });
});
