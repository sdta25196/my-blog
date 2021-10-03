import { useEffect, useState } from "react"
import { BLOGTYPE, ARTICLE, UTIL, TRANSLATE } from "../../assets/static"
import Axios from 'axios'
import styles from '../../components/detail/sass/index.module.scss'
import marked from 'marked'

function Detaile(props) {
  const { match: { params: { type, hash } } } = props

  const [acticleItem] = useState(() => {
    switch (type) {
      case BLOGTYPE.article:
        return ARTICLE.find(e => e.hash === hash)
      case BLOGTYPE.util:
        return UTIL.find(e => e.hash === hash)
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
    })
  }, [acticleItem])

  return (
    <article className={styles.box} dangerouslySetInnerHTML={{ __html: marked(detail) }}>
    </article>
  )
}

export default Detaile