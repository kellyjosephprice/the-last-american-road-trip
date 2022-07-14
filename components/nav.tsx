import cluster from 'cluster'
import Link from 'next/link'
import {useRouter} from 'next/router'

import { order, Pages } from '../pages/page-list'

const Nav = () => {
  const router = useRouter()
  const { page = 'cover' } = router.query
  const idx = order.indexOf(page as Pages)

  let back
  if (idx > 1) {
    back= `/page/${order[idx - 1]}`
  } else if (idx === 1) {
    back = '/'
  }

  const next = idx < order.length - 1 && `/page/${order[idx + 1]}`

  console.log(JSON.stringify({ page, idx, back, next }, null, 2))
  return <nav>
    {back && <Link href={back}><a>back</a></Link>}
    {next && <Link href={next}><a>next</a></Link>}
  </nav>
}

export default Nav
