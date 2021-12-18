import { Image, Text } from '@chakra-ui/react'
import 'dracula-prism/dist/css/dracula-prism.min.css'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import React, { useEffect } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Chapter, Container } from '../../components'
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
      <Text as='span' fontSize='sm' mb='4' mt='1' color='text'>
        Photo by{' '}
        <a
          href={`https://unsplash.com/@${post.photoBy}?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}
        >
          {post.photoBy}
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/house-family?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Unsplash
        </a>
      </Text>
      <section>
        <MDXRemote {...post.mdxSource} components={{ SyntaxHighlighter }} />
      </section>
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
