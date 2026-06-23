import test  from "@playwright/test"

test.use({

    storageState:'Data/Salesforcelogin.json'
})

test("Skip login using storageState",async ({page}) => {

await page.goto('https://orgfarm-6d28dcc693-dev-ed.develop.lightning.force.com/lightning/page/home')
await page.locator('//span[text()="App Launcher"]').click()

})