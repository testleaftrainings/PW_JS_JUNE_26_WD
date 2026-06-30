//frame objects

import {test} from "@playwright/test"

test("frames using frameobjects", async ({page}) => {
await page.goto('https://www.leafground.com/frame.xhtml')  

//single frame

const frameref=page.frame({url:"https://www.leafground.com/default.xhtml"})
//text before click
const Beforeclick=await frameref?.locator('#Click').innerText()
console.log(Beforeclick);


//click action
await frameref?.locator('#Click').click()

//text after click
const Afterclick=await frameref?.locator('#Click').innerText()
console.log(Afterclick);

//handle nested frame using frame objects.
//locate the innerframe/nested frame directly?.locator.click()

const nestedframe=page.frame({name:'frame2'})
await nestedframe?.locator('#Click').click()

})