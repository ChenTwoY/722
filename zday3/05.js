var express =require('express')
var app =express()
// 获取路由的动态参数
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/about/:id',(req,res)=>{
    res.send('路由参数为:'+req.params.id)
})

app.listen(3000)