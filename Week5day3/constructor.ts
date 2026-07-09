class Employee3{

    payroll(){
        console.log('Employee payroll');
        
    }

    constructor(){ //default constructor
console.log('This is a special method called default constructor');

    }
}

let obj2 = new Employee3()
obj2.payroll()

//parameterized constructor

class Employee4{

    empName3 : string //global variable
    empId3 : string

    constructor(name:string, id:string){
        console.log(`Parametrized constructor ${name} and id ${id}`);
        this.empName3 = name
        this.empId3 = id
        
    }
    //note here the local variable value is assigned to global variable
    printEmployeeDetails(){
        console.log(`Employee name is ${this.empName3} and id is ${this.empId3}`);
        
    }
}

const obj4 = new Employee4("Rani","Emp345")
obj4.printEmployeeDetails()