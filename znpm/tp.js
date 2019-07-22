var http =require('http')
var fs =require('fs')
var sd =require('silly-datetime')
var fd =require('formidable')
var path =require('path')
http.createServer((req,res)=>{
if(req.url=='/favicon.ico'){
    return
}
if(req.url=='/dopost'){
    var form =new fd.IncomingForm()
    console.log(form)
    form.uploadDir='./upload'
    form.parse(req,function(err,fields,files){
       
        var oldpath=files.pic.path;
        var extname =path.extname(files.pic.name)
        var tt =sd.format(new Date(),'YYYYMMDDhhmmss')
        var newpath ='upload/'+tt+extname
        console.log(newpath)
        fs.rename(oldpath,newpath,(err)=>{
            res.end('ok')
        })
    })
}
}).listen(3000,() => {
    console.log("成功")
})