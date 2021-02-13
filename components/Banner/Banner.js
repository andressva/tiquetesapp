import styles from './Banner.module.css'
import Container from '../Container/Container'

export default function Banner() {
  return (
    <Container bgColor="aliceblue">
      <div className={styles.banner}>
        <h2 className={styles.slogan}>Encuentra tus vuelos<br/>fácilmente!</h2>
      </div>
    </Container>
  )
}
