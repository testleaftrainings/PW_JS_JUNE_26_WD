//type Assertion: tells TypeScript to treat a value as a specific type ex: string 

let Apiresponse:any="Success"
Apiresponse=201


//type assertion using angular brackets
let response=<string> Apiresponse

//type assertion using as string 
let response1=Apiresponse as string
console.log(response1);
console.log(typeof response1);//number
console.log(typeof Apiresponse);//number



