var http =require('http')
// ejs  引擎模板
var ejs =require('ejs')
var fs =require('fs')
http.createServer((req,res)=>{、
    // 数据
    var datas ={
        'list':[
            {
                name:'tom',
                age:12
            }, 
            {
                name:'jerry',
                age:20
            }
        ]
    } 
    fs.readFile('../index.ejs',(err,data)=>{
        // template ejs模板
        var template =data.toString()
        // result 渲染数据的结果 render 提供  模板 数据
        var result =ejs.render(template,datas)
        res.end(result)
    })
}).listen(3000)
//<%%> 脚本控制   <%#%> 注释  <%= 输出数据到模板（输出是转义 HTML 标签）