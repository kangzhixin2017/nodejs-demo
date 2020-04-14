const url = require('url')

var api = 'http://www.baidu.com?name=zhangsan&age=23'

// console.log(url.parse(api, true).query)

var getvalue = url.parse(api, true).query

console.log(getvalue)

console.log(`姓名：${getvalue.name}--年龄：${getvalue.age}`)