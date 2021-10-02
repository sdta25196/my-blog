import styles from './sass/leftBox.module.scss'
import LOGO from '../../assets/image/logo.jpg'
import GITHUB from '../../assets/image/github.png'
import CSDN from '../../assets/image/csdn.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

/**
*
* @author : 田源
* @date : 2021-10-02 15:41
* @description : 博客左侧主体
*
*/
function LeftBox({ pathname }) {
  const [activeType, setActiveType] = useState(0)

  useEffect(() => {
    switch (pathname) {
      case '/util':
        setActiveType(1)
        break;
      case '/externalStation':
        setActiveType(2)
        break;
      case '/translate':
        setActiveType(3)
        break;
      default:
        setActiveType(0)
        break;
    }
  }, [pathname])

  return (
    <div className={styles.leftBox}>
      <div className={styles.top}>
        <img className={styles.logo} src={LOGO} alt="valor" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.name}>
          华洛<span className={styles.subName}>(Volar)</span>
        </div>
        <div className={styles.slogan}>
          野生程序员，终身学习者
        </div>
        <Link to='/article'>
          <p className={`${styles.articleType} ${activeType === 0 ? styles.active : ''}`}>
            文章
          </p>
        </Link>
        <Link to='/util'>
          <p className={`${styles.articleType} ${activeType === 1 ? styles.active : ''}`}>
            技能
          </p>
        </Link>
        <Link to='/externalStation'>
          <p className={`${styles.articleType} ${activeType === 2 ? styles.active : ''}`}>
            工具
          </p>
        </Link>
        <Link to='/translate'>
          <p className={`${styles.articleType} ${activeType === 3 ? styles.active : ''}`}>
            翻译
          </p>
        </Link>
        <div className={styles.linkBox}>
          <a href="https://github.com/sdta25196" target="_blank">
            <img src={GITHUB} alt="github" className={styles.link} />
          </a>
          <a href="https://valor.blog.csdn.net/" target="_blank">
            <img src={CSDN} alt="csdn" className={styles.link} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LeftBox