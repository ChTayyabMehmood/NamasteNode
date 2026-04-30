const http=require("node:http")

const server = http.createServer(function(req,res){
    if (req.url==="/getSecretData"){
        res.end("this is not secret data")
    }
    res.end("Hello World")
});


server.listen(4292)


/* 
we are using the http server direclty with node js  then it is little bit difficul to manage all of them. above is tough and it is difficult to manage all routes

SO we are using the Express : it node js framework use for making http server 


*/