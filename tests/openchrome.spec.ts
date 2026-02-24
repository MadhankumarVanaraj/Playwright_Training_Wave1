import {chromium, firefox, test, webkit} from '@playwright/test';

test(`Open Chrome`, async({})=>{

    const browser = await chromium.launch({headless:false,channel:'msedge'});
    // const browser = await firefox.launch();
    // const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.waitForTimeout(5000);
});

