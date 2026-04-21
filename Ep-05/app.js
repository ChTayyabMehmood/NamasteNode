//Episode-05 | Diving into the Node.js github repo

// all the code of module is wrapped inside a function(IIFE)

/** 
 (function(){var a =100}())

 it imediate invoked the code 
 Privary: it keep the variable and function safe, mean if i create a var a =100 outside , and make a var a="king " inside the iife, it is independent code 



 Question :how variable and function are private in different module??

 it is becuase of iife, 
wrappe code 

now module.exports{calculateSum}

from where is module is come from ? 
NodeJS foundation add this 

**/


// iife : immediate invoked function expression

// (function(module,require){
//     require(//path)
//     function calculateMultiply(a,b){
//         const result=a+b;
//         console.log(result)
//     }
    
//     module.exports={calculateMultiply}
// })




/** 
 require(//path)
 
 1. RESOLVING THE MODULE 
   -> ./localpath
   -> .json 
   -> node: module 

2.  LOADING THE MODULE 
    file content is loaded according to file type

3. WRAPPS INSIDE IN IIFE

4. EVALUATE
    module.exports

5. CACHING Important 
there are multiple file importing multiple module, above task is executed once and reaming it in caching for fast 
 





 **/