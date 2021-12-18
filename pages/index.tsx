import {
  Box,
  Divider,
  Flex,
  Image,
  Link as ChakraLink,
  Text as ChakraText
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { Chapter, Container, MyLink, MySection, P } from '../components'
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
      <Box textAlign='center'>
        <Image
          as={motion.img}
          drag
          dragElastic={0.8}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          whileDrag={{ rotate: 360 }}
          border='4px'
          borderRadius='full'
          display='inline'
          src='avatar.jpg'
          alt='A photograph of Giacomo Rebonato'
          object-fit='contain'
          maxW='250px'
        />
      </Box>

      <MySection title='Who am I?'>
        <P>
          I am a programmer and a musician{' '}
          <ChakraText textDecor='line-through' as='span'>
            based in Dublin Ireland
          </ChakraText>{' '}
          recently moved back to{' '}
          <MyLink href='https://en.wikipedia.org/wiki/Verona' external>
            Verona (Italy)
          </MyLink>
          , but planning to visit Ireland often.
          <br />
          Passionate about:
        </P>
      </MySection>

      <MySection>
        <Skills />
      </MySection>

      <MySection title='Posts'>
        <P>
          <MyLink href='/posts'>I am writing down here some thoughts.</MyLink>
          <br />
          Hoping to find them meaningful when I read them again.
        </P>
      </MySection>

      <Box>
        <Chapter>Other things</Chapter>
        <Hobbies />
      </Box>

      <MySection title='Contacts'>
        <Contacts />
      </MySection>

      <Divider mt='2' mb='4' />

      <Flex mb='2' justifyContent='center'>
        <ChakraText>Song of the moment:&nbsp;</ChakraText>
        <MyLink href='https://songwhip.com/jdmglobal/get-back' external>
          Get Back by JDM Global
        </MyLink>
      </Flex>

      <Divider mt='2' mb='4' />

      <ChakraLink
        mb='4'
        mt='4'
        display='flex'
        justifyItems='center'
        alignItems='center'
        href='https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.giacomorebonato.com%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext'
        target='_blank'
      >
        <Image
          mr='2'
          w='16'
          src='./lighthouse-logo.svg'
          alt='Test this page on Google Lighthouse'
        />
        <ChakraText>Test this page on Google Lighthouse</ChakraText>
      </ChakraLink>
    </Container>
  )
}

export default Index
