import React from 'react'
import { Container, Title, Chapter, Link, P } from '../components'
import { Seo } from '../components/Seo'
import { ForkMe } from '../components/ForkMe'
import lightHouseLogo from '../lighthouse-logo.svg'

const Index: React.FC = () => {
  return (
    <Container>
      <Seo title='Giacomo Rebonato' />
      <ForkMe />
      <header>
        <Title>Giacomo Rebonato</Title>
        <div className='text-center'>
          <img
            className='border border-4 rounded-full inline'
            src={require('../avatar.jpg')}
            alt='A photograph of Giacomo Rebonato'
            object-fit='contain'
            style={{ maxWidth: '250px' }}
          />
        </div>
      </header>
      <Chapter>Who am I?</Chapter>
      <P>
        I am a programmer and a musician based in Dublin Ireland.
        <br />
        Passionate about:
      </P>
      <ul className='list-disc list-inside leading-normal'>
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
      <ul className='list-disc list-inside leading-loose'>
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
          Email -{` `}
          <Link href='mailto:grebonato@outlook.ie'>grebonato@outlook.ie</Link>
        </li>
      </ul>
      <hr className='mt-2 mb-4' />
      <Link
        className='flex items-center'
        href='https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.giacomorebonato.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext'
      >
        <img
          className='w-16 mr-2'
          src={lightHouseLogo}
          alt='Test this page on Google Lighthouse'
        />
        <span>Test this page on Google Lighthouse</span>
      </Link>
    </Container>
  )
}

export default Index
