//function- reusable block of code

// console.log("Welcome");

//syntax
// function name(params) {
    
// }

//1. function declaration or named function

/* function add(){
let a=10
let b=10
console.log(a+b);
}

add()
 */

 
function add(){  //parameters
let a=10
let b=10
console.log(a+b);
//return a+b
}
add()
 arguments
console.log(add(13,15))

//function expression/anonymous function


// let funexp=function(){

//     console.log("this is an function expression");
    
// }

// funexp()


// //arrow function-> simple syntax

// let arrowfun=()=>{
//     console.log("Welcome")
// }
// arrowfun()
// //console.log(arrowfun())

// let add1=(x,y)=>{
//   return x+y
// }
// console.log(add1(2,3));

//callback function=> one function is passed as an argument to another function.

/* 
function add(x,y,cb){
let diff=x-y
console.log("the sum of numbers are:",diff);
cb(diff)


}

function sub(d){
console.log("this is subtract function",d-5);

}

add(5,9,sub) */



