/**
 * @description 设置路由
 * @param path  路径
 * @param exact 是否严格匹配 
 * @param Comp 组件 
 * @param children :Array<{path,Comp}> 包含路径和组件的数组
 * @param breadcrumb 路由的面包屑显示
 * @returns 路由对象
 */
function setRouter(description, { path, exact = true, Comp, children, breadcrumb }) {
  return setChildrenRoute({ path, exact, Comp, children, breadcrumb })
}

// 递归生成route
const setChildrenRoute = (router) => {
  return {
    path: router.path,
    exact: router.exact,
    component: (props) => RouterGuard(props, router),
    routes: router.children?.map(item => setChildrenRoute(item))
  }
}

// 统一的路由守卫
const RouterGuard = (props, router) => {
  return <router.Comp {...props} breadcrumb={router.breadcrumb} />
}

export default setRouter