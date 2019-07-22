var http =require('http')
var ejs=require('ejs')
var fs =require('fs')
http.createServer((req,res)=>{
var list =['1','2','3']
fs.readFile('./view/index.ejs',(err,data)=>{
    var str =data.toString()
    var result = ejs.render(str,{list:list})
    res.end(result)
})
}).listen(3000,()=>{
    console.log('成功')
})