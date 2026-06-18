import test from "@playwright/test"

test("Basic Xpaths", async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

await page.locator('//input[@id="username"]').fill('demoCSR2')
await page.locator('//label[text()="Password"]').fill('crmsfa')
await page.locator('//input[contains(@class,"Submit")]').click()
await page.locator('//a[contains(text(),"CRM")]').click()
await page.locator('//a[text()="Leads"]').click()
await page.locator('//a[text()="Create Lead"]').click()
await page.locator('(//input[@name="companyName"])[2]').fill("Testleaf")
await page.locator('(//input[@name="firstName"])[3]').fill("Gauthami")
await page.locator('//input[@id="createLeadForm_lastName"]').fill("VN")
//dropdown

//syntax1
//await page.locator('#country').selectOption('IN')
await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:"Conference"})

//syntax2
//await page.selectOption('#country', 'IN');
await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Conference"})
await page.locator('//select[@id="createLeadForm_marketingCampaignId"]').selectOption({label:"Automobile"})
await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({index:2})


const dropDown=page.locator('//select[@id="createLeadForm_industryEnumId"]/option') //17 elements
const DDcount=await dropDown.count() //count=17
console.log(`the no of values in the dropdown ${DDcount}`);// template literal`${}`
console.log(await dropDown.nth(0).innerText()) //dropdown value in 1st index

for(let index=0;index<DDcount;index++){
   console.log(await dropDown.nth(index).innerText()) 
}

})