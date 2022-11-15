import Head from 'next/head'
import BackgroundImage from '../components/BackgroundImage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?!</title>
      </Head>

      <main>
        <BackgroundImage />
      </main>
    </div>
  )
}
