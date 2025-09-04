import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 5 * 12 * 1000,
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test',
    baseURL: 'https://www.saucedemo.com/?utm_source=chatgpt.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'setup.ts',

    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        storageState: 'state.json'
       },
       dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        storageState: 'state.json'
       },
       dependencies: ['setup']
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], 
        storageState: 'state.json'
      },
      dependencies: ['setup']
    },
  ],
});