import {test,chromium,expect} from'@playwright/test'

test(`assersion validation`, async()=>
{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);

    expect(page).toHaveURL(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);
    expect(page).toHaveTitle('Login | Salesforce');

    await page.locator(`#username`).fill(`madhansrs681@agentforce.com`);
    await expect(page.locator(`#username`)).toBeEditable();
    await page.locator('#username').screenshot({ path: 'screenshots/screenshot.png' });
    await page.locator(`#password`).click();
    expect(page.locator(`#username`)).toHaveValue(`madhansrs681@agentforce.com`);


    await page.locator(`//label[text()='Remember me']`).click();
    const remembermeCheckbox = page.locator(`//label[text()='Remember me']`);
    await page.waitForTimeout(3000);
    expect(remembermeCheckbox).toHaveText(`Remember me`);

    expect(page.locator(`#forgot_password_link`)).toContainText(`Forgot Your Password`);

    const loginbtn = page.locator(`#Login`);
    expect(loginbtn).toBeVisible();
    expect(loginbtn).toBeEnabled();
});

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

test(`Open Chrome`, async({})=>{

    const browser = await chromium.launch({headless:false,channel:'msedge'});
    // const browser = await firefox.launch();
    // const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.waitForTimeout(5000);
});


test('drop-down practice',async({page})=>
{
await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.locator(`#username`).fill(`Demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();
await page.locator(`div a`).nth(1).click();
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.selectOption(`#createLeadForm_dataSourceId`,{value: 'LEAD_DIRECTMAIL'});//1)value(1st priority) - Why? - The values are directly coming from data base. 
await page.waitForTimeout(5000);
await page.selectOption(`#createLeadForm_dataSourceId`,{label: 'Cold Call'});//2)label-(Label text-visible text-2nd priority) (if we think the value not change then we can use this - like country name drop down, gender)
await page.waitForTimeout(5000);
await page.selectOption(`#createLeadForm_dataSourceId`,{index:5}); //3)Index(start from 0, and also we have to count from ourself
await page.waitForTimeout(5000);
})  