import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <Image
        src="/images/logo.svg"
        alt="tiquetes.com"
        width={200}
        height={50}
      />
    </div>
    </div>
  )
}
