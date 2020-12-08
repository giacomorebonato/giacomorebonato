import React from 'react'
import Head from 'next/head'
import 'twin.macro'

import { Container } from '../../components'
import { getAllPosts } from '../../lib/post-helpers'

type PostsProps = { posts: any }

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Posts | Giacomo Rebonato</title>
      </Head>

      <h2 tw="text-xl font-bold mb-4">Posts</h2>
      <section tw="flex flex-col">
        {posts.map((post: any) => {
          return (
            <a
              href={`/posts/${post.slug}`}
              tw="text-blue-700 hover:text-blue-800 mb-4 block"
            >
              <div key={`post-${post.date}`}>
                <span tw="text-sm">{post.date}</span>
                <h3 tw="text-lg font-bold">{post.title}</h3>
                <p>{post.spoiler}</p>
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
      posts
    }
  }
}

export default Posts
