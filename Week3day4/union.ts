/* //type union-allows to hold more than one type or value

type Id= string | number |boolean|undefined
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


//program to restrict the browser access

type supportedBrowser ="chrome"|"firefox"|"msedge"


function invokeBrowser(browserName:supportedBrowser){

    if(browserName==="chrome"){

        console.log("launch the client specific browser",browserName);
        
    }else{

        console.log("invalid browser",browserName);
        
    }

}

invokeBrowser("msedge")
invokeBrowser("firefox")  
invokeBrowser("chrome")



