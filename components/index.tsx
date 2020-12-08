import React from 'react'
import { GlobalStyles } from 'twin.macro'
import NextLink from 'next/link'
import { markdownStyles } from '../lib/markdown-styles'

export const Container: React.FC<any> = ({ css, children }) => (
  <main
    css={[markdownStyles]}
    tw='relative container mx-auto rounded-sm flex font-sans flex-col p-4 mb-4 lg:border-b lg:border-l lg:border-r border-gray-600'
    style={{ maxWidth: '42rem' }}
  >
    <GlobalStyles />
    <header>
      <Title>
        <NextLink href='/'>Giacomo Rebonato</NextLink>
      </Title>
    </header>
    {children}
  </main>
)

export const Title: React.FC = ({ children }) => (
  <h1 tw='text-2xl font-bold text-gray-800 mb-2'>{children}</h1>
)

export const Chapter: React.FC = ({ children }) => (
  <h2 tw='font-semibold mt-4 text-xl mb-1'>{children}</h2>
)

export const P: React.FC = ({ children }) => (
  <p tw='text-lg text-gray-800 mb-2'>{children}</p>
)

interface LinkProps {
  className?: string
  href: string
}

export const Link: React.FC<LinkProps> = ({ children, className, href }) => (
  <a
    tw='text-blue-700 hover:text-blue-800'
    className={className}
    target='_blank'
    href={href}
    rel='noopener noreferrer'
  >
    {children}
  </a>
)
