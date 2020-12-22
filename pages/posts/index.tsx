import React from 'react'
import Head from 'next/head'
import 'twin.macro'

import { Chapter, Container } from '../../components'
import { getAllPosts } from '../../lib/post-helpers'

type PostsProps = { posts: any }

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Posts | Giacomo Rebonato</title>
      </Head>

      <Chapter>Posts</Chapter>
      <section tw='flex flex-col'>
        {posts.map((post: any) => {
          return (
            <a
              href={`/posts/${post.slug}`}
              key={post.slug}
              tw='hover:bg-red-100 hover:bg-opacity-25 p-2'
            >
              <div key={`post-${post.date}`} tw='mb-4 block'>
                <span tw='text-sm text-blue-400'>{post.date}</span>
                <h3 tw='text-lg font-bold text-blue-300'>{post.title}</h3>
                <p tw='text-blue-200'>{post.spoiler}</p>
              </div>
            </a>
          )
        })}
      </section>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(['slug', 'date', 'title', 'spoiler'])

  return {
    props: {
      posts,
    },
  }
}

export default Posts
