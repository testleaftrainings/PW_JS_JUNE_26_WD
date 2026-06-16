/* Brower-Actual browser engine (Chromium, Firefox, WebKit)
Context-Isolated environment like an incognito session
page-A single tab within a context */

import {test,chromium} from "@playwright/test"

//Launch browser using browser instance, browser context, and page

test.only("Launch Browser",async()=>{

//chromium is the base architecture for chrome and edge
const browser=await chromium.launch({headless:false}) //or channel:"msedge"
const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https://www.amazon.in/")
await page.waitForTimeout(2000)

})


//Launch browser using page fixture

test("Launch Browser using page fixture",async({page})=>{

await page.goto("https://www.amazon.in/")
await page.waitForTimeout(2000)


})