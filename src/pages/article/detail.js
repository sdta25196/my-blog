import { useEffect, useState } from "react"
import Axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'
import styles from '../../components/article/sass/detail.module.scss'
import { getArticleByHash } from "../../tools"
import { ArticleLoading } from '../../components/common'
import useLazyLoad from "../../hooks/useLazyLoad"

let hasListener = false

function Detaile(props) {
  const { history, match: { params: { type, hash } } } = props
  const [articleItem] = useState(() => getArticleByHash(type, hash))
  const [fixed, setFixed] = useState(false)
  const [detail, setDetail] = useState("")
  const [loadListen, removeLoadListen] = useLazyLoad()
  /** lazyLoad */
  useEffect(() => {
    loadListen()
    return removeLoadListen
  }, [loadListen, removeLoadListen])

  useEffect(() => {
    // 详情页重置描述
    const description = document.querySelector('meta[name="description"]')
    description.content = articleItem.title
    const title = document.querySelector('title')
    title.innerHTML = articleItem.title
  }, [articleItem.title])

  // 测试请求博客文章
  useEffect(() => {
    Axios.get(`${articleItem.filePath}${articleItem.fileName}`, {
      responseEncoding: 'utf8',
    }).then(res => {
      setDetail(res.data)
      Prism.highlightAll()
    })
  }, [articleItem])

  useEffect(() => {
    function scrollLienter() {
      if (window.scrollY >= 100) { setFixed(true) }
      else { setFixed(false) }
    }
    function resizeLienter() {
      if (document.documentElement.clientWidth > 1200) {
        if (!hasListener) {
          hasListener = true
          window.addEventListener('scroll', scrollLienter)
        }
      } else {
        hasListener = false
        setFixed(false)
        window.removeEventListener('scroll', scrollLienter)
      }
    }
    window.addEventListener('resize', resizeLienter)
    resizeLienter()

    return () => {
      hasListener = false
      window.removeEventListener('resize', resizeLienter)
      window.removeEventListener('scroll', scrollLienter)
    }
  }, [])

  return (
    <div className={styles.box}>
      <h1 className={`${fixed ? styles.fixed : styles.title}`}>{articleItem.title}</h1>
      <article className={styles.article}>
        <hr></hr>
        {
          detail ? <div dangerouslySetInnerHTML={{ __html: marked(detail) }}></div> :
            <div className={styles.loading}><ArticleLoading /></div>
        }
      </article>
      <div className={styles.back} onClick={() => { history.goBack() }}></div>
    </div>
  )
}

export default Detaile