// node_modules  项目依赖
var http = require('http');
var router = require('./router');
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    if (req.url == '/') {
        router.showIndex(req, res)
    } else if (req.url == '/about') {
        router.showAbout(req, res)
    }else{
        router.show404(req, res)
    }
}).listen(3000)