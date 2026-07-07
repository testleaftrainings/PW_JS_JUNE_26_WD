import test from "@playwright/test";

test('Launch Amazon',async({page})=>{
    await page.goto('https://www.amazon.in')
})
test.skip('Launch flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com')
})

test.fail('Leaftaps login',async({page})=>{
    await page.goto('https://leaftaps/opentaps/control/login')
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
})

test.fixme('login',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
})

test('Test info',async()=>{
    test.info().annotations.push({type:'Test Info', description:'this is test info annotation'},
        {type:'Author',description:'Yuvarani'}
    )
}) 

test('learn to use test.slow',async({page})=>{
    test.slow()
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
})