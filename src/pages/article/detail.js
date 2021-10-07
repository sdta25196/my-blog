import { useEffect, useState } from "react"
import Axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'
import styles from '../../components/article/sass/detail.module.scss'
import { getArticleByHash } from "../../tools"

function Detaile(props) {
  const { match: { params: { type, hash } } } = props

  const [articleItem] = useState(() => getArticleByHash(type, hash))

  const [detail, setDetail] = useState("")
  // 测试请求博客文章
  useEffect(() => {
    Axios.get(`${articleItem.filePath}${articleItem.fileName}`, {
      responseEncoding: 'utf8',
    }).then(res => {
      setDetail(res.data)
      Prism.highlightAll()
    })
  }, [articleItem])

  return (
    <article className={styles.box}>
      <h1>{articleItem.title}</h1>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: marked(detail) }}></div>
    </article>
  )
}

export default Detaile