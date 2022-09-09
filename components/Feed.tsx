/* eslint-disable no-undef */
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'
import Post from '../components/Post'

interface FeedProps {
  topic?: string
}

export default function Feed({ topic }: FeedProps) {
  const { data } = useQuery(!topic ? GET_ALL_POSTS : GET_ALL_POSTS_BY_TOPIC, {
    variables: {
      topic:topic
    },
  })

  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic

  return (
    <div className="w-full mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}