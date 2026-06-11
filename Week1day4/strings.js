
//strings representation -"", '',``(back ticks)


/* string literal
    string object - we use new keyword */


    /* let companyName="Testleaf"  //1000
    let firmName="Testleaf"     //2000

   // string objects

   let companyName1=new String("Qeagle")
   let firmName1=new String("Qeagle")

   console.log(companyName===firmName) //true
   console.log(companyName1===firmName1) // false

   //Escape Sequences

   //\,\t,\n

   let test='it\'s a\n smoke\t \n testing'
   console.log(test);

   //concatenation-> +(operator) and concat()

   let testCase="creatLead"
   let testCaseNo=154

   //let result=testCase +  testCaseNo
   let result=testCase.concat(" ",+ testCaseNo)  //concat is the method
   console.log(result);

   //Template Literal=> `${}`

   function rd(a){
//let a=123
//console.log("there are " + a + "test cases")
console.log( `there are ${a} test cases`) 

   }
   rd(100)  */

//length (its a property)-> find the length of the string
//index starts-> 0
//length starts->1

let course="Playwright is a web automation tool" 
console.log(course.length);

// charAt() -returns the character at secified index
console.log((course.charAt(4)));//method
console.log((course[4]))//using variable

//indexof() -> prints the index of char 'g'
console.log(course.lastIndexOf("g")); //7

//split()-> returns the string in the form of an array
console.log(course.split()); //[ 'Playwright' ]
console.log(course.split("")); //['P', 'l', 'a', 'y','w', 'r', 'i', 'g', 'h', 't']
console.log(course.split(" "))//[ 'Playwright', 'is', 'a', 'web', 'automation', 'tool' ]
console.log(course.split("a"))//[ 'Pl', 'ywright is ', ' web ', 'utom', 'tion tool' ]

//substring() -> portion of the string
console.log(course.substring(8,15)); ////ht is a

//slice()-> used to extract the portion of the string

//let course="Playwright is a web automation tool" 
console.log(course.slice(5,9));//righ
console.log(course.slice(9,5));//empty

console.log((course.slice(-15,-5))); //automation tool
console.log((course.slice()))//Playwright is a web automation tool









  
  
 





   


   

   