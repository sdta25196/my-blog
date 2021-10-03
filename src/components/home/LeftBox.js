import styles from './sass/leftBox.module.scss'
import GITHUB from '../../assets/image/github.png'
import CSDN from '../../assets/image/csdn.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BLOGTYPE } from '../../assets/static'

/**
*
* @author : 田源
* @date : 2021-10-02 15:41
* @description : 博客左侧主体
*
*/
function LeftBox({ pathname }) {
  const [activeType, setActiveType] = useState(BLOGTYPE.article)

  useEffect(() => {
    switch (pathname) {
      case '/util':
        setActiveType(BLOGTYPE.util)
        break;
      case '/externalStation':
        setActiveType(BLOGTYPE.externalStation)
        break;
      case '/translate':
        setActiveType(BLOGTYPE.translate)
        break;
      default:
        setActiveType(BLOGTYPE.article)
        break;
    }
  }, [pathname])

  return (
    <div className={styles.leftBox}>
      <header className={styles.top}>
        <span className={styles.keep}>
          keep
        </span>
        <span className={styles.coding}>
          coding
        </span>
      </header>
      <aside className={styles.bottom}>
        <div className={styles.name}>
          华洛<span className={styles.subName}>(Volar)</span>
        </div>
        <div className={styles.slogan}>
          野生程序员，终身学习者
        </div>
        <Link to='/article'>
          <p className={`${styles.articleType} ${activeType === BLOGTYPE.article ? styles.active : ''}`}>
            <span>文章</span>
          </p>
        </Link>
        <Link to='/util'>
          <p className={`${styles.articleType} ${activeType === BLOGTYPE.util ? styles.active : ''}`}>
            <span>技能</span>
          </p>
        </Link>
        <Link to='/externalStation'>
          <p className={`${styles.articleType} ${activeType === BLOGTYPE.externalStation ? styles.active : ''}`}>
            <span>工具</span>
          </p>
        </Link>
        <Link to='/translate'>
          <p className={`${styles.articleType} ${activeType === BLOGTYPE.translate ? styles.active : ''}`}>
            <span>翻译</span>
          </p>
        </Link>
        <div className={styles.linkBox}>
          <a href="https://github.com/sdta25196" target="_blank" rel="noreferrer">
            <img src={GITHUB} alt="github" className={styles.link} />
          </a>
          <a href="https://valor.blog.csdn.net/" target="_blank" rel="noreferrer">
            <img src={CSDN} alt="csdn" className={styles.link} />
          </a>
        </div>
      </aside>
    </div>
  )
}

export default LeftBox