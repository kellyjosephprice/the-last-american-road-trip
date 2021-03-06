import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/nav'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Last American Road Trip</title>
        <meta name="description" content="An exploration of the post-collapse United States" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Overpass&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Last American Road Trip
        </h1>

        <Image src="/parking-lot.png" alt="A Parking lot" width={1920} height={1080} />

        <Nav current='cover' />
      </main>
    </div>
  )
}

export default Home
