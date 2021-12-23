import { useEffect, useState } from 'react'
import { BLOGTYPE, ARTICLE, TRANSLATE, KNOW } from "../../assets/static"
import styles from '../../components/article/sass/index.module.scss'
import { Link } from 'react-router-dom'
import marked from 'marked'

function Article(props) {
  const { location: { pathname } } = props
  const [articleList, setArticleList] = useState([])
  const [articletype, setArticleType] = useState(BLOGTYPE.article)

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
        return (
          <li key={item.hash}>
            <Link to={`/detail/${articletype}/${item.hash}`} >
              <article className={styles.articleItem} >
                <div className={styles.title}>
                  {item.title}
                  <p className={styles.subT}>
                    一个毫无意义的字符串：
                    <span>{Math.random().toString(32).split('.')[1]}&nbsp;</span>
                    你信么？
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