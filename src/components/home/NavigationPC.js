import { useState, useEffect } from 'react'
import styles from './sass/navigation.module.scss'
import GITHUB from '../../assets/image/github.png'
import CSDN from '../../assets/image/csdn.png'
import LOGO from '../../assets/image/logo.webp'
import { Link, useHistory } from 'react-router-dom'
import { getArticleByHash } from '../../tools'

function NavigationPC({ activeType, nav = [] }) {
  const [fixed, setFixed] = useState(false)
  const [isDetail, setIsDetail] = useState(false)
  const [outline, setOutline] = useState([])
  const { location: { pathname }, replace } = useHistory()
  /** 监听吸顶滚动 */
  useEffect(() => {
    function scrollLienter() {
      if (window.scrollY >= 150) { setFixed(true) }
      else { setFixed(false) }
    }
    window.addEventListener('scroll', scrollLienter)
    return () => window.removeEventListener('scroll', scrollLienter)
  }, [])

  /** 监听大纲滚动 */
  useEffect(() => {
    function scrollLienter() {
      let arr = []
      outline.forEach(item => {
        let element = document.querySelector(`[data-outline="${item}"]`)
        if (element) { element.classList.remove(styles.active) }

        let dom = document.getElementById(handlerID(item))
        if (dom) {
          let rect = dom.getBoundingClientRect()
          if (rect.top < 150) {
            arr.push({ top: rect.top, element })
          }
        }
      })
      if (arr.length) {
        arr[arr.length - 1].element?.classList.add(styles.active)
      } else {
        document.querySelector('[data-outline]')?.classList.add(styles.active)
      }
    }
    scrollLienter()
    window.addEventListener('scroll', scrollLienter)
    return () => window.removeEventListener('scroll', scrollLienter)
  }, [outline])

  useEffect(() => {
    if (pathname.startsWith('/detail')) {
      const [type, articleHash] = (pathname.split('/')).slice(2, 4)
      console.log(type, articleHash)
      const { outline } = getArticleByHash(type, articleHash)
      setIsDetail(true)
      setOutline(outline)
    } else {
      setIsDetail(false)
    }
  }, [pathname])

  const handlerID = (id) => {
    return id.replace(/#+\s*/, '').replace(/\s/g, '-').replace(/&|%|#|@|!|:|（|）|\(|\)|,|，|。|\.|\?/g, '').toLowerCase()
  }
  const handlerOutlineClick = (id) => {
    let item = document.getElementById(handlerID(id))
    window.scrollTo(0, item?.offsetTop - 80);
  }

  /**处理缩进 */
  const handlerRetract = (item) => {
    let num = (item.match(/#/g) || "").length
    let str = item.replace(/#/g, '')
    for (let i = 1; i < num; i++) {
      str = <span>{str}</span>
    }
    return str
  }
  const goList = () => {
    replace('/' + (pathname.split('/')[2] || ''))
  }
  return (
    <div className={styles.navigationPC}>
      <header className={styles.top}>
        <img src={LOGO} alt="logo" width='230px' height="113px" />
      </header>
      {
        isDetail ?
          <aside className={`${styles.bottom} ${fixed ? styles.fixed : ""}`}>
            <div className={styles.back} onClick={() => { goList() }}>
              返回列表
            </div>
            <div className={styles.bottomDetail}>
              {outline.map((item, i) => {
                return <p key={i} onClick={() => handlerOutlineClick(item)} className={styles.outline} data-outline={item}>
                  {handlerRetract(item)}
                </p>
              })}
            </div>
          </aside> :
          <aside className={`${styles.bottom} ${fixed ? styles.fixed : ""}`}>
            <div className={styles.name}>华洛<span className={styles.subName}>(Valor)</span></div>
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
      }
    </div >
  )
}

export default NavigationPC