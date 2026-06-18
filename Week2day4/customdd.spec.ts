import test from "@playwright/test"

test("Custom dropdown", async ({page}) => {

/* Note: to avoid skip OTP during login ,use below Credential
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025 */

await page.goto('https://login.salesforce.com/')    
//await page.locator('.input.r4.wide.mb16.mt8.username').fill("gauthami.vn@testleaf.com")
await page.locator('.input.r4.wide.mb16.mt8.username').fill("dilipkumar.rajendran@testleaf.com")
//await page.locator('#password').fill("TestLeaf@123")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('//input[@id="Login"]').click()
await page.locator('//span[text()="App Launcher"]').click()
await page.locator('//button[@aria-label="View All Applications"]').click()
await page.waitForTimeout(2000)
await page.locator('[placeholder="Search apps or items..."]').fill('leads')
await page.waitForTimeout(2000)
await page.locator('//mark[text()="Leads"]').click()
await page.click('(//span[text()="Leads"])[1]')
await page.locator('//a[@title="New"]').click()
await page.locator('[aria-label="Salutation"]').first().click()
await page.locator('//span[text()="Mrs."]').click()
})
