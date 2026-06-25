//enum= enumeration- feature used to define a set of named constant values
//numeric enum(by default)
enum browserStatus{

    open,
    closed,
    incognito=20,
    crashed

}
console.log(browserStatus.open);
console.log(browserStatus);

/* //string enum

enum Testresults{

    pass="test passed",
    fail="test faied",
    skip="test skipped"
}
console.log(Testresults.pass);
console.log(Testresults); */


//heterogenous enum

enum Testresults{

    pass,
    fail="test",
    skip="9",
    retry="10", //string
    only=2,   //explicitly specify it as a number
    for
}
console.log(Testresults.pass);
console.log(Testresults);



