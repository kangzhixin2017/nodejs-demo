
const http = require('http')

http.createServer((req, res) => {

    console.log(req.url)

    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" })
    //解决中文乱码
    res.write('<head><meta charset="UTF-8"></head>')

    res.write('this is nodejs')

    res.write('你好')

    res.end()

}).listen(3000)
