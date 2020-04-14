const http = require('http')

const url = require('url')

http.createServer((req, res) => {

    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" })
    // 解决中文乱码
    res.write('<head><meta charset="UTF-8"></head>')

    // 过滤
    if (req.url != '/favicon.ico') {

        var getvalue = url.parse(req.url, true).query

        console.log(`姓名：${getvalue.name}--年龄：${getvalue.age}`)

    }

    res.end()

}).listen(3000)
