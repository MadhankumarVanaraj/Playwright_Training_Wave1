import { test, expect } from '@playwright/test';

// Grouping related tests
test.describe('Login Workflow Tests', () => {

  // Focus only on this test (others will be skipped automatically)
  test.only('should allow valid user to login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'validUser');
    await page.fill('#password', 'correctPassword');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
  });

  // Skip this test (maybe feature not ready yet)
  test.skip('should allow login with Google OAuth', async ({ page }) => {
    // Implementation pending
  });

  // Mark as fixme (known bug, tracked but not fixed yet)
  test.fixme('should show error for locked accounts', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'lockedUser');
    await page.fill('#password', 'anyPassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error')).toHaveText('Account locked');
  });

  // Negative testing: test must fail
  test.fail('should not allow login with wrong password', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'validUser');
    await page.fill('#password', 'wrongPassword');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard'); // This expectation is wrong on purpose
  });

  // Slow test: doubles timeout
 /*  test.slow('should handle large dataset import after login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'dataUser');
    await page.fill('#password', 'correctPassword');
    await page.click('button[type="submit"]');
    await page.click('#importLargeDataset');
    await expect(page.locator('.success')).toHaveText('Import completed');
  }); */

  // Using custom fixtures or options
  test.use({ storageState: 'loggedInState.json' });
  test('should access dashboard with pre-authenticated state', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('h1')).toHaveText('Welcome back!');
  });

});
