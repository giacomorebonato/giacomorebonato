import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import 'twin.macro'
import { Chapter, Container, Text, Title } from '../../components'
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
            <NextLink
              href={`/posts/${post.slug}`}
              passHref
              key={`post-${post.date}`}
            >
              <a
                key={post.slug}
                tw='dark:hover:bg-blue-50 hover:bg-red-400 hover:bg-opacity-10 dark:hover:bg-opacity-10 p-2 rounded'
              >
                <div tw='mb-4 block'>
                  <Chapter tw='text-sm text-blue-400'>{post.date}</Chapter>
                  <Title tw='text-lg font-bold text-blue-300'>
                    {post.title}
                  </Title>
                  <Text tw='text-blue-200'>{post.spoiler}</Text>
                </div>
              </a>
            </NextLink>
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
