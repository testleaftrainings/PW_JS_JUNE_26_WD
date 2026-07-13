import test from "@playwright/test";
import { SBIbank } from "./abstract";

test('Implement SBI',async({})=>{
    const bank = new SBIbank()

    bank.auditTrnx()
    bank.depositeMoney()
    bank.interestRatePolicy1()
    console.log(bank.intersetRatePolicy())
    bank.openAccount()
    bank.withDrawMoney1()
    bank.withdrawMoney()

})