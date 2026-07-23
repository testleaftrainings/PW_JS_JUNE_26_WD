import test, { expect } from "@playwright/test";
import { request } from "node:http";

let acc_Token: any
let inst_url: any
let token_Type: any


let leadId : any

test.describe.serial('Run in serial mode', () => {


    test('Generate access token', async ({ request }) => {
        let tokenResponse = await request.post('https://login.salesforce.com/services/oauth2/token',
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9dAEux2v1sLsRvdqMCBNvwP6WkblcP70V_xpRK5jeueAyURhV5.EcbUmH8rTcnkf0q2Ko.bpsQDul4vOG",
                    "client_secret": "926CE4EE9D6F27F1C1853ACCCAEE9A2902BC98C4848C7B6CEB2B1D936D48A5DD",
                    "grant_type": "password",
                    "username": "yuvarani.sekar@testleaf.com",
                    "password": "Testleaf@2027"
                    //Alt+Sft+F=>format the document
                }
            }
        )

        const responseBody = await tokenResponse.json()
        console.log(responseBody);

        acc_Token = responseBody.access_token
        inst_url = responseBody.instance_url
        token_Type = responseBody.token_type

    })

    test('create lead using playwright with API', async ({ request }) => {
        const leadResponse = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                },
                data: {
                    "Salutation": "Ms.",
                    "FirstName": "Deepika",
                    "LastName": "S",
                    "Company": "Testleaf"
                }
            }
        )
        const leadResponseBody = await leadResponse.json()
        console.log(leadResponseBody);

        leadId = leadResponseBody.id

        expect(leadResponse.status()).toBe(201)

        expect(leadResponse.statusText()).toBe('Created')
        
        console.log(leadResponse.status());
        console.log(leadResponse.statusText());
        
        
    })

    test('Fetch lead using playwright with API',async({request})=>{
        const fetchResponse = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                }

            }
        )
const fetchResponseBody = await fetchResponse.json()
console.log(fetchResponseBody);

expect(fetchResponse.status()).toBe(200)
expect(fetchResponse.statusText()).toBe('OK')

console.log(fetchResponse.status());
console.log(fetchResponse.statusText());




    })
    

})