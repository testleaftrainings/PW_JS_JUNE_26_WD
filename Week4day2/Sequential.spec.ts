import {test} from "@playwright/test"

test("Sequential way of handling windows",async({page,context})=>{

await page.goto("https://www.amazon.in/")

let searchBox=page.locator('[id="twotabsearchtextbox"]')

await searchBox.fill('iphone')
await searchBox.press('Enter')

//create the listener and promise

let parentWindow=context.waitForEvent('page')  

//trigger the event by click action
await page.locator('(//span[contains(text(),"iPhone 17 Pro 512 GB")])[1]').click()

// resolve the promise and capture the new page

let childWindow=await parentWindow

//title of the parent page
console.log(await page.title());

//title of childWindow
console.log(await childWindow.title());

//print the price details of the iphone

let price=await childWindow.locator('(//span[text()="1,54,900"])[1]').innerText()
console.log("The price of the iphone is", price);

//bringToFront()- change the window focus

await page.bringToFront()

await page.locator('(//a[text()="Bestsellers"])[1]').click()
await page.waitForTimeout(2000)


})