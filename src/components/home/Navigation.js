import { useState, useEffect } from 'react'
import { BLOGTYPE } from '../../assets/static'
import NavigationMobile from './NavigationMobile'
import NavigationPC from './NavigationPC'

const nav = [
  { "router": "/article", "active": BLOGTYPE.article, "title": "文章", "subT": "学习、分享、记录" },
  { "router": "/know", "active": BLOGTYPE.know, "title": "技能", "subT": "各种技能、工具包的使用方法" },
  { "router": "/translate", "active": BLOGTYPE.translate, "title": "翻译", "subT": "学习英文，尝试翻译技术文档" },
  { "router": "/externalStation", "active": BLOGTYPE.externalStation, "title": "工具", "subT": "常用的一些网站" },
]
function Navigation({ pathname }) {
  const [activeType, setActiveType] = useState(BLOGTYPE.article)

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
      <NavigationPC activeType={activeType} nav={nav} />
      <NavigationMobile activeType={activeType} nav={nav} />
    </>
  )
}

export default Navigation