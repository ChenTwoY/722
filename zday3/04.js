var express =require('express')
var app =express()
// 执行get请求
app.get('/',(req,res)=>{
    res.send({'success':'ok'})
}).get('/new',(req,res)=>{
    res.send('news')
})
// 在express中，路径不区分大小写  支持链式操作
app.listen(3000)


// send end 区别