import {test,expect} from "@playwright/test"

test('leaftaps login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")

//nth(0) or first() -> for first match
//nth(1)-> second match
//nth(n)-> last()-> for last match
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator(`text='CRM/SFA'`).click()

let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);

await expect(page).toHaveTitle('My Home | opentaps CRM')
await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main')

})