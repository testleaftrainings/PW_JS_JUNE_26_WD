class Employee{

    empName:string = 'Yuvarani' //property of the class

    payroll(){ // method 
        console.log(`Employee payroll process of ${this.empName}`);

        // this refer to current instance of the class
        
    }
}
const emp = new Employee()
console.log(emp.empName)
emp.payroll()

export class Employee1{

    empName1 = 'Ravi'
    empId = 'Emp123'

    empDetails(empName1:string,empId:string){// method with parameter
        console.log(`Employee Name is ${empName1}, id is ${empId}`);
        
    }
}

// const obj = new Employee1()
// obj.empDetails('Hari','Emp234')
// console.log(obj.empName1)