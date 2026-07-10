class browser4{

    openBrowser(){
        console.log('Browser opened');
        
    }
}
class LoginPage3 extends browser4{

    login(){
        console.log('Login success');
        
    }
}
class HomePage3 extends LoginPage3{
    searchProduct(){
        console.log('Product searched');
        
    }
}

class reportPage extends browser4{
    report(){
        console.log('report opened');
        
    }
}

const home = new HomePage3()
home.login()
home.openBrowser()
home.searchProduct()

const reportObj = new reportPage()
reportObj.report()