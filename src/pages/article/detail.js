import { useEffect, useState } from "react"
import { BLOGTYPE, ARTICLE, KNOW, TRANSLATE } from "../../assets/static"
import Axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'
import styles from '../../components/article/sass/detail.module.scss'

function Detaile(props) {
  const { match: { params: { type, hash } } } = props

  const [acticleItem] = useState(() => {
    switch (type) {
      case BLOGTYPE.article:
        return ARTICLE.find(e => e.hash === hash)
      case BLOGTYPE.know:
        return KNOW.find(e => e.hash === hash)
      case BLOGTYPE.translate:
        return TRANSLATE.find(e => e.hash === hash)
      default:
        new Error("文章详情类型出错")
        break;
    }
  })

  const [detail, setDetail] = useState("")
  // 测试请求博客文章
  useEffect(() => {
    Axios.get(`${acticleItem.filePath}${acticleItem.fileName}`, {
      responseEncoding: 'utf8',
    }).then(res => {
      setDetail(res.data)
      Prism.highlightAll()
    })
  }, [acticleItem])

  return (
    <article className={styles.box}>
      <h1>{acticleItem.title}</h1>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: marked(detail) }}></div>
    </article>
  )
}

export default Detaile