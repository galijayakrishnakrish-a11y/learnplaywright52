const { test, expect } = require('@playwright/test');

test('verify login with valid cred', async ({ page }) => {
  // Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter username
  await page.locator("input[name='username']").fill('Admin');

  // Enter password
  await page.locator("input[type='password']").fill('admin123');

  // Click on login button
  await page.locator("button[type='submit']").click();

  // ✅ Verify Dashboard is visible
  await expect(page.locator("h6.oxd-text--h6.oxd-topbar-header-breadcrumb-module"))
    .toHaveText("Dashboard");
});