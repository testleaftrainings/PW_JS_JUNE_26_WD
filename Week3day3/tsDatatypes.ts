/* Typescript Datatypes :

1. number
2. string
3. boolean.
4. undefined
5. null 
6. any
7. unknown
8. never
9. tuple  */


//Nature of typescript is static typing

//any => Can hold a value of any data type

let data:any="Testleaf"
data=567
data=true

console.log(data);


//unknown => Can hold any value but requires type checking before use

let data1:unknown=true
data1=undefined
data1="Qeagle"
data1=4
if(typeof data1==="number"){  //type check
console.log(data1*data1);
}

//never => Represents a value that never occurs or a function that never returns

function error(): never {
  throw new Error("Error");
}


//tuple=>Used to store a fixed number of values with different types.
let arr:[string,number,boolean]=["hello",123,true]
console.log(arr); //[ 'hello', 123, true ]

