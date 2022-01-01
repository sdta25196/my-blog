const path = require('path')
const fs = require('fs')
const crypto = require("crypto")
const copyDir = require("./copyDir")

/**
*
* @author : 田源
* @date : 2021-12-02 17:42
* @description : 把博客复制到根目录中，生成各类型博客列表
*
*/
class BuildArticle {
  constructor() {
    this.blogPath = path.resolve(__dirname, '../blogs/') //博客
    this.targetBlogPath = path.resolve(__dirname, '../public/blogs/') // 打包前需要把博客复制到根目录
    this.assetPath = path.resolve(__dirname, '../public/assets/') // 静态资源的目录
  }
  build() {
    copyDir(this.blogPath, this.targetBlogPath)
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
    const date = new Date(fileStat.ctime)

    // 读文件
    const content = fs.readFileSync(path.resolve(filePath, file), 'utf-8')
    const outline = content.match(/^\s?#+\s.+/gm).map(item => `"${item.replace(/\r?\n/g, '')}"`)
    // 计算hash值
    const hash = crypto.createHash("sha1").update(content).digest('hex')
    const nameHash = crypto.createHash("sha1").update(file).digest('hex')
    let allContent = content.split(/\r?\n/)
    let num = 1
    for (let i = 0; i < allContent.length; i++) {
      allContent[i] = allContent[i].replace(/"|“|”/g, '\\"')
      if (num === 4) {
        num = i
        break
      }
      if (allContent[i] === '') {
        num++
      }
    }
    const description = allContent.slice(0, num).join('@@@')
    article.push(
      `{
        hash: "${hash}",
        fileName: "${nameHash}",
        title: "${file.replace(".md", "")}",
        filePath: "/blogs/${articleType}/",
        date: "${date}",
        description: "${description}",
        outline: [${outline}],
      }`
    )
  }

  /** 资源文件夹,copy到根目录 */
  handlerAsset(filePath) {
    const assetsFiles = fs.readdirSync(`${filePath}/assets`)
    assetsFiles.forEach(assetFile => {
      fs.writeFileSync(`${this.assetPath}/${assetFile}`, fs.readFileSync(`${filePath}/assets/${assetFile}`))
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