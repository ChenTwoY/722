// querystring   查询字符串
var queryString=require("querystring")
console.log(queryString)
// http://127.0.0.1:3000?name=tom&age=20
// eval  xss攻击  sql注入
// 将对象转换为字符串
var url=queryString.stringify({name:"tom",age:20})
// var url=queryString.parse("name=tom&age=20")
console.log(url)
