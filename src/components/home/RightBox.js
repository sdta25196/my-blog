import styles from './sass/rightBox.module.scss'

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