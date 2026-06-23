import {test,expect} from "@playwright/test"

test('Learn assertions in Playwright', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

// Locator Assertion-retries
await expect(page.locator('#username')).toBeVisible()
await expect(page.locator('#username')).toBeEnabled()

//By default-hard assertion-stops the execution 
await expect(page.locator('#username')).toBeEnabled({timeout:8000})

//Soft Assertion
//await expect.soft(page.locator('#username')).toBeDisabled()


const textboxstatus = await page.locator('#username').isEditable()

//Generic Assertion-will not retries
expect.soft(textboxstatus).toBeFalsy()
const Title=await page.title()
console.log(Title); //Leaftaps - TestLeaf Automation Platform
const Url=page.url() 
console.log(Url) //https://leaftaps.com/opentaps/control/main

expect(Title).toBe('Leaftaps - TestLeaf Automation Platform')
expect(Url).toContain('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill("demoscr2",{timeout:2000})
  
})