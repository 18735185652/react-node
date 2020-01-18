let pathToRegexp = require("path-to-regexp");

/*
let regexp = pathToRegexp('/user',[],{end:true});
console.log("regexp",regexp)  //   /^\/user(?:\/(?=$))?$/i   
console.log(regexp.test("/user/add")) // false
console.log(regexp.test("/user/")) //true
console.log(regexp.test("/user"))  //true
*/


/*
let regexp2 = pathToRegexp('/user',[],{end:false});
console.log("regexp2",regexp2) //  /^\/user(?:\/(?=$))?(?=\/|$)/i
console.log(regexp2.test("/user/add")) // true
console.log(regexp2.test("/user/")) //true
console.log(regexp2.test("/user"))  //true
*/

//路径参数
let params = []
let regexp3 = pathToRegexp('/user/:id',params,{end:false});
console.log("regexp3",regexp3) //  /^\/user\/((?:[^\/]+?))(?:\/(?=$))?(?=\/|$)/i
console.log(regexp3.test("/user/123456")) // true
console.log(regexp3.test("/user/")) //false
console.log(regexp3.test("/user"))  //false
console.log("/user/123456".match(regexp3)[1])  // 123456

console.log("params",params)
