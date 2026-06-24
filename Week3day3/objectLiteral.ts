//object literal- used to store related data as key value pair 

//Instead of creating multiple variables can be created as an single object

let firstName:string= "Ramesh"
let lastName:string="Kumar"
let age:number=35


//implicit way of creating object

let user={
firstName: "Ramesh",
lastName:"Kumar",
age:35
}

console.log(user.lastName);//Kumar
console.log(user);//{ firstName: 'Ramesh', lastName: 'Kumar', age: 35 }



//explicit way of creating object

let user1:{
firstName: string
lastName:string
age:number
}={
  firstName:"Ramu",
  lastName:"Darshan",
  age:36
}

console.log(user1.firstName);//Ramu
console.log(user1); //{ firstName: 'Ramu', lastName: 'Darshan', age: 36 }

