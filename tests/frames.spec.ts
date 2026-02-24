import {test } from '@playwright/test';

test(`Frames example`, async({page})=>{

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);

    const framedetails = page.frames();
    console.log(framedetails);

    const framecount = framedetails.length;
    console.log(framecount);

    const framelocator = page.frameLocator(`#courses-iframe`);
    await framelocator.locator(`li a[href='lifetime-access']:visible`).click();

    await page.waitForTimeout(5000);



});
