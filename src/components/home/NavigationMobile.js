import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getArticleByHash } from "../../tools"
import styles from './sass/navigation.module.scss'
import LOGO from '../../assets/image/logo.jpg'


function NavigationMobile({ activeType, nav = [] }) {
  const [article, setArticle] = useState({
    title: "",
    show: false
  })
  // 移动端翻阅文章详情后显示标题
  useEffect(() => {
    function scrollLienter() {
      if (window.location.hash.startsWith('#/detail')) {
        const [type, hash] = (window.location.hash.split('/')).slice(2, 4)
        const { title } = getArticleByHash(type, hash)
        if (window.scrollY >= 80) {
          setArticle(article => article = {
            ...article,
            title,
            show: true
          })
        } else {
          setArticle(article => article = {
            ...article,
            title,
            show: false
          })
        }
      }
    }
    window.addEventListener('scroll', scrollLienter)
    return () => window.removeEventListener('scroll', scrollLienter)
  }, [])

  return (
    <header className={styles.navigationMobile}>
      <div className={styles.mobile}>
        {
          article.show ? <p className={styles.t}>{article.title}</p> : <img src={LOGO} alt="logo" width='220px' />
        }
      </div>
      <div className={styles.mobileNav}>
        {
          nav.map((item) => {
            return <Link to={item.router} key={item.title}>
              <p className={`${styles.articleType} ${activeType === item.active ? styles.active : ''}`}>
                <span>{item.title}</span>
              </p>
            </Link>
          })
        }
      </div>
    </header>
  )
}

export default NavigationMobile