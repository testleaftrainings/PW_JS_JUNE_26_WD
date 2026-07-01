import {test, expect} from "@playwright/test"

//import path from 'path'

test('Learn file upload using input<type=file>', async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

// create the event listener

const filedown = page.waitForEvent('download')

/* Shortcut to create the variable
Select the line and press Ctrl + Shift + R. Choose the first suggestion to automatically create a 
variable with the recommended name. If the suggested name is not suitable, you can enter your own
 variable name. */
   
// trigger the download action
 await page.getByText('Download',{exact:true}).click()

// resolve the promise
const fdown = await filedown

//use the fdown reference to save the file.
await fdown.saveAs('Data/test.jpeg')  //set custom path to save your file

//save it using browser suggested filename
//`${}`-use template literal for dynamic filename
await fdown.saveAs(`Utils/${fdown.suggestedFilename()}`) //browser suggested filename

//verify downladed or not
expect (fdown).toBeTruthy()

//verify the downloaded file using partial text
expect(fdown.suggestedFilename()).toContain('TestLeaf')

})
