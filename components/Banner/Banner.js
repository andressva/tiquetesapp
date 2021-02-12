import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2 className={styles.slogan}>Encuentra tus vuelos<br/>fácilmente!</h2>
      </div>
    </div>
  )
}
