import { Suspense } from "react"
import { Switch } from "react-router-dom"
import { RouteWithSubRoutes } from '../../router'
import { Navigation, RightBox } from "../../components/home"
import { Loading } from "../../components/common"
import marked from 'marked'
import styles from '../../components/home/sass/index.module.scss'

marked.use({
  renderer: {
    image(herf, _, text) {
      return `<img data-src="/${herf}" alt="${text}" src="" width="0" height="0">`
    }
  }
})


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
        <div className={styles.icp}>
          900t.cn © 2021-2027 版权所有 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">鲁ICP备2021046010号</a>
        </div>
      </div>
    </div>
  )
}

export default Home