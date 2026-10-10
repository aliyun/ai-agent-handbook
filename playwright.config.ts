import { defineConfig, devices } from "@playwright/test";
const base = process.env.SITE_BASE || "/ai-agent-handbook/";
export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: "list",
  use: { baseURL: `http://127.0.0.1:4173${base}`, trace: "retain-on-failure" },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: process.env.PLAYWRIGHT_CHANNEL,
      },
    },
  ],
  webServer: {
    command: "npm run preview -- --port 4173",
    url: `http://127.0.0.1:4173${base}`,
    reuseExistingServer: !process.env.CI,
  },
});
