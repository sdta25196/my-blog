import { useEffect, useState } from 'react'
import { BLOGTYPE, ARTICLE, TRANSLATE, KNOW } from "../../assets/static"
import styles from '../../components/article/sass/index.module.scss'
import CALENDAR from '../../assets/image/calendar.png'
import marked from 'marked'

function Article(props) {
  const { history, location: { pathname } } = props
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
    <section>
      {articleList.map(item => {
        return (
          <article key={item.hash} className={styles.articleItem}
            onClick={() => { history.push(`/detail/${articletype}/${item.hash}`) }}>
            <div className={styles.title}>
              {item.title}
              <p className={styles.subT}>
                <img src={CALENDAR} />{item.date}</p>
            </div>
            <div className={styles.descript} dangerouslySetInnerHTML={{ __html: marked(item.description.replace(/@@@/g, '\r\n')) }} ></div>
          </article>
        )
      })}
    </section>
  )
}

export default Article