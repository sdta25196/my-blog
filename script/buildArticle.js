const path = require('path')
const fs = require('fs')
const crypto = require("crypto")

// 读文件
const content = fs.readFileSync(path.resolve(__dirname, '../blogs/测试.md'), 'utf-8')

const hash = crypto.createHash("sha1").update(content).digest('hex')

// 写文件
const DSLJson = `
const article = [
  {
    hash: '${hash}',
    name: "测试.md",
    path: "/assets/blogs/",
    // date: ""
  }
]

export default article
`
fs.writeFileSync(path.resolve(__dirname, `../src/assets/static/article.js`), DSLJson)
console.log('done')
