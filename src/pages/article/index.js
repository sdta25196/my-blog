import { useEffect, useState } from 'react'
import { BLOGTYPE, ARTICLE, TRANSLATE, KNOW } from "../../assets/static"
import styles from '../../components/article/sass/index.module.scss'
import { Link } from 'react-router-dom'
import marked from 'marked'

marked.use({
  renderer: {
    image(herf, _, text) {
      return `<img data-src="${herf}" alt="${text}" src="" width="0" height="0">`
    }
  }
})

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

  /** lazyLoad */
  useEffect(() => {
    let allImg = document.querySelectorAll('img')
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    const lazyLoad = () => {
      allImg.forEach(img => {
        let distance = viewHeight - img.getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if (distance >= 0 && img.getAttribute('data-src')) {
          // 给元素写入真实的src，展示图片
          img.src = img.getAttribute('data-src')
          img.setAttribute('width', 'auto')
          img.setAttribute('height', 'auto')
        }
      })
    }
    window.addEventListener('scroll', lazyLoad, false);
    return () => {
      window.removeEventListener('scroll', lazyLoad)
    }
  })

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