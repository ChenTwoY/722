var express =require('express')
var app =express()
app.get('/new',(req,res)=>{
    console.log(req.query)
    res.send('成功')
})
app.listen(3000)
/**
 * 
 * 
 * */ 