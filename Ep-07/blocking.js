const crypto = require("node:crypto")

console.log("hello")
var a = 10
var b=3


// password  base key dervative function


crypto.pbkdf2Sync("password","salt",50000000,50,'sha512')
    console.log("key first is generated");


    // async Function
crypto.pbkdf2("password","salt",500,50,'sha512',(err,key)=>{
    console.log("key is generated")})


function multiplyFn(){
const result=a*b;
return result;
}

var c= multiplyFn();

console.log("Multiplication result is : "+c)