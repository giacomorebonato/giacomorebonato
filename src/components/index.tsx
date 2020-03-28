import React from 'react'

export const Container: React.FC = ({ children }) => (
  <div
    className='container mx-auto rounded-sm flex font-sans flex-col p-4 border-gray-600 border mt-1 mb-1'
    style={{ maxWidth: '42rem' }}
  >
    {children}
  </div>
)

export const Title: React.FC = ({ children }) => (
  <h1 className='text-xl font-bold text-gray-800 mb-2'>{children}</h1>
)

export const Chapter: React.FC = ({ children }) => (
  <h2 className='font-semibold mt-4 text-xl mb-1'>{children}</h2>
)

export const P: React.FC = ({ children }) => (
  <p className='text-lg text-gray-800 mb-2'>{children}</p>
)

interface LinkProps {
  href: string
}

export const Link: React.FC<LinkProps> = ({ children, href }) => (
  <a
    className='text-blue-700 hover:text-blue-800'
    target='_blank'
    href={href}
    rel='noopener noreferrer'
  >
    {children}
  </a>
)
