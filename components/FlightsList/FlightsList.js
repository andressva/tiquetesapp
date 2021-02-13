import styles from './FlightsList.module.css'
import Image from 'next/image'

export default function FlightsList() {
  const aero = 'AV'
  return (
    <div className={styles.section}>

      <div className={styles.item}>
        <div className={styles.column}>
          <div className={styles.field}>
            <p>Aerolinea</p>
            <Image
              src={`/images/${aero}.png`}
              alt="Picture of the author"
              width={138}
              height={33}
            />
          </div>
          <div className={styles.field}>
            <p>Salida</p>
            <p>20-09-18</p>
          </div>
          <div className={styles.field}>
            <p>Hora</p>
            <p>12:34am</p>
          </div>
          <div className={styles.field}>
            <p>No. de vuelo</p>
            <p>8507</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.field}>
              <p>Llegada</p>
              <p>30-09-23</p>
          </div>
          <div className={styles.field}>
            <p>Hora</p>
            <p>15:34</p>
          </div>
          <div className={styles.field}>
            <p>Ruta</p>
            <p>Bogota - Cali</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
