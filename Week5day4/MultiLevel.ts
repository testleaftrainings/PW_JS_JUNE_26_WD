class browser1{

    openBrowser(){
        console.log('Browser opened');
        
    }
}
class LoginPage1 extends browser1{

    login(){
        console.log('Login success');
        
    }
}
class HomePage extends LoginPage1{
    searchProduct(){
        console.log('Product searched');
        
    }
}

const multi = new HomePage()
multi.searchProduct()
multi.openBrowser()