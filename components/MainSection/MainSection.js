import styles from './MainSection.module.css'

export default function MainSectrion() {
  return (
    <div className={styles.section}>
      <div className={styles.leftColumn}>
        <h2 className={styles.labelInfo}>Información<br/>de vuelos</h2>
      </div>
      <div className={styles.rightColumn}>
        <div>
          <form>

          </form>
        </div>
      </div>
    </div>
  )
}
