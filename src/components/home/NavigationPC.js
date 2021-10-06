import { useState, useEffect } from 'react'
import styles from './sass/navigation.module.scss'
import GITHUB from '../../assets/image/github.png'
import CSDN from '../../assets/image/csdn.png'
import { Link } from 'react-router-dom'

function NavigationPC({ activeType, nav = [] }) {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    if (document.documentElement.clientWidth > 1200) {
      window.onscroll = () => {
        if (window.scrollY >= 96) { setFixed(true) }
        else { setFixed(false) }
      }
      return () => window.onscroll = null
    }
  }, [])

  return (
    <div className={styles.navigationPC}>
      <header className={styles.top}>
        <span className={styles.keep}>keep</span>
        <span className={styles.coding}>coding</span>
      </header>
      <aside className={`${styles.bottom} ${fixed ? styles.fixed : ""}`}>
        <div className={styles.name}>华洛<span className={styles.subName}>(Volar)</span></div>
        <div className={styles.slogan}>野生程序员，终身学习者</div>
        {
          nav.map((item) => {
            return <Link to={item.router} key={item.router}>
              <p className={`${styles.articleType} ${activeType === item.active ? styles.active : ''}`}>
                <span>{item.title}</span>
                <span className={styles.subT}>{item.subT}</span>
              </p>
            </Link>
          })
        }
        <div className={styles.linkBox}>
          <a href="https://github.com/sdta25196" target="_blank" rel="noreferrer">
            <img src={GITHUB} alt="github" className={styles.link} />
          </a>
          <a href="https://valor.blog.csdn.net/" target="_blank" rel="noreferrer">
            <img src={CSDN} alt="csdn" className={styles.link} />
          </a>
        </div>
      </aside>
    </div >
  )
}

export default NavigationPC