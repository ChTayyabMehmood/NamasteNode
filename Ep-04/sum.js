console.log("sum module execution...")

var x = 'hello world'

function calculateSum(a,b){
    const sum =a+b;
    console.log(sum)
}


//common Js module cjs
//by default used in node , use require and module.exports

//module.exports={x:x,calculateSum:calculateSum}

// module.exports={
//     x,
//     calculateSum
// }
// synco
// work in non strict mode 


// other type of import and exports 
// es Module mjs 

// import and exports 
console.log(module.exports) // it is empty error 
// some people also perferred to write this 
// module.exports.x=x
// module.exports.calculateSum=calculateSum
// it also work 




// export function calculateSum(a,b){
//     const sum =a+b;
//     console.log(sum)
// }

// it is async 
//strict mode 






