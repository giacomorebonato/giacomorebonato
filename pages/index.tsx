import React from 'react'
import Head from 'next/head'
import 'twin.macro'

import { Container, Chapter, Link, P } from '../components'
import { ForkMe } from '../components/ForkMe'

const Index: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home | Giacomo Rebonato</title>
        <meta name="description" content="Information about Giacomo Rebonato" />
      </Head>
      <ForkMe />
      <div tw='text-center'>
        <img
          tw='border-4 rounded-full inline'
          src='avatar.jpg'
          alt='A photograph of Giacomo Rebonato'
          object-fit='contain'
          style={{ maxWidth: '250px' }}
        />
      </div>
      <Chapter>Who am I?</Chapter>
      <P>
        I am a programmer and a musician{' '}
        <span tw='line-through'>based in Dublin Ireland</span> recently
        moved back to{' '}
        <Link href='https://en.wikipedia.org/wiki/Verona'>
          Verona (Italy)
        </Link>
        , but planning to visit Ireland often.
        <br />
        Passionate about:
      </P>
      <ul tw='list-disc list-inside leading-normal'>
        <li>ReactJS</li>
        <li>Serverless</li>
        <li>NodeJS</li>
        <li>A11Y</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>Testing</li>
      </ul>
      <Chapter>Posts</Chapter>
      <p>
        <a href='/posts' tw='text-blue-700 hover:text-blue-800'>
          I am writing down here some thoughts.
        </a>
        <br />
        Hoping to find them meaningful when I read them again.
      </p>
      <Chapter>Other things</Chapter>
      <ul tw='list-disc list-inside'>
        <li>
          <span role='img' aria-label='pop corns'>
            🍿
          </span>{' '}
          I like movies
        </li>
        <li>
          <span role='img' aria-label='guitar'>
            🎸
          </span>{' '}
          Playing music
        </li>
        <li>
          <span role='img' aria-label='partying with people'>
            🥳
          </span>{' '}
          People
        </li>
      </ul>
      <Chapter>Contacts</Chapter>
      <ul tw='list-disc list-inside leading-loose'>
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
      <hr tw='mt-2 mb-4' />
      <div tw='flex'>
        <span>Song of the moment:&nbsp;</span>
        <Link href='https://songwhip.com/myd/moving-men'>
          Moving Men by Myd {'&'} Mac DeMarco
        </Link>
      </div>

      <hr tw='mt-2 mb-4' />
      <Link
        tw='flex items-center'
        href='https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.giacomorebonato.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext'
      >
        <img
          tw='w-16 mr-2'
          src='./lighthouse-logo.svg'
          alt='Test this page on Google Lighthouse'
        />
        <span>Test this page on Google Lighthouse</span>
      </Link>
    </Container>
  )
}

export default Index
