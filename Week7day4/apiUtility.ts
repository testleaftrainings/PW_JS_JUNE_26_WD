import { APIRequestContext } from "@playwright/test";

let acc_Token: any
let inst_url: any
let token_Type: any

let leadId :any

export async function generateToken(request:APIRequestContext) {

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

}

export async function createLead(request:APIRequestContext) {

//local variable it's userdefined is holdinf the request fixture value
const leadResponse = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                },
                data: {
                    "Salutation": "Ms.",
                    "FirstName": "Deepika",
                    "LastName": "selvi",
                    "Company": "Testleaf"
                }
            }
        )
        const leadResponseBody = await leadResponse.json()
        console.log(leadResponseBody);

        leadId = leadResponseBody.id
    
}

export async function fetchLead(request:APIRequestContext):Promise<string> {

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
console.log(fetchResponseBody.LastName);
return fetchResponseBody.LastName

    
}