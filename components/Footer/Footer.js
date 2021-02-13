import styles from './Footer.module.css'

import Container from '../Container/Container'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <span className={styles.footerMade}>made by <a target="_blank" href="https://andressva.github.io/">Andres Vergel</a></span>
        <span className={styles.separator}>|</span>
        <span className={styles.footerEmail}>amvergel@hotmail.com</span>
      </footer>
  )
}
