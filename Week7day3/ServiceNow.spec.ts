import test, { expect } from "@playwright/test";
import { request } from "node:http";

let token_type:any
let acc_token : any
let id : any

test.describe.serial('run in serial mode' ,()=>{
test("Generate access token", async ({ request }) => {
    let token = await request.post('https://dev217512.service-now.com/oauth_token.do',
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "c4b99acd5356472f9bb44f3ce64b51d8",
                "client_secret": "(Pkm]wuOq]xT<,&vKW?A50G$<2.fr?Pr",
                "username": "admin",
                "password": "sI1nt+$zA9RD"

                //Alt+sft+F
            }
        }
    )

    const tokenResponse = await token.json()
    console.log(tokenResponse);
    //console.log(tokenResponse.status());

    acc_token = tokenResponse.access_token
    token_type = tokenResponse.token_type
    
    
})

test("create incident using playwright with API",async({request})=>{
    let createResponse = await request.post('https://dev217512.service-now.com/api/now/table/incident',
        {
            headers:{
              "Content-Type":"application/json",
              "Authorization": `${token_type} ${acc_token}`  
            },
            data:{
                 "short_description": "Request created through Playwright with API"
            }
        }
    )
let response1 = await createResponse.json()
console.log(response1)

let status = createResponse.status()
console.log(status);

expect(status).toBe(201)
console.log(createResponse.statusText());
expect(createResponse.statusText()).toBe('Created')

id = response1.result.sys_id
console.log(id);




})

test('fetch incident using playwright with API',async({request})=>{

    let fetchResponse = await request.get
    (`https://dev217512.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
              "Authorization": `${token_type} ${acc_token}`
            }
        }
    )

    let response2 = await fetchResponse.json()
    console.log(response2);

    expect(fetchResponse.status()).toBe(200)
    expect(fetchResponse.statusText()).toBe('OK')
    console.log(fetchResponse.status());
    console.log(fetchResponse.statusText());
    
    
    
})

test('update incident using playwright with API',async({request})=>{
    let patchResponse = await request.patch(`https://dev217512.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                 "Content-Type":"application/json",
              "Authorization": `${token_type} ${acc_token}`
            },
            data:{
             "short_description": "Request created and resolved through Playwright with API"   
            }
        }
    )
    let response3 = await patchResponse.json()
    console.log(response3);

    expect(patchResponse.status()).toBe(200)
    expect(patchResponse.statusText()).toBe('OK')
    console.log(patchResponse.status());
    console.log(patchResponse.statusText());
    
    
    
})

test('Delete incident using playwright with API',async({request})=>{
    let deleteResponse = await request.delete(`https://dev217512.service-now.com/api/now/table/incident/${id}`,
      {
        headers:{
            "Content-Type":"application/json",
              "Authorization": `${token_type} ${acc_token}` 
        }
      }  
    )

    console.log(deleteResponse.status());
    console.log(deleteResponse.statusText());

    expect(deleteResponse.status()).toBe(204)
    expect(deleteResponse.statusText()).toBe('No Content')
    
    
})

})