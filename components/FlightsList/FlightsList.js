import styles from './FlightsList.module.css'
import Image from 'next/image'
import { useAppContext } from '../../Provider/context'

export default function FlightsList() {
  const context = useAppContext();
  const { filterFlights, loading } = context;
  return (
    <div className={styles.section}>
      {console.log(filterFlights)}
      {filterFlights && !loading && filterFlights.map(f => {
        return <FlightItem key={f.numero_vuelo} item={f} />
      })}
    </div>
  )
}

const FlightItem = ({item}) => {
  return (
    <div className={styles.item}> 
        <div className={styles.column}>
          <div className={styles.field}>
            <p>Aerolinea</p>
            <Image
              src={`/images/${item.aerolinea_validadora}.png`}
              alt={item.aerolinea_validadora}
              width={138}
              height={33}
            />
          </div>
          <div className={styles.field}>
            <p>Salida</p>
            <p>{item.FechaSalida}</p>
          </div>
          <div className={styles.field}>
            <p>Hora</p>
            <p>{item.HoraSalida}</p>
          </div>
          <div className={styles.field}>
            <p>No. de vuelo</p>
            <p>{item.numero_vuelo}</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.field}>
              <p>Llegada</p>
              <p>{item.FechaLLegada}</p>
          </div>
          <div className={styles.field}>
            <p>Hora</p>
            <p>{item.HoraLLegada}</p>
          </div>
          <div className={styles.field}>
            <p>Ruta</p>
            <p>{`${item.origen} - ${item.destino}`}</p>
          </div>
        </div>
      </div>
  )
}


