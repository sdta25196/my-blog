import { useEffect, useState } from "react"
import styles from './sass/articleLoading.module.scss'

function ArticleLoading(props) {
  const [waiting, setWait] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(true)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      {
        waiting &&
        <div className={styles.loadingBox}>
          <div >
            <div className={styles.loading}></div>
            <div className={styles.loading}></div>
            <div className={styles.loading}></div>
            <div className={styles.loading}></div>
            <div className={styles.loading}></div>
          </div>
        </div>
      }
    </>
  )
}

export default ArticleLoading