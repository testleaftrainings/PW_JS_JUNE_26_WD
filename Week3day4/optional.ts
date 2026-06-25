 function login(username:string,password?:string){

if(username && password){

    console.log("the username is",username," and password is",password);
    
}else{

    console.log("the username is",username);
    
}


 }

 login("testleaf.com","welcome")