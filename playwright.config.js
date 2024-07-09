import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: 'https://www.efbet.com',
    browserName: 'chromium',
    trace: 'on-first-retry',
  },
});
