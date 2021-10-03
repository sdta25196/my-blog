const path = require('path')
const fs = require('fs')
const crypto = require("crypto")

// 读文件
const content = fs.readFileSync(path.resolve(__dirname, '../public/blogs/article/测试.md'), 'utf-8')

const hash = crypto.createHash("sha1").update(content).digest('hex')

// 写文件
const DSLJson = `
const article = [
  {
    hash: '1aeab37a38241041534e35caaf4b37ea23533724',
    fileName: "测试.md",
    title: "测试",
    filePath: "/blogs/article/",
    // date: "" //通过文件创建时间获取
    // description: "" //取前三个\r
  } 
]

export default article
`
fs.writeFileSync(path.resolve(__dirname, `../src/assets/static/article.js`), DSLJson)
console.log('done')
