import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import React from 'react'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Chapter, MyLink, P } from '.'

type ChakraMdxProps = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

const ClientSyntaxHighlighter = dynamic(
  () =>
    import('react-syntax-highlighter').then(
      ({ PrismAsyncLight }) => PrismAsyncLight
    ),
  { ssr: false }
)

export const ChakraMdx: React.FC<ChakraMdxProps> = ({ mdxSource }) => {
  return (
    <MDXRemote
      {...mdxSource}
      components={{
        code: (props: any) => {
          const language = props.className
            ? props.className.replace(/language-/, '')
            : ''

          return (
            <ClientSyntaxHighlighter
              {...props}
              style={dracula}
              language={language}
            />
          )
        },
        a: MyLink,
        h2: Chapter,
        ul: (props: any) => (
          <ul {...props} className='text-lg mt-2 mb-2 list-none' />
        ),
        p: (props: any) => <P {...props} className='prose mt-2' />
      }}
    />
  )
}
