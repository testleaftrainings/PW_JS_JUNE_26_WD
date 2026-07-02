import {test} from "@playwright/test"

import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

//test.describe.serial('Run in serial mode',async()=>{
//Absolute path
let value:any[]=parse(fs.readFileSync(path.join(__dirname,'../../Data/login.csv')),{columns:true,skip_empty_lines:true})
// let data=fs.readFileSync('Data/login.csv','utf-8')

// console.log(data);
/* TestcaseId,Username,Password
TC001,dilipkumar.rajendran@testleaf.com,TestLeaf@2025
TC002,gauthami.vn@testleaf.com,TestLeaf@123 */

// console.log(typeof data);//string

// console.log(value);

/* [
  {
    TestcaseId: 'TC001',
    Username: 'dilipkumar.rajendran@testleaf.com',
    Password: 'TestLeaf@2025'
  },
  {
    TestcaseId: 'TC002',
    Username: 'gauthami.vn@testleaf.com',
    Password: 'TestLeaf@123'
  }
] */
// console.log(typeof value)//object

// console.log(value[0].Username);//dilipkumar.rajendran@testleaf.com
// console.log(value[0].Password);//TestLeaf@2025

// read a single data from csv file
// test('Learn to read data from CSV file', async ({page}) => {

// await page.goto('https://login.salesforce.com/')
// await page.locator('#username').fill(value[1].Username)
// await page.locator('#password').fill(value[1].Password)
// await page.locator('#Login').click()
    
// })

//use for loop to iterate the array of data

for(let credential of value){
test(`Learn to read data from CSV file ${credential.TestcaseId}`, async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill(credential.Username)
await page.locator('#password').fill(credential.Password)
await page.locator('#Login').click()
    
})
}

//})

//for of
let array=[12,24,26,27]
for(let arr of array){
    console.log(arr);
    
}