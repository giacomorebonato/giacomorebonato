import {
  Box,
  Text as ChakraText,
  useColorMode,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Post } from '../../@types/post'
import { Chapter, Container, MyLink, Title } from '../../components'
import { getAllPosts } from '../../lib/post-helpers'

type PostsProps = { posts: Post[] }

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const textColor = useColorModeValue('black', 'pink.100')

  return (
    <Container>
      <Head>
        <title>Posts | Giacomo Rebonato</title>
      </Head>

      <Chapter>Posts</Chapter>

      {posts.map((post) => {
        return (
          <MyLink
            href={`/posts/${post.slug}`}
            key={`post-${post.date}`}
            border='1px'
            borderColor='transparent'
            borderRadius='md'
            p='2'
            _hover={{
              border: '1px',
              borderColor: textColor
            }}
            variant='primary'
          >
            <Box mb='4'>
              <Chapter>{post.date}</Chapter>
              <Title>{post.title}</Title>
              <ChakraText color={textColor}>{post.spoiler}</ChakraText>
            </Box>
          </MyLink>
        )
      })}
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
