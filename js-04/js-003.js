var express= require('express')
// 在下载中间件的express-art-template，同时需要下载art-template，但是不需要require引入art-template
var art = require('express-art-template')
var app = express();
// 设置模板引擎
// 第一个参数  art  ejs     jade=>  pug  swig
// 在app.engine里面第一个是你的模板引擎，但是后面是你在上面创建的var art = require('express-art-template')
app.engine('art',art)
app.get("/",(req,res)=>{
    // .art 必须写上，不然express-art-template 识别不到模板引擎
    res.render('form2.art',{
        list:["1","2","5"]
    })
})
app.listen(3000,()=>{
    console.log("OK");
    
})