const path = require('path')
const fs = require('fs')
const crypto = require("crypto")

class BuildArticle {
  constructor() {
    this.blogPath = path.resolve(__dirname, '../public/blogs/')
    this.assetPath = path.resolve(__dirname, '../public/assets/')
  }
  build() {
    const articleDir = fs.readdirSync(this.blogPath)
    articleDir.forEach(articleType => {
      const DSLJson = this.contentModule(articleType)
      fs.writeFileSync(path.resolve(__dirname, `../src/assets/static/${articleType}.js`), DSLJson)
    })
    console.log('done')
  }

  handlerArticle(articleType) {
    const article = []
    const filePath = path.resolve(`${this.blogPath}/${articleType}`)
    const files = fs.readdirSync(filePath)
    files.forEach(file => {
      if (file === 'assets') { this.handlerAsset(filePath) }
      else { this.handlerFile(filePath, file, article, articleType) }
    })
    article.sort((a, b) => this.getDateTime(b) - this.getDateTime(a))
    return article
  }

  /** 处理文件生成内容 */
  handlerFile(filePath, file, article, articleType) {
    const fileStat = fs.statSync(path.resolve(filePath, file))
    // 计算创建时间
    const date = new Date(fileStat.ctime).toLocaleString()

    // 读文件
    const content = fs.readFileSync(path.resolve(filePath, file), 'utf-8')
    const outline = content.match(/^\s?#+\s.+/gm).map(item => `"${item.replace(/\r?\n/g, '')}"`)
    // 计算hash值
    const hash = crypto.createHash("sha1").update(content).digest('hex')
    article.push(
      `{
        hash: "${hash}",
        fileName: "${file}",
        title: "${file.replace(".md", "")}",
        filePath: "/blogs/${articleType}/",
        date: "${date}",
        description: "${content.split(/\r?\n/).slice(0, 5).join('@@@')}",
        outline: [${outline}],
      }`
    )
  }

  /** 资源文件夹,copy到根目录 */
  handlerAsset(filePath) {
    const assetsFiles = fs.readdirSync(`${filePath}/assets`)
    assetsFiles.forEach(asset => {
      fs.writeFileSync(`${this.assetPath}/${asset}`, fs.readFileSync(`${filePath}/assets/${asset}`))
    })
  }

  getDateTime(item) {
    return new Date(item.match(/date:\s"(.[^"]+)"/)[1]).getTime()
  }

  contentModule(articleType) {
    const str = `
const ${articleType} = [${this.handlerArticle(articleType)}]

export default ${articleType}
`
    return str
  }
}

new BuildArticle().build()