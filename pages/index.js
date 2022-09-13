import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lams Pizza Co. </title>
        <meta name="description" content="Best pizza shop in Singapore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}