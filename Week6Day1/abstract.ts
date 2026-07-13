import { RBIPolicy, RBIRegulations } from "./interface";
//import {} from '../Week5day4/singleInheritance'


export abstract class Basebank implements RBIRegulations,RBIPolicy{

    openAccount1:string='Account is opened'

    auditTrnx(): void {
        console.log('Auditing all the accounts');
        
    }
    openAccount(): void {
        console.log('open account for 1000 applicants');
        
    }

    activateDebitCard(): void {
        console.log('Activate your debit card');
        
    }
    intersetRatePolicy(): number {
        return 7.5
    }
withdrawMoney(): void {
    console.log('withdraw money from account');
    
}

abstract withDrawMoney1():void 
abstract interestRatePolicy1():void

}


export class SBIbank extends Basebank{
   
    withDrawMoney1(): void {
        console.log('withdrawl limit is 10000');
        
    }
    interestRatePolicy1(): void {
        console.log('interest rate for SBI is 7.5%');
        
    }
    depositeMoney(){
        console.log('Money depoisted limit 50000');
        
    }
    activateDebitCard(): void {
        console.log('Card should be activated');
        
    }
}

class HDFC extends Basebank{
    interestRatePolicy1(): void {
        console.log('interest rate policy for HDFC is 8%');
        
    }
    withDrawMoney1(): void {
        console.log('withdrawal limit is 20000');
        
    }
    depositeMoney(){
        console.log('money deposite limit is 30000');
        
    }
}

class Axis extends Basebank{

    interestRatePolicy1(): void {
        console.log('interest rate policy for axis is 8.5%');
        
    }
    withDrawMoney1(): void {
        console.log('withdrawal limit is 15000');
        
    }
    depositeMoney(){
        console.log('money deposited limit is 40000');
        
    }
}

/* 
Notes:
interface can have only => rules unimplemented method
abstract class => can have both implemented as well as unimplemented method
concreate class can have only imlemented methods */