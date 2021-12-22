import { Box, Text as ChakraText, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
export { ChakraMdx } from './chakra-mdx'
export { Chapter } from './chapter'
export { Container } from './Container'
export { MyLink } from './my-link'
export { MySection } from './my-section'
export { Title } from './title'

interface BasicUIProps {
  className?: string
  tw?: string
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

export const Text: React.FC<BasicUIProps> = ({ children }) => {
  const color = useColorModeValue('gray.800', 'red.100')

  return <ChakraText color={color}>{children}</ChakraText>
}

export const P: React.FC<BasicUIProps> = ({
  children,
  dangerouslySetInnerHTML
}) => {
  const color = useColorModeValue('gray.800', 'red.50')

  return dangerouslySetInnerHTML ? (
    <Box
      as='p'
      color={color}
      fontSize='lg'
      mb='2'
      dangerouslySetInnerHTML={{
        __html: dangerouslySetInnerHTML.__html
      }}
    />
  ) : (
    <Box fontSize='lg' color={color} mb='2'>
      {children}
    </Box>
  )
}

interface LinkProps {
  className?: string
  external?: boolean
  href: string
}
