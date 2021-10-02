import { lazy } from 'react'
import { setRouter } from './setRouterFun'

//! 路由配置，路由名全部小写
const routes = [
  setRouter("首页", { path: "/", exact: true, Comp: lazy(() => import('../pages/home')) }),
  setRouter("文章", { path: "/article", exact: true, Comp: lazy(() => import('../pages/article')) }),
  setRouter("技能", { path: "/util", exact: true, Comp: lazy(() => import('../pages/util')) }),
  setRouter("翻译", { path: "/translate", exact: true, Comp: lazy(() => import('../pages/translate')) }),
  setRouter("工具-外部站点", { path: "/externalStation", exact: true, Comp: lazy(() => import('../pages/externalStation')) }),
  setRouter("未定义路由-指向首页", { path: "*", exact: true, Comp: lazy(() => import('../pages/home')) }),
]
export default routes