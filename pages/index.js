import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lams Pizza Co. </title>
        <meta name="description" content="Best pizza shop in Singapore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/img/logo.png" width={200} height={200} alt="logo" />
    </div>
  )
}