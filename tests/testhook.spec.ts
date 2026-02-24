import { test, expect, Page } from '@playwright/test';

test.describe('Hooks Demo', () => {
  let page: Page;

  // Runs once before all tests in this block
  test.beforeAll(async ({ browser }) => {
    console.log('>> Global setup: Launching browser context');
    const context = await browser.newContext();
    page = await context.newPage();
  });

  // Runs before each test
  test.beforeEach(async () => {
    console.log('>> Test setup: Navigating to Salesforce.com');
    await page.goto('https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/');
  });

  // Sample test 1
  test('Page title should be correct', async () => {
    await expect(page).toHaveTitle('Login | Salesforce');
  });

  // Sample test 2
  test('Remember me text should be correct.', async () => {
    const heading = page.locator("//label[text()='Remember me']");
    await expect(heading).toHaveText("Remember me");
  });

  // Runs after each test
  test.afterEach(async () => {
    console.log('>> Test cleanup: Clearing cookies');
    await page.context().clearCookies();
  });

  // Runs once after all tests
  test.afterAll(async () => {
    console.log('>> Global cleanup: Closing browser context');
    await page.context().close();
  });
});
