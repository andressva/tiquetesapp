import styles from './FlightsList.module.css'

export default function FlightsList() {

  return (
    <div className={styles.section}>

      <div className={styles.item}>
        <div className={styles.column}>
          <div className={styles.field}>
            <p>Aerolinea</p>
            <p>AVIANCA</p>
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
