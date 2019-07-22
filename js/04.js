// url 模块
var http =require('http')
var url =require('url')
http.createServer((req,res)=>{
    // url.parse(解析地址栏) 如果第二个参数未true时，则会转化为对象
    // var query = url.parse(req.url)
  var query = url.parse(req.url,true).query
// var query = url.parse(req.url).query
// 解析 把多段路径进行合并
// var query =url.resolve('http://127.0.0.1:3000','/aa')
//   console.log(query)
//   var query=url.format({
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: 'http://127.0.0.1:3000',
//     port: '3000',
//     hostname: null,
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/',
//     path: '/',
//     href: '/'
//   })
console.log(query)
  res.end()
}).listen(3000)