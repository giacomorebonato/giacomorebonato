import React from 'react'

const Title: React.FC = ({ children }) => (
  <h1 className='text-xl font-bold text-gray-800'>{children}</h1>
)

const Chapter: React.FC = ({ children }) => (
  <h2 className='font-semibold mt-4 text-xl mb-1'>{children}</h2>
)

const P: React.FC = ({ children }) => (
  <p className='text-lg text-gray-800 mb-2'>{children}</p>
)

interface LinkProps {
  href: string
}

const Link: React.FC<LinkProps> = ({ children, href }) => (
  <a
    className='text-blue-700 hover:text-blue-800'
    target='_blank'
    href={href}
    rel='noopener noreferrer'
  >
    {children}
  </a>
)

const Index: React.FC = () => {
  return (
    <div
      className='flex font-sans flex-col p-4 border-gray-600 border-l border-r'
      style={{ margin: '0 auto', maxWidth: '42rem' }}
    >
      <header>
        <Title>Giacomo Rebonato</Title>
        <div className='flex justify-center'>
          <img
            className='border border-4 rounded-full'
            src='/images/avatar.jpg'
            alt='Sunset in the mountains'
            width='250'
          />
        </div>
      </header>
      <Chapter>Who am I?</Chapter>
      <P>
        I am a programmer and a musician based in Dublin Ireland.
        <br />
        Passionate about:
      </P>
      <ul className='list-disc list-inside'>
        <li>ReactJS</li>
        <li>A11Y</li>
        <li>D3</li>
        <li>NodeJS</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>Testing</li>
      </ul>
      <Chapter>Other things</Chapter>
      <ul className='list-disc list-inside'>
        <li>I like movies</li>
        <li>Playing music</li>
        <li>People</li>
      </ul>
      <Chapter>Contacts</Chapter>
      <ul className='list-disc list-inside'>
        <li>
          <Link href='https://github.com/giacomorebonato/'>Github</Link>
        </li>
        <li>
          <Link href='https://twitter.com/giacomorebonato'>Twitter</Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/giacomorebonato/'>
            Linkedin
          </Link>
        </li>
        <li>
          <Link href='mailto:grebonato@outlook.ie'>Email</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index
