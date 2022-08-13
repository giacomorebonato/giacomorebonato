/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import React from 'react'
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
  const title = `${post.title} | Giacomo Rebonato`.toString()
  return (
    <Container className='max-w-xl'>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='title' />
      </Head>

      <Chapter>{post.title}</Chapter>
      <Chapter as='h3' className='text-sm'>
        {post.date}
      </Chapter>
      <img
        src={`/images/${post.featuredImage}`}
        alt={post.featuredImageDescription}
      />
      <span className='text-sm mb-4 mt-1'>
        Photo by{' '}
        <a
          className='font-semibold'
          target='_blank'
          href={`https://unsplash.com/@${post.photoBy}?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}
          rel='noreferrer'
        >
          {post.photoBy}
        </a>{' '}
        on{' '}
        <a
          className='font-semibold'
          target='_blank'
          href='https://unsplash.com/s/photos/house-family?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
          rel='noreferrer'
        >
          Unsplash
        </a>
      </span>
      <section>
        <ChakraMdx mdxSource={post.mdxSource} />
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
