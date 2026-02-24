import {chromium, expect, firefox, test, webkit} from '@playwright/test';

test(`Playwright Inbuild locators`, async({})=>{

    const browser = await chromium.launch();
    // const browser = await firefox.launch();
    // const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('textbox',{name:`Username:`}).fill("Madhan");
    await page.waitForTimeout(2000);

    await page.getByLabel(`Email Address:`).fill("Madhankumar.vanaraj@cognizant.com");
    await page.screenshot({ path: 'screenshots/screenshot.png' });
    await page.waitForTimeout(2000);

    await page.getByText(`Submit Form`).click();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder(`Enter your full name`).fill("Madhan kumar Vanaraj");
    await page.waitForTimeout(2000);

    const logo= page.getByAltText(`logo image`);
    await expect(logo).toBeVisible();

    await page.getByTitle(`Home page link`).click();
    await page.waitForTimeout(2000); 
    
    await page.getByTestId(`edit-profile-btn`).click();
    await page.waitForTimeout(5000);

});
