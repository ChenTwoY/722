var http =require('http')
var art =require('art-template')
var fs =require('fs')
http.createServer((req,res)=>{
    var newData={
        list:['1','3','5']
    }
    fs.readFile('./view/form.art',(err,data)=>{
        var str =data.toString()
        var result =art.render(str,newData)
        res.end(result)
    })
}).listen(3000)