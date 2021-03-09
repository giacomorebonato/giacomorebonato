import NextLink from 'next/link'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Toggle } from './Toggle'
import { useDarkMode } from './useDarkMode'

export const Container: React.FC<any> = ({ css, children }) => {
  const [isDark, setDarkMode] = useDarkMode()

  return (
    <main
      tw='relative container mx-auto rounded-sm flex font-sans flex-col p-4 mb-4 lg:border-l lg:border-r border-gray-600 min-h-screen'
      style={{ maxWidth: '42rem', margin: '0 auto' }}
    >
      <GlobalStyles />
      <header tw='mb-4'>
        <Title>
          <NextLink href='/'>Giacomo Rebonato</NextLink>
        </Title>
        <Toggle
          checked={isDark}
          name='dark-mode'
          text='Dark mode'
          onChange={(e) => {
            setDarkMode(e.target.checked)
          }}
        />
      </header>
      {children}
    </main>
  )
}

interface BasicUIProps {
  className?: string
  tw?: string
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

export const Text: React.FC<BasicUIProps> = ({ children }) => (
  <span tw='text-gray-800 dark:text-red-100'>{children}</span>
)

export const Title: React.FC = ({ children }) => (
  <h1 tw='text-2xl font-bold text-gray-800 dark:text-red-400 mb-2'>
    {children}
  </h1>
)

export const Chapter: React.FC = ({ children }) => (
  <h2 tw='font-semibold mt-4 text-xl mb-1 dark:text-red-300'>{children}</h2>
)

export const P: React.FC<BasicUIProps> = ({
  children,
  dangerouslySetInnerHTML,
}) => {
  return dangerouslySetInnerHTML ? (
    <div
      tw='text-lg text-gray-800 dark:text-red-50 mb-2'
      dangerouslySetInnerHTML={{
        __html: dangerouslySetInnerHTML.__html,
      }}
    />
  ) : (
    <p tw='text-lg text-gray-800 dark:text-red-50 mb-2'>{children}</p>
  )
}

interface LinkProps {
  className?: string
  external?: boolean
  href: string
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  href,
  external,
}) => (
  <a
    tw='text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500'
    className={className}
    target={external && 'blank'}
    href={href}
    rel='noopener noreferrer'
  >
    {children}
  </a>
)
