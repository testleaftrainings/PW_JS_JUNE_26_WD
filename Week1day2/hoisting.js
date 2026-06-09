

//hoisting -> default behaviour of JS, where the declaration part alone is hoisted to the top of the scope.


//  var -> Hoisted and initialized with undefined

console.log(number)
var number=10  //var number+number=10


/* internally
var number
console.log(number)
number=10
*/


//let/const-> let and const declarations are hoisted but not initialized resulting in a ReferenceError (Cannot access
//  'number1' before initialization)

console.log(number1)
let number1=20


/* internally
let number1
console.log(number1)
number1=20
*/

//TDZ(Temporal Dead Zone)= time period between the variable declaration and value assigned to it

