var http =require('http')
var path =require('path')
http.createServer((req,res)=>{
    // 返回目录名，不包括当前
//     path.dirname(path)  
// path.isAbsolute() 返回绝对路径
//  path.join()将多端路径进行拼接
// path.parse() 解析文件路径
    //path.normalize() 将路径格式化
    // var oldpath =path.normalize('/a/v/c')
    //path.format 将对象转化为路径
    // var oldpath =path.format({
    //     root:'',
    //     dir:'e:a\b',
    //     base:'\d'
    // })
    // 返回文件扩展名  path.extname
    var oldpath = path.extname('xx.html')
    console.log(oldpath)
    res.end()
}).listen(3000)