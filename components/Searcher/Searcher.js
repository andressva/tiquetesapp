import styles from './Searcher.module.css'
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';

import { useAppContext } from '../../Provider/context'

export default function Searcher() {
  const context = useAppContext();
  const { searchFlights } = context;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    searchFlights(data.criteria.trim());
  }

  return (
    <form className={styles.searcher} id="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label} htmlFor="criteria" >busca por codigo de reserva:</label>
      <div className={styles.inputWrap}>
          <input className={styles.input} maxLength="10" name="criteria" ref={register({ required: true })} />
          <button className={styles.btn} type="submit" form="searchForm" ><FaSearch /></button>
      </div>
      {errors.criteria && <span className={styles.error}>Este campo es requerido</span>}
    </form>
  )
}
