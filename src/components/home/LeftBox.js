import styles from './sass/leftBox.module.scss'
import GITHUB from '../../assets/image/github.png'
import CSDN from '../../assets/image/csdn.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BLOGTYPE } from '../../assets/static'

const nav = [
  { "router": "/article", "active": BLOGTYPE.article, "title": "文章", "subT": "学习、分享、记录" },
  { "router": "/know", "active": BLOGTYPE.know, "title": "技能", "subT": "各种技能、工具包的使用方法" },
  { "router": "/translate", "active": BLOGTYPE.translate, "title": "翻译", "subT": "学习英文，尝试翻译技术文档" },
  { "router": "/externalStation", "active": BLOGTYPE.externalStation, "title": "工具", "subT": "常用的一些网站" },
]
function LeftBox({ pathname }) {
  const [activeType, setActiveType] = useState(BLOGTYPE.article)
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

  useEffect(() => {
    function heightLightNav(pathname) {
      if (/\/externalStation/.test(pathname)) return BLOGTYPE.externalStation
      if (/\/know/.test(pathname) || /\/detail\/know\/*/.test(pathname)) return BLOGTYPE.know
      if (/\/translate/.test(pathname) || /\/detail\/translate\/*/.test(pathname)) return BLOGTYPE.translate
      return BLOGTYPE.article
    }
    setActiveType(heightLightNav(pathname))
  }, [pathname])

  return (
    <>
      <div className={styles.leftBox}>
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
      <header className={styles.mobileBox}>
        <div className={styles.mobile}>
          valor
          <span className={styles.keep}>keep</span>
          <span className={styles.coding}>coding</span>
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
    </>
  )
}

export default LeftBox