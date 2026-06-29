import {test} from "@playwright/test"

test("Learn frames", async ({page}) => {
 
  await page.goto('https://www.leafground.com/frame.xhtml')  
  //await page.locator('(//button[text()="Click Me"])[1]').click()

  const allFrames=page.frames()  //returns array of pages
  const noofFrames=allFrames.length //number of frames present-5
  console.log(noofFrames);//mp-0,f1->1, f2->2, f3->3,f4->4


  //handling frame using FrameLocator

  //1. handle single frame.
  //await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()

 const frameref=page.frameLocator('//iframe[@src="default.xhtml"]')

 //print innerText before click action
 const innertextbeforeclick=await frameref.locator('#Click').innerText()
 console.log(innertextbeforeclick);

 //click on button
 await frameref.locator('#Click').click()


 //print innerText Aftere click action
 const innertextafterclick=await frameref.locator('#Click').innerText()
 console.log(innertextafterclick);
 await page.waitForTimeout(2000)


})