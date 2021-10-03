import { useEffect, useState } from 'react'
import { BLOGTYPE, ARTICLE, TRANSLATE, UTIL } from "../../assets/static"
import styles from '../../components/article/sass/index.module.scss'

/**
*
* @author : 田源
* @date : 2021-10-03 13:10
* @description : 文章列表
*
*/
function Article(props) {
  const { history, location: { pathname } } = props
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    switch (pathname) {
      case '/util':
        setArticleList(UTIL)
        break;
      case '/translate':
        setArticleList(TRANSLATE)
        break;
      default:
        setArticleList(ARTICLE)
        break;
    }
  }, [pathname])

  return (
    <section>
      {articleList.map(item => {
        return (
          <article key={item.hash} className={styles.articleItem}
            onClick={() => { history.push(`/detail/${BLOGTYPE.article}/${item.hash}`) }}>
            <div className={styles.title}>
              {item.title}
            </div>
            <div className={styles.descript}>
              {item.description}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Article