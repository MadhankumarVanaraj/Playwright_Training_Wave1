import test from "@playwright/test";
import * as XLSX from "xlsx";

// Load the workbook
const workbook = XLSX.readFile("Data/login.xlsx");

// Select the first sheet (or specify by name)
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const records: any[] = XLSX.utils.sheet_to_json(worksheet);

test.describe.serial(`Login tests in serial mode`, async () => {
  
  for (let data of records) {
    test(`Login test using Excel ${data.tcid}`, async ({ page }) => {
      
      await page.goto(`https://orgfarm-f2e792f5b2-dev-ed.develop.my.salesforce.com/`);

      await page.locator("#username").fill(data.username);
      await page.locator("#password").fill(data.password);
      await page.waitForTimeout(2000);
    });
  }
});
