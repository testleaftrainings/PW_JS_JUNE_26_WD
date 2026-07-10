class Browser2{
    
    launchBrowser(){
        console.log('Browser started');
        
    }
}

class LoginPage2 extends Browser2{

    login(){
        console.log('Login done');
        
    }
}

class DashboardPage extends Browser2{

    dashBoard(){
        console.log('Dashboard opened');
        
    }
}

const obj3 = new LoginPage2()
obj3.login()

const obj5 = new DashboardPage()
obj5.dashBoard()
obj5.launchBrowser()
