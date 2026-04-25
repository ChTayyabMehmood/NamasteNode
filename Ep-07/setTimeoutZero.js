console.log("hello world")

var a = 100000
var b=1000

setTimeout(()=>{
    console.log("call me ASAP")
},0
)

console.log("after the set time out")

function multiplyFn(){
    var c = a * b 
    return c
}

var c = multiplyFn()
 console.log("Result: " + c)
