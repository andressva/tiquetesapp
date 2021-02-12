import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import MainSection from '../components/MainSection/MainSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tiquetes.com</title>
        <link rel="icon" href="images/t.ico" />
      </Head>
      <body>
        <Header/>
        <Banner/>
        <MainSection/>
      </body>
    </div>
  )
}
