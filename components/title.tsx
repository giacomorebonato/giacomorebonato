import { ComponentWithAs, Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'
export { Chapter } from './chapter'
export { Container } from './Container'
export { MySection } from './my-section'

export const Title: ComponentWithAs<'h2', HeadingProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Heading
      fontSize='2xl'
      fontWeight='bold'
      mb='2'
      variant='primary'
      {...otherProps}
    >
      {children}
    </Heading>
  )
}
