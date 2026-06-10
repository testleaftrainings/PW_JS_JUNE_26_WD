
// used to verify single condition
/* if (condition) {
    
} */

const marks=81
if(marks>=80){
    console.log("Distiction");
    
} else if(marks > 60) {
    console.log("First class");
    
} else {
    console.log("Second class");
    
}


//switch->

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

/* let browserName="Edge"     
switch (browserName) {
    case "Chrome":
        console.log("149.0.7827.103");
        break;
    case "Firefox":
        console.log("1234.0.12.11");
        break
    case "Edge":
        console.log("155.54.23");
        break
    default:
        console.log("Invalid Browser");
        break;
} */

    let a=10, b=15, c=b-a
    switch (c) {
        case 10:
            console.log("not actual result");
            break;
        case 4:
            console.log("correct result");
            break
        case "5":
            console.log("correct result");
            break
    
        default:
            console.log("invalid result")
            break;
    }




