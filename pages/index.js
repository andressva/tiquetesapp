import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import MainSection from '../components/MainSection/MainSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tiquetes.com</title>
        <link rel="icon" href="images/t.ico" />
      </Head>
      <Header/>
      <div className={styles.content}>
        <Banner/>
        <MainSection/>
      </div>
      <Footer/>
    </div>
  )
}
