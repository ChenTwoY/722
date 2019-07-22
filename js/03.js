// url
var http =require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/red'){
        fs.readFile('../red.html',(err,data)=>{
            res.end(data)
        })
    }else if(req.url=='/green'){
        fs.readFile('../green.html',(err,data)=>{
            res.end(data)
        })
    }
}).listen(3000)