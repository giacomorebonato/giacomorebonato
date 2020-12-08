import React from 'react'
import Head from 'next/head'
import { Container, Title } from '../../components'
import markdownToHtml from '../../lib/markdown-to-html'
import { getAllPosts, getPostBySlug } from '../../lib/post-helpers'
import 'twin.macro'

type Post = {
  title: string
  date: string
  featuredImage: any
  featuredImageDescription: string
  content: string
}

type PostTemplateProps = {
  post: Post
}

const PostTemplate: React.FC<PostTemplateProps> = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title} | Giacomo Rebonato</title>
      </Head>

      <meta name="description" content="Information about Giacomo Rebonato" />
      <Title>{post.title}</Title>
      <h2 tw="mb-4">{post.date}</h2>
      <img
        src={`/images/${post.featuredImage}`}
        alt={post.featuredImageDescription}
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="markdown"
      />
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
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
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
