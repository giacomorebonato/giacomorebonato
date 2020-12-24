import React, { useEffect } from 'react'
import Head from 'next/head'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { Chapter, Container, P } from '../../components'
import markdownToHtml from '../../lib/markdown-to-html'
import { getAllPosts, getPostBySlug } from '../../lib/post-helpers'
import 'twin.macro'
import { markdownStyles } from '../../lib/markdown-styles'

type Post = {
  title: string
  date: string
  featuredImage: any
  featuredImageDescription: string
  content: string
  photoBy: string
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

      <meta name='description' content='Information about Giacomo Rebonato' />
      <Chapter>{post.title}</Chapter>
      <h2 tw='mb-4 text-gray-800 dark:text-red-100'>{post.date}</h2>
      <img
        src={`/images/${post.featuredImage}`}
        alt={post.featuredImageDescription}
      />
      <span tw='text-sm mb-4 mt-1 text-gray-800 dark:text-red-300'>
        Photo by{' '}
        <a
          href={`https://unsplash.com/@${post.photoBy}?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}
        >
          Ralph Kelly
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/house-family?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Unsplash
        </a>
      </span>
      <section css={[markdownStyles]}>
        <P
          dangerouslySetInnerHTML={{ __html: post.content }}
          className='markdown'
        />
      </section>
    </Container>
  )
}

export default PostTemplate

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'featuredImage',
    'featuredImageDescription',
    'content',
    'photoBy',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
