import styles from './sass/loading.module.scss'
/**
*
* @author: 田源
* @date: 2021-08-02 14:56
* @description: 显示loading组件，延迟300毫秒显示
*
*/
function Loading() {
  return (
    <div className={styles.loadingBox}>
      <div >
        <div className={styles.loading}></div>
        <div className={styles.loading}></div>
        <div className={styles.loading}></div>
        <div className={styles.loading}></div>
        <div className={styles.loading}></div>
      </div>
    </div>
  )
}

export default Loading