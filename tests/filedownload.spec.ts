import { test } from "@playwright/test";
import path from "path";

test(`File Download`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/download`);

    const filePromise = page.waitForEvent("download");

    await page.locator(`//a[text()='sampleFile.png']`).click() // This click action will download the file

    const fDown = await filePromise // resolving the promise ones after the download action is complete

    /* Option1 : Relative path */

    await fDown.saveAs("Data/Madhankumar.png"); // to use cutomized filename 

// await fDown.saveAs(`Data/${fDown.suggestedFilename()}`);// to use original filenname

    /* Option2 : Absolute path */
//Downloading the file to Data folder using absolute path of the current file.

// await fDown.saveAs(path.join(__dirname,`../Data/Absolute.png`)) // __dirname--> current module, to use cutomized filename


// await fDown.saveAs(path.join(__dirname,`../Data`,fDown.suggestedFilename()))

//Option3 :

await fDown.saveAs("C:\\DownloadedImage.png");
})