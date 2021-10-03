import { Suspense } from "react"
import { Switch } from "react-router-dom"
import { RouteWithSubRoutes } from '../../router'
import styles from '../../components/home/sass/index.module.scss'
import { LeftBox, RightBox } from "../../components/home"

/**
*
* @author : 田源
* @date : 2021-10-02 15:41
* @description : 博客首页
*
*/
function Home(props) {
  const { routes, location: { pathname } } = props

  return (
    <div className={styles.main}>
      <LeftBox pathname={pathname} />
      <RightBox>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Switch>
        </Suspense>
      </RightBox>
    </div>
  )
}

export default Home