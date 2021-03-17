import NextLink from 'next/link'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Title } from '.'
import { Toggle } from './Toggle'
import { useDarkMode } from './useDarkMode'

export const Container: React.FC<any> = ({ css, children }) => {
  const [isDark, setDarkMode] = useDarkMode()

  return (
    <main
      tw='relative container mx-auto rounded-sm flex font-sans flex-col p-4 mb-4 lg:border-l lg:border-r border-gray-600 min-h-screen'
      style={{ maxWidth: '768px', margin: '0 auto' }}
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
