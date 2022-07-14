import Image from 'next/image'
import {useRouter} from 'next/router'

import Layout from '../../components/layout'
import styles from '../../styles/page.module.css'
import pages, {Pages} from '../page-list'

const Page = () => {
  const router = useRouter()
  const { page } = router.query
  const { description, src, alt } = pages[page as Pages]

  return(
    <Layout>
      <Image src={src} alt={alt} width={1920} height={1080} />
      {description && <p className={styles.description}>{description}</p>}
    </Layout>
  )
}

export default Page
