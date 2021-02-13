import styles from './Banner.module.css'
import Container from '../Container/Container'

export default function Banner() {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.render}>
        <h2 className={styles.slogan}>Encuentra tus vuelos<br/>fácilmente!</h2>
        </div>
      </div>
    </Container>
  )
}
