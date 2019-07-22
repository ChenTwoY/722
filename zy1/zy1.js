var url = require('url');
var http = require('http');
http.createServer((req, res) => {
    if(req.url=='/favicon.ico'){
        return
    }
    var data = {
        id: 'qwe',
        pass: '222'
    }
    var Id = url.parse(req.url, true).query.id;
    var Pass = url.parse(req.url, true).query.pass;
    console.log(Id)
    console.log(Pass)
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if (Id == data.id && Pass == data.pass) {
        res.end("登录成功")
    } else {
        res.end("登录失败")
    }


}).listen(3000, () => {
    console.log("挂载成功")
})


// var url =require('url')
// var u = 'https://ke.qq.com/course/list/node.js';
// console.log(url.parse(u));
