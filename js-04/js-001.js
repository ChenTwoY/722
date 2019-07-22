var express = require('express')
// body-parser是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
var bodyParser = require('body-parser')
var path = require('path')
// __dirname 是获取plic文件夹的绝对路径，
var publicPath = path.resolve(__dirname,"plic")
// 调用express这一种方法
var app = express()
// post json  字符串
//创建application/json解析
app.use(bodyParser.json())
//创建application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extends:false}))
//将静态文件目录设置为：项目根目录+/plic
app.use(express.static(publicPath))
app.get('/',(req,res)=>{
    res.send('首页')
})
// 通过post的形式，创建一个接口/dopost
app.post('/dopost',(req,res)=>{
    var body = req.body
    console.log(body);
    res.send('post数据传输')
})
app.listen(3000,()=>{
    console.log("OK");
    
})