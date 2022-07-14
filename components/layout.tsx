import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router'

import Nav from './nav'

import styles from '../styles/Home.module.css'
import pages, {Pages} from '../pages/page-list'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const { page } = router.query
  const { title } = pages[page as Pages]

  return (
    <div className={styles.container}>
      <Head>
        <title>The Last American Road Trip{title === Pages.Cover ? '' : ` - ${title}`}</title>
        <meta name="description" content="An exploration of the post-collapse United States" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Overpass&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title === Pages.Cover ? 'The Last American Road Trip' : title}
        </h1>

        {children}

        <Nav />
      </main>
    </div>
  )
}

export default Layout
