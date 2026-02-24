import {test} from '@playwright/test'
import assert from 'assert';

test('prompt alert', async({page})=>
{
await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
await page.locator(`#alertbtn`).click();

// page.on(`dialog`,dialog=>dialog.dismiss());

await page.waitForTimeout(2000);
await page.locator(`#name`).fill(`Madhan Kumar`);
await page.waitForTimeout(5000);


//prompt:
/* page.on('dialog',async(prompt)=>{
    // await alert.accept();
        const promptMessage = prompt.message()
        console.log(`The message inside the prompt says ${promptMessage}`); 

        const promptType = prompt.type()
        console.log(`The prompt type is ${promptType}`); 

        await page.waitForTimeout(2000);

        if(promptType==='prompt'){
            await prompt.accept("Madhan Kumar")
        }else
            await prompt.dismiss()

    })

await page.locator(`(//span[text()='Show'])[5]`).click();
await page.waitForTimeout(3000); */

});



test('prompt alert', async({page})=>
{
await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
await page.locator(`#alertbtn`).click();

// page.on(`dialog`,dialog=>dialog.dismiss());

await page.waitForTimeout(2000);
await page.locator(`#name`).fill(`Madhan Kumar`);
await page.waitForTimeout(5000);


test('prompt alert', async({page})=>
{
await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
await page.locator(`#alertbtn`).click();

// page.on(`dialog`,dialog=>dialog.dismiss());

await page.waitForTimeout(2000);
await page.locator(`#name`).fill(`Madhan Kumar`);
await page.waitForTimeout(5000);
