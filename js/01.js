// cmd Amd 区别   import require 区别
var http = require('http')
// 创建服务器
http.createServer((req,res)=>{
    // req =request  请求  res =response 响应
    console.log(res)
    // writeHead 
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 结束响应
    res.end('发发')

}).listen(3000)






