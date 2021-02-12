import styles from './Searcher.module.css'
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';

export default function Searcher() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className={styles.searcher} id="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label} htmlFor="criteria" >busca por codigo de reserva:</label>
      <div className={styles.inputWrap}>
          <input className={styles.input} name="criteria" ref={register({ required: true })} />
          <button className={styles.btn} type="submit" form="searchForm" ><FaSearch /></button>
      </div>
      {errors.criteria && <span className={styles.error}>Este campo es requerido</span>}
    </form>
  )
}
