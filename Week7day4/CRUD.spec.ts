import test from "@playwright/test";
import { request } from "node:http";
import { createLead, fetchLead, generateToken } from "./apiUtility";

test('Integrate playwright UI with API',async({request,page})=>{

    await generateToken(request)
    await createLead(request)
    let lName = await fetchLead(request)
await page.goto('https://login.salesforce.com/?locale=in')
   await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
   await page.getByLabel('Password').fill('Testleaf@2027')
   await page.getByRole('button',{name:'Log In'}).click()
   await page.waitForTimeout(15000)
   await page.getByTitle('App Launcher',{exact:true}).click()
   await page.waitForTimeout(3000)
   await page.waitForLoadState('domcontentloaded')
   await page.getByLabel('View All Applications',{exact:true}).click()
   await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('lead')
   await page.getByText('Lead',{exact:true}).click()
   const searchBox = page.getByPlaceholder('Search this list...')
   await searchBox.fill(lName)
   await searchBox.press('Enter')
   await page.waitForTimeout(3000)


})