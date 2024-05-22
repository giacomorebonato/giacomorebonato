import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { Chapter, Container, MyLink, MySection, P } from '../components'
import { Contacts } from '../components/contacts'
import { ForkMe } from '../components/fork-me'
import { Hobbies } from '../components/hobbies'
import { Skills } from '../components/skills'

const Index: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home | Giacomo Rebonato</title>
        <meta name='description' content='Information about Giacomo Rebonato' />
      </Head>
      <ForkMe />
      <div className='text-center'>
        <motion.img
          style={{ maxWidth: '250px' }}
          className='border-4 rounded-b-full inline border-pink-600 object-contain'
          drag
          width='250'
          height='250'
          dragElastic={0.8}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          whileDrag={{ rotate: 360 }}
          src='avatar.webp'
          alt='A photograph of Giacomo Rebonato'
        />
      </div>

      <MySection title='Who am I?'>
        <P>
          I am a programmer and a musician{' '}
          based between Dublin (Ireland) and {' '}
          Bologna (Italy)
          .
          <br />
          Passionate about:
        </P>
      </MySection>

      <MySection>
        <Skills />

        <br />
        Checkout <a href='https://www.fastrat.dev' target='_blank' className='link link-secondary link-hover'>my custom Fastify + React starter</a>.
      </MySection>

      <MySection title='Posts'>
        <P>
          <MyLink href='/posts'>I am writing down here some thoughts.</MyLink>
          <br />
          Hoping to find them meaningful when I read them again.
        </P>
      </MySection>

      <div>
        <Chapter>Other things</Chapter>
        <Hobbies />
      </div>

      <MySection title='Contacts'>
        <Contacts />
      </MySection>

      <div className='mb-2 flex justify-center border-t border-b border-gray-400 pt-2 pb-2'>
        <span>Song of the moment:&nbsp;</span>
        <a target='_blank' href='https://songwhip.com/trent-reznor-and-atticus-ross/pull-over' className='link link-secondary link-hover'>
          Pull Over by Trent Reznor and Atticus Ross
        </a>
      </div>

      <a
        className='mb-4 mt-4 flex justify-center items-center'
        href='https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.giacomorebonato.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='mr-2'
          src='/lighthouse-logo.svg'
          width='40'
          height='40'
          alt='Test this page on Google Lighthouse'
        />

        <span>Test this page on Google Lighthouse</span>
      </a>
    </Container>
  )
}

export default Index
