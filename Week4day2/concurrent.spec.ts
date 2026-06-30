import {test} from "@playwright/test"

test("concurrent way of handling windows", async({page,context}) => {

await page.goto("https://www.leafground.com/window.xhtml")

const [parentwindow]=await Promise.all([context.waitForEvent('page'),page.locator('//span[text()="Open Multiple"]').click()])

//[parentwindow]=parent page, child1 and child2

//print the array of pages
const count=parentwindow.context().pages() //array of pages

//use length property to find the total no of pages

let windowlen=count.length  //3 pages, index 0->parent page, index 1-> childpage1, index 2->childpage2
let dashboard:any    
let webtable:any

for(let i=0;i<windowlen;i++){

    await page.waitForLoadState('domcontentloaded')  //Best practice
    await page.waitForTimeout(5000)  //avoid waitForTimeout as it slows down the test

    const Title=await count[i].title()
    console.log(Title);  //parentpage title->Window,childpage1->Web Table,childpage2->Dashboard
    
//switch to child page using title and index

if(Title==="Dashboard"){

    dashboard=count[i]
    await dashboard.locator('//input[@id="email"]').fill('gauthami.vn@testleaf.com')
    await dashboard.locator("#message").fill('Window handling in Playwright')
    

}else if(Title==="Web Table"){

 webtable=count[i]
 await webtable.locator('//input[@placeholder="Search"]').fill('India')

}
}

})
