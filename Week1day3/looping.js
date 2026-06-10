//looping -to perform repeated actions

/* console.log(1);
console.log(2); */

/* for (let index = 0; index < array.length; index++) {  //initialization; condition; iteration
    const element = array[index];
    
} */

// when the no of count/iterations are known, we use for loop

/* for(i=0;i<=10;i++){
    console.log(i);
    
} */


//while -> when iterations are not known or for an undefined count, we use while loop

/* while (true) {
    console.log("Hello");
    
} */
   /* let number=0
   if(number==1){
    while (number<10) {
        console.log("the number is", number);
        number++
        
    }
    } */



   /*  // Do-while: do...while is a loop that executes the code block at least once and then checks the condition

    let a=1
    do {
        console.log("this is do while loop",a);
        a++
        } while (a<=9); */
    
    
    //To input data from terminal

    const name=process.argv[2]

    const age=Number(process.argv[3])


    console.log(process.argv);


    console.log("your name is", name)
    console.log("your age is",age)


