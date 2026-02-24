import {test, expect} from '@playwright/test'

test(`Window Handling`,async({page,context})=>
{
    await page.goto(`https://www.flipkart.com/`);

    await page.locator(`div input[title='Search for Products, Brands and More']`).nth(0).fill(`phones`);
    const searchtxtbox = page.locator(`div input[title='Search for Products, Brands and More']`).nth(0);
    await searchtxtbox.press(`Enter`);

    await page.waitForTimeout(3000);
/* 
    const newpage = context.waitForEvent(`page`)
    await page.locator(`//div[text()='MOTOROLA g06 power (Pantone Tendril, 64 GB)']`).click();

    const childPage = await newpage
    
    console.log(await page.title());
    await page.waitForTimeout(3000);
    console.log(await childPage.title()); */


    const [childPage] =await Promise.all([context.waitForEvent(`page`), page.locator(`//div[text()='MOTOROLA g06 power (Pantone Tendril, 64 GB)']`).click()]);
    
    await page.waitForTimeout(3000);
    console.log(await childPage.title());
    console.log(await page.title());
});