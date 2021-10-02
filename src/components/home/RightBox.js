import styles from './sass/rightBox.module.scss'

/**
*
* @author : 田源
* @date : 2021-10-02 15:41
* @description : 博客右侧主体
*
*/
function RightBox({ children }) {
  return (
    <div className={styles.rightBox}>
      {children}
    </div>
  )
}

export default RightBox