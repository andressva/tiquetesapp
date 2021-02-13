import styles from './Spinner.module.css'

export default function Spinner({show}) {
  return (
    <div style={{display: !show && 'none' }} className={styles.loader}>Cargando...</div>
  )
}
