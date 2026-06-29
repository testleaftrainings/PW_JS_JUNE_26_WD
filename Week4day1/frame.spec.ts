import {test} from "@playwright/test"

test("Learn frames", async ({page}) => {
 
  await page.goto('https://www.leafground.com/frame.xhtml')  
  //cannot click on the button as it is present inside the frame
  //await page.locator('(//button[text()="Click Me"])[1]').click()  



  const allFrames=page.frames()  //returns array of frames
  const noofFrames=allFrames.length //number of frames present=5
  console.log(noofFrames);//mp-0,f1->1, f2->2, f3->3,f4->4


  //Handling frame using index 

  //handling 1st frame
  const frame1=allFrames[1]
  await frame1.locator('#Click').click()
  await page.waitForTimeout(2000)

 //handling nested frame

 const frame4=allFrames[4]
 await frame4.locator('#Click').click()

})