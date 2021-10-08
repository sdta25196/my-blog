import { Suspense } from "react"
import { Switch } from "react-router-dom"
import { RouteWithSubRoutes } from '../../router'
import { Navigation, RightBox } from "../../components/home"
import { Loading } from "../../components/common"
import styles from '../../components/home/sass/index.module.scss'

function Home(props) {
  const { routes, location: { pathname } } = props

  return (
    <div className={styles.mainBox}>
      <div className={styles.main}>
        <Navigation pathname={pathname} />
        <RightBox>
          <Suspense fallback={<div className={styles.loading}><Loading /></div>}>
            <Switch>
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
          </Suspense>
        </RightBox>
      </div>
    </div>
  )
}

export default Home