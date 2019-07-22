// npm  包管理工具
//  npm init  项目初始化 =  npm init -y  生成=>package.json
// npm install  下载  = npm i
// npm uninstall  卸载
// --save 生产环境（dependencies） = -S   --save-dev = -D 开发环境（devDependencies）
// 

var sd =require('silly-datetime')
var times =sd.format(new Date(),'YYYY-MM-DD-hh-mm-ss')
// var times =sd.format(new Date(),3000)  距离当前时间的前几秒
console.log(times)












