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
    <>
      <main className={styles.rightBox}>
        {children}
      </main>
      <footer className={styles.footer}>
      </footer>
    </>
  )
}

export default RightBox