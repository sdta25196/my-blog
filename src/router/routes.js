import { lazy } from 'react'
import { setDeepRouter } from './setRouterFun'

//! 路由配置，路由名全部小写
const routes = [
  setDeepRouter("首页", {
    path: "/", exact: false, Comp: lazy(() => import('../pages/home')),
    children: [
      { descript: "文章", path: "/", exact: true, Comp: lazy(() => import('../pages/article')) },
      { descript: "技能", path: "/util", exact: true, Comp: lazy(() => import('../pages/util')) },
      { descript: "工具-外部站点", path: "/externalStation", exact: true, Comp: lazy(() => import('../pages/externalStation')) },
      { descript: "翻译", path: "/translate", exact: true, Comp: lazy(() => import('../pages/translate')) },
      { descript: "404", path: "*", exact: true, Comp: lazy(() => import('../pages/article')) },
    ]
  }),
]
export default routes