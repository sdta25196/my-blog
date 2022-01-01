import { useEffect, useState } from 'react'
import { BLOGTYPE, ARTICLE, TRANSLATE, KNOW } from "../../assets/static"
import styles from '../../components/article/sass/index.module.scss'
import { Link } from 'react-router-dom'
import marked from 'marked'
import useLazyLoad from '../../hooks/useLazyLoad'

function Article(props) {
  const { location: { pathname } } = props
  const [articleList, setArticleList] = useState([])
  const [articletype, setArticleType] = useState(BLOGTYPE.article)
  const [loadListen, removeLoadListen] = useLazyLoad()

  /** lazyLoad */
  useEffect(() => {
    loadListen()
    return removeLoadListen
  }, [loadListen, removeLoadListen])

  useEffect(() => {
    switch (pathname) {
      case '/know':
        setArticleList(KNOW)
        setArticleType(BLOGTYPE.know)
        break;
      case '/translate':
        setArticleList(TRANSLATE)
        setArticleType(BLOGTYPE.translate)
        break;
      default:
        setArticleList(ARTICLE)
        setArticleType(BLOGTYPE.article)
        break;
    }
  }, [pathname])

  return (
    <ul>
      {articleList.map(item => {
        const color = '#' + Math.random().toString(16).split('.')[1].slice(0, 6)
        return (
          <li key={item.hash}>
            <Link to={`/detail/${articletype}/${item.hash}`} >
              <article className={styles.articleItem} >
                <div className={styles.title}>
                  {item.title}
                  <p className={styles.subT}>
                    <span style={{ background: color, width: '20px', height: '10px', display: "inline-block" }}></span>
                    <span> = </span>
                    <span>{color}</span>
                  </p>
                </div>
                <div className={styles.descript} dangerouslySetInnerHTML={{ __html: marked(item.description.replace(/@@@/g, '\r\n')) }} ></div>
              </article>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Article