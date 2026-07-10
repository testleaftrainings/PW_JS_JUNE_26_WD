class BrowserNew{

    loadApplication(url:string):void //signature
    loadApplication(url:string , browserName:string):void //signature

    loadApplication(url:string,browserName?:string){
        if(browserName){
            console.log('launch the url ' + url + ' in the browser ' + browserName);
            
        }
        else{
            console.log('launch the ' + url);
            
        }
    }
}

let br = new BrowserNew()
br.loadApplication('www.google.com')
br.loadApplication('www.google.com',"chrome")