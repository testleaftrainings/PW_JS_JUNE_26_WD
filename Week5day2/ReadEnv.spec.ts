import test from "@playwright/test";
import dotenv from 'dotenv'

//toogle etween different environment
let fileName = process.env.envFile || 'prod' || 'qa'

//Here if i dont set the environment using command 
// it's set as undefined in that scenario by default 'qa' environment should be taken

dotenv.config({path:`Data/${fileName}.env`})
//to read a single env file
//dotenv.config({path:"Data/qa.env"})

test('Learn to read .ENV file',async({page})=>{
    //console.log(process.env.username);
    await page.goto(process.env.L_URL as string)
    await page.locator('#username').fill(process.env.L_UserName as string)
    await page.locator('#password').fill(process.env.L_Password as string)
    await page.locator('.decorativeSubmit').click()
    
})