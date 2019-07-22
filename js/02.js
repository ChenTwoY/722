var http = require('http')
//  fs =file system  文件系统
var fs =require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile('../xx.txt',(err,data)=>{
        res.end(data)
    })
}).listen(3000)


