import styles from './sass/navigation.module.scss'
import { Link } from 'react-router-dom'

function NavigationMobile({ activeType, nav = [] }) {
  return (
    <header className={styles.navigationMobile}>
      <div className={styles.mobile}>
        valor
        <span className={styles.keep}>keep</span>
        <span className={styles.coding}>coding</span>
      </div>
      <div className={styles.mobileNav}>
        {
          nav.map((item) => {
            return <Link to={item.router} key={item.title}>
              <p className={`${styles.articleType} ${activeType === item.active ? styles.active : ''}`}>
                <span>{item.title}</span>
              </p>
            </Link>
          })
        }
      </div>
    </header>
  )
}

export default NavigationMobile