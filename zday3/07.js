// 搭建静态资源服务器
var express =require('express')
var path =require('path')
var app =express()
// express.static() 使用静态资源  app.use()使用
console.log(__dirname)
var publicpath=path.resolve(__dirname,'fo')
// 使用静态资源服务器
app.use(express.static(publicpath))
app.listen(3000)