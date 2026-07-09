export class EmployeeSingnup{

    public eName : string
    public static eid : string
    protected readonly ePhno : number
    private eSalary : number

    constructor(){
        this.eName = 'Yuvarani'
        EmployeeSingnup.eid = 'Emp123'
        this.ePhno = 56780987
        this.eSalary = 45678
        console.log('super class constructor');
        
    }

    printDetails(){
        console.log(`The Emp details ${this.eName} : 
            ${EmployeeSingnup.eid}, ${this.ePhno}, ${this.eSalary}`);
        
    }

    public get readData(){
        return this.eSalary
    }

    public set writeData(newSal:number){
this.eSalary = newSal
    }

}

// const emp1 = new EmployeeSingnup()
// emp1.printDetails()
// console.log(EmployeeSingnup.eid);
// console.log(emp1.readData)
// emp1.writeData = 89967
// console.log(emp1.readData);

