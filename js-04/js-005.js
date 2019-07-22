var express = require('express')
// cookie-parser引入cookie的中间件
var cookieParser = require('cookie-parser')
var app = express() ;
app.use(cookieParser("llll"))
app.get('/',(req,res)=>{
    res.send("首页")
})
app.get('/set',(req,res)=>{
    // domain  域名   maxAge  有效期    size  大小    Expries  过期时间  signed ：true  加密
    res.cookie('username',"tom",{maxAge:20000,httpOnly:true})
    res.send("cookie设置成功")
})
app.get('/get',(req,res)=>{
    var name = req.cookies.username
    console.log(name);
    res.send("读取成功"+name)
})
app.listen(3000,()=>{
    console.log("OK");
    
})