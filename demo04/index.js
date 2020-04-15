
var fx = require('fs')
//判断是文件还是目录
// fx.stat('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`是文件:${data.isFile()}`);
//     console.log(`是目录:${data.isDirectory()}`);
// });
// fx.stat('./package.json', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`是文件:${data.isFile()}`);
//     console.log(`是目录:${data.isDirectory()}`);
// });
//创建目录
// fx.mkdir('./css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建成功')
// })
//创建写入文件,如果已经存在就替换它
// fx.writeFile('./html/index.html', 'node js hahah', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建并写入文件成功')
// })
//追加文件 如果不存在则创建 如果存在就在后面追加
// fx.appendFile('./css/base.css', 'body{color:red}\n', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('追加文件成功')
// })
//读取文件
// fx.readFile('./html/index.html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
//     console.log(data.toString())
// })
//读取目录下的文件和文件夹（只能一级)
// fx.readdir('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })
// 1表示重命名   2表示移动文件
// fx.rename('./css/aaa.css', './css/index.css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功')
// })
// fx.rename('./css/index.css', './html/index.css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('移动文件成功')
// })
//删除目录（不能删除文件） 删除目录为空的目录
// fx.rmdir('./aaa', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功')
// })
//删除文件（不能删除目录）
// fx.unlink('./aaa',(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('删除文件成功')
// })