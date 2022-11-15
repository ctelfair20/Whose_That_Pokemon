import Head from 'next/head'
import Silluoette from '../components/SilluoetteImage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?!</title>
      </Head>

      <body>
        <Silluoette />
      </body>
    </div>
  )
}
