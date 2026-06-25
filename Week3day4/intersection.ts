//type intersection-combines two or more types into a single type

type credentials={

    username:string,
    password:string

}

type browserConfig={

browser:string
headless:boolean

}

/* type browserVersion={
    version:number
}
 */

type TestConfig= credentials & browserConfig 

//type TestConfig= credentials & browserConfig | browserVersion


const config:TestConfig={
username:"Tester",
password:"Welcome@123",
browser:"Chromium",
headless:false,
//version:160

}
console.log(config.username); //Tester

console.log(config) 

/*{
  username: 'Tester',
  password: 'Welcome@123',
  browser: 'Chromium',
  headless: false
} */


