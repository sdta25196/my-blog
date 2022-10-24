import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Loading } from "../components/common"
import { Navigation, RightBox } from "../components/home"
import styles from '../components/home/sass/index.module.scss'
import { BLOGTYPE, ARTICLE, TRANSLATE, KNOW } from "../assets/static"
import marked from 'marked'
import Prism from 'prismjs'
import useLazyLoad from '../hooks/useLazyLoad'


marked.use({
  renderer: {
    image(herf, _, text) {
      return `<img data-src="/${herf}" alt="${text}" src="" width="0" height="0">`
    }
  }
})

export default function Home() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.main}>
        <Navigation pathname={'/article'} />
        <RightBox>
          <Article />
        </RightBox>
      </div>
    </div>
  )
}

function Article() {
  const { pathname } = useRouter()
  const [articleList, setArticleList] = useState([])
  const [articletype, setArticleType] = useState(BLOGTYPE.article)
  // const [loadListen, removeLoadListen] = useLazyLoad()

  // /** lazyLoad */
  // useEffect(() => {
  //   loadListen()
  //   return removeLoadListen
  // }, [loadListen, removeLoadListen])
  useEffect(() => {
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    const lazyLoad = (allImg) => {
      return () => {
        allImg.forEach(img => {
          let distance = viewHeight - img.getBoundingClientRect().top
          // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
          if (distance >= 0 && img.getAttribute('data-src')) {
            // 给元素写入真实的src，展示图片
            img.src = img.getAttribute('data-src')
            img.setAttribute('width', '80%')
            img.setAttribute('height', '100%')
          }
        })
      }
    }
    let allImg = document.querySelectorAll('img')
    lazyLoad(allImg)()
    window.addEventListener('scroll', lazyLoad(allImg), false)
    return () => {
      window.removeEventListener('scroll', lazyLoad())
    }
  }, [])

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
    setTimeout(() => {
      Prism.highlightAll()
    })
  }, [pathname])

  return (
    <ul>
      {articleList.map(item => {
        const color = '#' + Math.random().toString(16).split('.')[1].slice(0, 6)
        return (
          <li key={item.hash}>
            <Link href={`/detail/${articletype}/${item.hash}`} >
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
