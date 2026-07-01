import {test, expect} from "@playwright/test"

import path from 'path'

test('Learn file upload using input<type=file>', async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

let fileupload=page.locator('(//input[@type="file"])[1]')

//Relative path -can be any where or nearby folder in the workspace
fileupload.setInputFiles('Utils/TestLeaf Logo.png')

//verify using innertext()
let fileupld=await page.locator(`//span[text()="TestLeaf Logo.png 12.5 KB"]`).innerText()
console.log(fileupld)

expect(fileupld).toBe('TestLeaf Logo.png 12.5 KB')

//locator assertion- for exact match
await expect(page.locator(`//span[text()="TestLeaf Logo.png 12.5 KB"]`)).toHaveText('TestLeaf Logo.png 12.5 KB')

//locator assertion-for partial match
await expect(page.locator(`//span[text()="TestLeaf Logo.png 12.5 KB"]`)).toContainText('TestLeaf')

//partial match using regular expressions
await expect(page.locator(`//span[text()="TestLeaf Logo.png 12.5 KB"]`)).toHaveText(/TestLeaf.*/)

})


test.only('Learn fileupload using event listener', async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/upload')

// create the listener
let fupload=page.waitForEvent('filechooser')

//trigger the click action
await page.locator('//div[@id="drag-drop-upload"]').click()

//resolve the promise and store the reference for upload
let fileupload=await fupload

console.log((path.join(__dirname)));
//PS C:\Users\admin\OneDrive - TestLeaf Software Solutions Private Limited\Documents\Playwright\PW_JUNE_WD_2026\tests\Week4day3>


//Absolute path

fileupload.setFiles(path.join(__dirname, "../../Utils/Qeagle.png"))

//multiple file upload, use below syntax for array of files
//fileupload.setFiles([(path.join(__dirname,"../../Utils/Qeagle.png")),path.join()])

//verify using partial text 

await expect(page.locator('//span[text()="Qeagle.png"]')).toContainText('Qeagle')

    
})