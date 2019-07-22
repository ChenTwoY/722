var http = require('http')
http.createServer((req,res) => {
res.writeHead(200, { "Content-type":"text/html;charset=utf-8" })
if (/\/teacher\/[\d]{6}/.test(req.url)) {
var xuehao = req.url.match(/[0-9]+/)[0]
// var xuehao = req.url.replace('/teacher/','')
console.log(req.url,xuehao);
res.end("<h1>老师信息，学号："+xuehao +"</h1>")
} else if (/\/student\/[\d]{6}/.test(req.url)) {
var gonghao = req.url.replace('/student/','')
res.end("<h1>学生信息，学号："+gonghao+"</h1>")
} else {
res.end("404")
}
}).listen(3000, () => {
console.log("挂载成功");
})