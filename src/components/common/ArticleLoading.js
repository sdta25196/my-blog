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
    <div>
      {
        waiting &&
        <div className={styles.pace}>
          <div className={styles.paceProgress} data-progress-text="99%" data-progress="99">
            <div className={styles.paceProgressInner}></div>
          </div>
          <div className={styles.paceActivity}></div>
        </div>
      }
    </div>
  )
}

export default ArticleLoading