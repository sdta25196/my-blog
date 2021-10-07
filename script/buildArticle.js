const path = require('path')
const fs = require('fs')
const crypto = require("crypto")

const rootPath = path.resolve(__dirname, '../public/')
const workPath = path.resolve(rootPath, 'blogs/')
const assetPath = path.resolve(rootPath, 'assets/')
// 读文件夹
const dir = fs.readdirSync(workPath)

dir.forEach(item => {
  const filePath = path.resolve(`${workPath}/${item}`)
  const files = fs.readdirSync(filePath)
  const article = []

  files.forEach(file => {
    if (file === 'assets') {// assets是资源文件夹,copy到根目录
      const assetsFiles = fs.readdirSync(`${filePath}/assets`)
      assetsFiles.forEach(asset => {
        fs.writeFileSync(`${assetPath}/${asset}`, fs.readFileSync(`${filePath}/assets/${asset}`));
      })
    } else {
      const fileStat = fs.statSync(path.resolve(filePath, file));
      // 计算创建时间
      const date = new Date(fileStat.ctime).toLocaleString()

      // 读文件
      const content = fs.readFileSync(path.resolve(filePath, file), 'utf-8')

      // 计算hash值
      const hash = crypto.createHash("sha1").update(content).digest('hex')
      article.push(
        `{
          hash: "${hash}",
          fileName: "${file}",
          title: "${file.replace(".md", "")}",
          filePath: "/blogs/${item}/",
          date: "${date}",
          description: "${content.split(/\r?\n/).slice(0, 5).join('@@@')}",
        }`
      )
    }
  })
  const DSLJson = `
  const ${item} = [${article}]
  export default ${item}
  `
  fs.writeFileSync(path.resolve(__dirname, `../src/assets/static/${item}.js`), DSLJson)
})
console.log('done')
