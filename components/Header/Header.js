import styles from './Header.module.css'
import Image from 'next/image'

import Container from '../Container/Container'

export default function Header() {
  return (
    <Container>
    <div className={styles.header}>
      <Image
        src="/images/logo.svg"
        alt="tiquetes.com"
        width={200}
        height={50}
      />
    </div>
    </Container>
  )
}
