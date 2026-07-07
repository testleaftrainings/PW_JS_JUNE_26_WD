import test from "@playwright/test";
import login from '../../Data/leaftaps.json'

test.describe.serial('Running in serial mode',()=>{


for(let value of login){
test(`Learn to read json file ${value.TestCaseId}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill(value.UserName)
    await page.locator('#password').fill(value.Password)
    await page.locator('.decorativeSubmit').click()
})
} 
})

let data = login[0]
test(`Learn to read json file ${data.TestCaseId}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill(data.UserName)
    await page.locator('#password').fill(data.Password)
    await page.locator('.decorativeSubmit').click()
}) 
