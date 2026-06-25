"use strict";
//enum= enumeration
//numeric enum(by default)
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["open"] = 0] = "open";
    browserStatus[browserStatus["closed"] = 1] = "closed";
    browserStatus[browserStatus["incognito"] = 20] = "incognito";
    browserStatus[browserStatus["crashed"] = 21] = "crashed";
})(browserStatus || (browserStatus = {}));
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
var Testresults;
(function (Testresults) {
    Testresults[Testresults["pass"] = 0] = "pass";
    Testresults["fail"] = "test";
    Testresults["skip"] = "9";
    Testresults[Testresults["retry"] = 10] = "retry";
    Testresults[Testresults["only"] = 11] = "only";
})(Testresults || (Testresults = {}));
console.log(Testresults.pass);
console.log(Testresults);
