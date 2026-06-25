"use strict";
/* //type union

type Id= string | number |boolean|undefined

// let ph:number
// ph=123
let userId: Id

userId = "EMP101";   // valid
userId = 1001;       // valid
userId= true  //not valid
userId=undefined


console.log(userId);



//restricting the datatype

let login: string|number|boolean

login="gauthami"
login=735867980
login =true
console.log(login); */
function invokeBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("launch the client specific browser", browserName);
    }
    else {
        console.log("invalid browser", browserName);
    }
}
invokeBrowser("msedge");
invokeBrowser("chrome");
