import { lazy } from 'react'
import setRouter from './setRouterFun'

const routes = [
  setRouter("首页", {
    path: "/", exact: false, Comp: lazy(() => import('../pages/home')),
    children: [
      { descript: "文章", path: "/", exact: true, Comp: lazy(() => import('../pages/article')) },
      { descript: "技能", path: "/know", exact: true, Comp: lazy(() => import('../pages/article')) },
      { descript: "翻译", path: "/translate", exact: true, Comp: lazy(() => import('../pages/article')) },
      { descript: "工具-外部站点", path: "/externalStation", exact: true, Comp: lazy(() => import('../pages/externalStation')) },
      { descript: "文章详情", path: "/detail/:type/:hash", exact: true, Comp: lazy(() => import('../pages/article/detail')) },
      { descript: "404", path: "*", exact: true, Comp: lazy(() => import('../pages/article')) },
    ]
  }),
]
export default routes