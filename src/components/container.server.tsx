import NextLink from 'next/link'
import React from 'react'
import { Title } from '.'
import { ColorModeSwitcher } from './color-mode-switcher.client'

export const Container: React.FC<any> = ({ children, className }) => {
  return (
    <div className={`${className} container mx-auto max-w-lg`}>
      <main className='relative items-stretch pb-8 grid grid-cols-1'>
        <div className='mb-4 pt-4 w-full items-baseline flex flex-row p-2'>
          <Title>
            <NextLink href='/' passHref>
              <a>
                <span>Giacomo</span>{' '}
                <span className='hidden sm:inline'>Rebonato</span>
              </a>
            </NextLink>
          </Title>
          <ColorModeSwitcher />
        </div>
        <div>{children}</div>
      </main>
    </div>
  )
}
