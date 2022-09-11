import styles from './sass/loading.module.scss'

function Loading() {
  return (
    <div className={styles.pace}>
      <div className={styles.paceProgress} data-progress-text="99%" data-progress="99">
        <div className={styles.paceProgressInner}></div>
      </div>
      <div className={styles.paceActivity}></div>
    </div>
  )
}

export default Loading