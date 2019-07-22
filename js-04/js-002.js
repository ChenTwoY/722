var express = require('express')
var fs = require('fs')
var app = express()
// 设置模板引擎
// app.set
// engine  引擎
// 设置模板引擎为ejs
// view engine 是固定写的，引入ejs
app.set("view engine", "ejs")
// 指定模板的具体目录，如果你创建的文件夹是views那app.set可以不用写，但是如果你创建的是别的文件夹，你就可以改文件夹的名称路径
app.set("views", __dirname + "/views")
// app.engine("views engine",'ejs')
app.get("/", function (req, res) {
    // express 包含ejs   res=》render
    res.render("form1", {
        list: ["1", "2", "3"]
    })
})
app.listen(3000, () => {
    console.log("OK");

})