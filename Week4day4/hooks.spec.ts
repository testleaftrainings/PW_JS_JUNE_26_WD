import {test} from "@playwright/test"

import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let value:any[]

test.describe.parallel("Runs in serial mode", async()=>{



test.beforeAll("data connectivity", async () => {
console.log("Runs before all the test");
value=parse(fs.readFileSync(path.join(__dirname,'../../Data/login.csv')),{columns:true,skip_empty_lines:true})
})


test.beforeEach('Login functionality', async ({page}) => {
 console.log("Runs before each test");
 
await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill(value[0].Username)
await page.locator('#password').fill(value[0].Password)
await page.locator('#Login').click()
})

test('Accounts Module', async ({page}) => {
console.log("click on Accounts")
await page.locator('//span[text()="Accounts"]').click()
    
})

test('Contacts Module', async ({page}) => {
console.log("click on Contacts")
await page.locator('//span[text()="Contacts"]').click()
    
})


test.afterEach('Test status',async ({},testinfo) => {

console.log("Runs after each test");

    console.log(testinfo.status) //passed
    console.log(testinfo.title);
    
})

test.afterAll('teardown and final report',async()=>{
console.log("Runs after all the test");


})

})

