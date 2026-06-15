//array of similar datatype
// let numarray=[1,2,3,4,5]
// console.log(numarray);


//heterogeneous array
let hetroarray=[true,"welcome", 354,null,[3,4]]

// //index starts from true->0, welcome->1, 354->2, boolean->3, [3,4]->4
// //length is a property and its starts from length of true->1, welcome->2, 354->3, boolean->4, [3,4]->5

// console.log(hetroarray) // [ true, 'welcome', 354, [Function: Boolean], [ 3, 4 ] ]
// console.log(hetroarray[2]) //354

// console.log(hetroarray.indexOf("welcome")) //1

// hetroarray[2]="playwright"//[ true, 'welcome', 'playwright', null, [ 3, 4 ] ]-> replaces the existing index value
// hetroarray[3]=""
// console.log(hetroarray);//[ true, 'welcome', 'playwright', [Function: Boolean], [ 3, 4 ] ]

// console.log(hetroarray.length)//[ true, 'welcome', 'playwright', '', [ 3, 4 ] ]

// //push-> adds element to the array

// hetroarray.push("Testleaf","Hello Team") //
// /* [
//   true,
//   'welcome',
//   'playwright',
//   '',
//   [ 3, 4 ],
//   'Testleaf',
//   'Hello Team'
// ] */
// console.log(hetroarray);


// //pop()-> removes 1 element at the end of the array
// console.log(hetroarray.pop()); //Hello Team
// console.log(hetroarray);//[ true, 'welcome', 'playwright', '', [ 3, 4 ], 'Testleaf' ]


// //unshift()-> add one or more elements at the beginning of the array

// console.log(hetroarray.unshift(12, 14))
// console.log(hetroarray);//[ 12, 14, true, 'welcome', 'playwright', '', [ 3, 4 ], 'Testleaf' ]

// //shift()-> remove one element at the start of the array.

// console.log(hetroarray.shift())
// console.log(hetroarray); //[ 14, true, 'welcome', 'playwright', '', [ 3, 4 ], 'Testleaf' ]

// //slice-> used to extract the portion of the array and this will not modify the array
// console.log(hetroarray.slice(1,3)) //[ true, 'welcome' ]
// console.log(hetroarray.slice(-1)); //[ 'Testleaf' ]
// console.log(hetroarray.slice());//[ 14, true, 'welcome', 'playwright', '', [ 3, 4 ], 'Testleaf' ]
// console.log(hetroarray.slice(-2))//[ [ 3, 4 ], 'Testleaf' ]
// console.log(hetroarray); //[ 14, true, 'welcome', 'playwright', '', [ 3, 4 ], 'Testleaf' ]


//splice()=> used to remove and add element in the array and this modifies the array

//splice(start index, del count, ele1, elem2)

    console.log(hetroarray); //[true,"welcome",354,null,[3,4]]
    
    hetroarray.splice(1,2,undefined,"qeagle")
    console.log(hetroarray); //[ true, undefined, 'qeagle', null, [ 3, 4 ] ]

    hetroarray.splice(1,-1,true) //[ true, true, undefined, 'qeagle', null, [ 3, 4 ] ]-> -1 is considered as zero and hence no deletion and adds true alone.
    console.log(hetroarray);
    
//includes() -> check whether the element is present in an array.
console.log(hetroarray.includes(undefined)) //true










