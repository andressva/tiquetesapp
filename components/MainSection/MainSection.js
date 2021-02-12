import styles from './MainSection.module.css'
import { useForm } from "react-hook-form";

import Searcher from '../Searcher/Searcher'
import FlightsList from '../FlightsList/FlightsList'

export default function MainSectrion() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.leftColumn}>
          <h2 className={styles.labelInfo}>Información<br/>de vuelos</h2>
        </div>
        <div className={styles.rightColumn}>
          <Searcher/>
          <FlightsList />
        </div>
      </div>
    </div>
  )
}
