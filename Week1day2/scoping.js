

// scoping-visibility or accessibility of the variable

/* global scope - can be declared anywhere in the script but outside the block
   block scoped- variable is declared within the block {}
   function scoped- variable declared with in the function  */

/* if (true){
console.log("condition 1 is executed");

}else if(true){
console.log("condition 2 is executed")
}else {
 console.log("condition 3 is executed")
} */


 //let and const are block scoped variables
 // var is function scoped variable
 

function scp(){

 if(true){
var browser="chrome"
console.log("printing chrome browser inside the if block",browser)

 }
 console.log("printing chrome browser outside the if block",browser)
}
console.log("printing chrome browser outside the function block",browser)
scp()



