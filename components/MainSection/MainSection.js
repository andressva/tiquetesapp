import styles from './MainSection.module.css'
import { useForm } from "react-hook-form";

import Searcher from '../Searcher/Searcher'
import FlightsList from '../FlightsList/FlightsList'
import Container from '../Container/Container'

export default function MainSectrion() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Container custom={{ flex: '1' }}>
      <div className={styles.section}>
        <div className={styles.leftColumn}>
          <h2 className={styles.labelInfo}>Información<br/>de vuelos</h2>
          <div className={styles.bgContainer}></div>
        </div>
        <div className={styles.rightColumn}>
          <Searcher/>
          <FlightsList />
        </div>
      </div>
    </Container>
  )
}
