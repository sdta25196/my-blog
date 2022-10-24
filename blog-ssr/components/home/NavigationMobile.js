import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getArticleByHash } from "../../tools"
import styles from './sass/navigation.module.scss'
import LOGO from '../../public/image/logo.webp'


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
      } else {
        // 处理标题一直显示的bug
        setArticle(article => article = {
          ...article,
          show: false
        })
      }
    }
    window.addEventListener('scroll', scrollLienter)
    return () => window.removeEventListener('scroll', scrollLienter)
  }, [])

  return (
    <header className={styles.navigationMobile}>
      <div className={styles.mobile}>
        {
          article.show ?
            <p className={styles.t}>{article.title}</p> :
            <img src={LOGO.src} alt="logo" className={styles.logo} />
        }
      </div>
      <div className={styles.mobileNav}>
        {
          nav.map((item) => {
            return <Link href={item.router} key={item.title}>
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