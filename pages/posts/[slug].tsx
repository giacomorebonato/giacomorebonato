import { Box, Image, Link as ChakraLink, Text } from '@chakra-ui/react'
import 'dracula-prism/dist/css/dracula-prism.css'
import { GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Prism from 'prismjs'
import React, { useEffect } from 'react'
import { ChakraMdx, Chapter, Container } from '../../components'
import { getAllPosts, getPostByFilename } from '../../lib/post-helpers'

type Post = {
  title: string
  date: string
  featuredImage: any
  featuredImageDescription: string
  photoBy: string
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

type PostTemplateProps = {
  post: Post
}

const PostTemplate: React.FC<PostTemplateProps> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Container>
      <Head>
        <title>{post.title} | Giacomo Rebonato</title>
      </Head>

      <Chapter>{post.title}</Chapter>
      <Chapter as='h3' fontSize='sm'>
        {post.date}
      </Chapter>
      <Image
        src={`/images/${post.featuredImage}`}
        alt={post.featuredImageDescription}
      />
      <Text as='span' fontSize='sm' mb='4' mt='1' variant='text'>
        Photo by{' '}
        <ChakraLink
          fontWeight='semibold'
          href={`https://unsplash.com/@${post.photoBy}?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}
        >
          {post.photoBy}
        </ChakraLink>{' '}
        on{' '}
        <ChakraLink
          fontWeight='semibold'
          href='https://unsplash.com/s/photos/house-family?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
        >
          Unsplash
        </ChakraLink>
      </Text>
      <Box as='section'>
        <ChakraMdx mdxSource={post.mdxSource} />
      </Box>
    </Container>
  )
}

export default PostTemplate

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostByFilename(params!.slug as string, [
    'title',
    'date',
    'featuredImage',
    'featuredImageDescription',
    'content',
    'photoBy'
  ])
  const mdxSource = await serialize(post.content || '')

  return {
    props: {
      post: {
        ...post,
        mdxSource
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
