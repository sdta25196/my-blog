import { useEffect, useState } from 'react'
import styles from './sass/navigation.module.scss'
import { Link } from 'react-router-dom'
import { getArticleByHash } from "../../tools"

function NavigationMobile({ activeType, nav = [] }) {
  const [title, setTitle] = useState({
    content: "",
    show: false
  })
  // 移动端翻阅文章详情后显示标题
  useEffect(() => {
    if (window.location.hash.startsWith('#/detail')) {
      const [_, __, type, hash] = (window.location.hash.split('/'))
      const { title } = getArticleByHash(type, hash)
      window.onscroll = () => {
        if (window.scrollY >= 96) {
          setTitle({
            content: title,
            show: true
          })
        } else {
          setTitle({
            content: title,
            show: false
          })
        }
      }
    }
    return () => window.onscroll = null
  }, [window.location.hash])
  return (
    <header className={styles.navigationMobile}>
      <div className={styles.mobile}>
        {
          title.show ? <p>{title.content}</p> :
            <p>
              <span>valor - </span>
              <span className={styles.keep}>keep </span>
              <span className={styles.coding}> coding</span>
            </p>
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