// Episode-08 | Deep dive into v8 JS Engine
/*

Node js is runtime enviromenet; 
in node js we have v8 Engine and other library lib.uv

there are multiple step, when we gave code to v8 
Parsing 
step 1:  lexical analysis 
mean code convert into tokens: also class tokenization

step 2: Syntax Anlysis 
token convert into ast abstract syntax tree

can see AST WEBSITE: astexplore.net 

by the way: js is interpert and also compliter called completion method : jit compliamation just in time 

ast is pass into ingintion interpertation the ast tree into bit code 
finally execution is happen 

the ingintion interpertation: it iterpert the code line a by line , so it find a code which is repeat many time mean a function which is use many time so they give to trubofan compiler, so i convert that code into machine code, 
and that machine code use because it is fast again: 


the step can also deoptimize the code : 
for example : if our code we have hot code function (repeat code )
like sum(a,b) i pass the a=10,b=20

the trubofan compiler make it compiled version , 
when i passed the
sum(4,6)
sum(45,6)
sum(4,65)
 LIKE above only int variable it run very fast becasue we already have complie code, optimized code into executed 
 
 if i passed sum('a','b')
 here i passed the string so it deoptimize mean it not use the above int complie code , so that process it called the dioptimze, 
 
there are some other concept like : 
-- inline caching
-- copy eussion





in the parrallel is there is gradge collection : 
there is multiple grabage 
1. Orinoco
2. Oil Pan
3. Scavevger 
4. MCompact 

-- try to read some blog on the v8 dev 
like: 
Launching Ignition and TurboFan
Trash talk: the Orinoco garbage collector
JIT-less V8



*/