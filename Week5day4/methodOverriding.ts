class Browser5{

    launchBrowser(){
        console.log('Launch chrome browser');
        
    }
}

class EdgeBrowser extends Browser5{
    launchBrowser() {
        console.log('Launch Edge browser');
        
    }
}

class FirefoxBrowser extends EdgeBrowser{

    launchBrowser() {
        console.log('Launch Firefox browser');
        
    }
}

const obj6 = new EdgeBrowser()
obj6.launchBrowser()

const obj7 = new FirefoxBrowser()
obj7.launchBrowser()