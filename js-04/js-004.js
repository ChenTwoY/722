var express = require('express')
// 在express里面也有路由Router，所以需要用（）来调用这种方法
var router = express.Router()
var app=express()
app.use(router)
router.get("/",(req,res)=>{
    res.send({"success":"OK"})
})
// 创建/getcode 接口
router.get("/getcode",(req,res)=>{
    // 把随机数封装成randomNum
    var randomNum = function(min,max){
        // Math.ceil是向上取整
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str = "abcdefgijklmnopqrstuvwxyz0123456789"
    var result = ""
    for(var i=0;i<4;i++){
        result +=str[randomNum(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(3000)