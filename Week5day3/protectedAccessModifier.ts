import { EmployeeSingnup } from "./accessodifier";

class HR extends EmployeeSingnup{

    dep : string // property is specific to HR class

    constructor(){
        super()
        this.dep = 'Qa'
    }

    empUpdate(){
        console.log(this.ePhno,this.dep);
        
    }
 }
 const hr = new HR()
 hr.empUpdate()