import styles from './sass/layout.module.scss'

/**
*
* @author : 田源
* @date : 2021-09-30 15:50
* @description : 布局组件
*
*/
function Layout({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.leftBox}>
        左侧的
      </div>
      <div className={styles.rightBox}>
        右侧的
        {children}
      </div>
    </div>
  )
}

export default Layout