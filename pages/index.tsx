import type { NextPage } from 'next'
import {useQuery} from '@apollo/client'
import Head from 'next/head'
import Image from 'next/image'
import Postbox from '../components/Postbox'
import Feed from '../components/Feed'
import SubredditRow from '../components/SubredditRow'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'
const Home: NextPage = () => {
  const {data} = useQuery(GET_SUBREDDITS_WITH_LIMIT,{
    variables:{
      limit:10
    }
    
  })
  const subreddits:Subreddit[]= data?.getSubredditListLimit
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Postbox/>
      <div className="flex">
        <Feed />
        <div className="sticky mt-6 mx-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline"> 
          <p className="text-md md-1 p-4 pb-3 font-bold">Top Communities</p>
          <div> {subreddits?.map((subreddit,i) =>(
            <SubredditRow key={subreddit.id} topic={subreddit.topic} index={i}  />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
