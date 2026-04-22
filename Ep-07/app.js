//Episode-07 | sync, async, setTimeoutZero - code
const fs = require("fs")
const https = require('https')
console.log("Hello Tayyab")
var a=100
var b=299



fs.readFileSync("./file.txt", "utf8");
console.log("This will execute only after reading the file")

console.log(https.get("https://dummyjson.com/products/1", (res) => {
    console.log("data fetch successfully")
}))

setTimeout(() => {
    console.log("Execute it after 5 seconds")
}, 5000)

//Synchronous function
//it will block the main thread

//asynchrous functions










function multiplyFn(x,y){
    const result =a*b;
    return result 
}
var c = multiplyFn(a,b)


console.log("Multiplication result is:"+c)


// above is run very fast: it is sync, 


