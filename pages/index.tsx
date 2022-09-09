import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Postbox from '../components/Postbox'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Postbox/>
      <div className="flex">
        <Feed />
      </div>
    </div>
  )
}

export default Home
