import { Link as ChakraLink, ListItem, UnorderedList } from '@chakra-ui/react'
import 'dracula-prism/dist/css/dracula-prism.css'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'
import { Chapter, P } from './'

type ChakraMdxProps = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const ChakraMdx: React.FC<ChakraMdxProps> = ({ mdxSource }) => (
  <MDXRemote
    {...mdxSource}
    components={{
      a: ChakraLink,
      h2: Chapter,
      ul: (props: any) => (
        <UnorderedList {...props} mt='2' mb='2' fontSize='lg' />
      ),
      li: ListItem,
      p: P
    }}
  />
)
