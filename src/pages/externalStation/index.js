import styles from '../../components/externalStation/sass/index.module.scss'
import { EXTERNAL } from '../../assets/static/index'

function ExternalStation(props) {
  return (
    <div className={styles.externalBox}>
      {EXTERNAL.map(item => {
        return (
          <div className={styles.card} onClick={() => window.open(item.link)} key={item.title}>
            <div className={styles.cardT}>
              <img src={item.logo} alt="" className={styles.logo} />
              <span className={styles.title}>{item.title}</span>
            </div>
            <div className={styles.subT}>
              {item.description}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExternalStation