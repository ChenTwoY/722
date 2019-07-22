// 关于fs  文件系统
http = require('http')
fs = require('fs')
http.createServer((req, res) => {
    if(req.url=='/favicon.ico'){
        return
    }
    // a append 追加  r read 读  w write 写
    // fs.writeFile('./view/qq.txt','dddd',{flag:'a'},(err)=>{
    //     res.end('ooo')
    // })
    // 先读取后写入
    // fs.readFile('./view/ww.txt',(err,data)=>{
    //     fs.writeFile('./view/qq.txt',data,(err)=>{
    //         res.end('success')
    //     })
    // })
    // 复制
    // fs.copyFile('./view/qq.txt','./view/ee.txt',(err)=>{
    //     res.end('ok')
    // })
    // 改名
    // fs.rename('./view/qq.txt','./view/vv.txt',(err)=>{
    //     res.end('ok')
    // })
    // 删除
    // fs.unlink('./view/qq.txt',(err)=>{
    //     res.end('ok')
    // })
    // 创建目录
    // fs.mkdir('./kk',(err)=>{
    //         res.end('ok')
    //     })
    // 删除目录
    // fs.rmdir('./kk',(err)=>{
    //     res.end('ok')
    // })
    // 读取目录里的东西
    // fs.readdir('./view',(err,data)=>{
    //     console.log(data)
    //     res.end('ok')
    // })
    // 查看目录信息
    // fs.stat('./view',(err,stats)=>{
    //     // console.log(stats)
    //     // isFile()是否是文件
    //     console.log(stats.isFile())
    //     // isDirectory()是否是目录
    //     console.log(stats.isDirectory())
    //     res.end()
    // })
    // 流  stream  文件流 
    //  data 数据读取的过程   end  数据读取完成
    var stream = fs.createReadStream('./view/ee.txt')
    var content = ""
    stream.on("data", ( chunk) => {
        console.log(chunk)
        content += chunk
        console.log(content)
    })
    stream.on('end', (content) => {
        console.log('接收完毕'+content)
    })
    res.end()
}).listen(3000)