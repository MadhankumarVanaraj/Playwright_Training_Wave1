import { test } from "@playwright/test";
import path from "path";

test(`File Upload`,async ({page}) => {

await page.goto(`https://the-internet.herokuapp.com/upload`);

//Scenario1 : When we have "type=file" attribute in the DOM

//Option1 : Relative path

const uploadFile = page.locator(`(//input[@type="file"])[1]`);

/* await uploadFile.setInputFiles("Data/Madhankumar.png");

await page.locator(`#file-submit`).click();

await page.waitForTimeout(10000); */

//Option2 : Absolute path

await uploadFile.setInputFiles([path.join(__dirname,`../Data/learningFileuploads.txt`)]);

await page.locator(`#file-submit`).click();

await page.waitForTimeout(10000);

})

test.only(`Multiple File Upload`,async ({page}) => {

await page.goto(`https://leafground.com/file.xhtml`);

//Option1 : Relative path

const multipleuploadFile = page.locator(`(//input[@type="file"])[2]`)

 //await multipleuploadFile.setInputFiles(["Data/TestLeaf Logo.png","Data/Absolute.png"])

// await page.waitForTimeout(3000)

//Option2 : Absolute path

const filePath1 = path.join(__dirname,`../../Data/Absolute.png`)
const filePath2 = path.join(__dirname,`../../Data/TestLeaf Logo.png`)

await multipleuploadFile.setInputFiles([filePath1,filePath2])

await page.waitForTimeout(3000)

});