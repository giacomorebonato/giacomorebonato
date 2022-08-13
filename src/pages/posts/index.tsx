import Head from 'next/head'
import React from 'react'
import { Chapter, Container, MyLink, Title } from '../../components'
import { getAllPosts } from '../../lib/post-helpers'
import { Post } from '../../types/post'

type PostsProps = { posts: (Omit<Post, 'date'> & { date: string })[] }

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Posts | Giacomo Rebonato</title>
      </Head>

      <Chapter>Posts</Chapter>

      <div className='grid grid-cols-1 gap-2'>
        {posts.map((post) => {
          return (
            <MyLink
              className='border border-transparent rounded-md p-2 hover:border-black dark:hover:border-pink-100 no-underline'
              href={`/posts/${post.slug}`}
              key={`post-${post.date}`}
            >
              <div className='mb-4'>
                <Chapter>{post.date}</Chapter>
                <Title>{post.title}</Title>
                <span>{post.spoiler}</span>
              </div>
            </MyLink>
          )
        })}
      </div>
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
