import { lazy } from 'react'
import { setRouter, setDeepRouter } from './setRouterFun'

//! 路由配置，路由名全部小写
const routes = [
  setRouter("首页", { path: "/", exact: true, Comp: lazy(() => import('../pages/Home')) }),
]
export default routes