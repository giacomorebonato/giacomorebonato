import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import 'twin.macro'
import { Chapter, Container, Link, P, Text } from '../components'
import { Contacts } from '../components/Contacts'
import { ForkMe } from '../components/ForkMe'
import { Hobbies } from '../components/Hobbies'
import { Skills } from '../components/Skills'

const Index: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home | Giacomo Rebonato</title>
        <meta name='description' content='Information about Giacomo Rebonato' />
      </Head>
      <ForkMe />
      <div tw='text-center'>
        <motion.img
          drag
          dragElastic={0.8}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          whileDrag={{ rotate: 360 }}
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
        <span tw='line-through'>based in Dublin Ireland</span> recently moved
        back to{' '}
        <Link href='https://en.wikipedia.org/wiki/Verona'>Verona (Italy)</Link>
        , but planning to visit Ireland often.
        <br />
        Passionate about:
      </P>
      <Skills />
      <Chapter>Posts</Chapter>
      <P>
        <Link href='/posts'>I am writing down here some thoughts.</Link>
        <br />
        Hoping to find them meaningful when I read them again.
      </P>
      <Chapter>Other things</Chapter>
      <Hobbies />
      <Contacts />
      <hr tw='mt-2 mb-4' />
      <div tw='flex mb-2'>
        <Text>Song of the moment:&nbsp;</Text>
        <Link href='https://songwhip.com/myd/moving-men' external>
          Moving Men by Myd {'&'} Mac DeMarco
        </Link>
      </div>

      <hr tw='mt-2 mb-4' />
      <Link
        tw='flex items-center'
        href='https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.giacomorebonato.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext'
        external
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
