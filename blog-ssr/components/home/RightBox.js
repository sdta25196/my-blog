import styles from './sass/rightBox.module.scss'

function RightBox({ children }) {
  return (
    <>
      <main className={styles.rightBox}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.icp}>
          900t.cn © 2021-2027 版权所有 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">鲁ICP备2021046010号</a>
        </div>
      </footer>
    </>
  )
}

export default RightBox