import {
  Container as ChakraContainer,
  HStack,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { Title } from '.'
import { ColorModeSwitcher } from './color-mode-switcher'

export const Container: React.FC<any> = ({ children }) => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return (
    <ChakraContainer maxW='container.md'>
      <VStack as='main' position='relative' alignItems='stretch' pb='8'>
        <HStack mb='4' pt='4' w='100%' alignItems='baseline'>
          <Title>
            <NextLink href='/'>
              {isLargerThan600 ? 'Giacomo Rebonato' : 'Giacomo'}
            </NextLink>
          </Title>
          <ColorModeSwitcher />
        </HStack>
        {children}
      </VStack>
    </ChakraContainer>
  )
}
