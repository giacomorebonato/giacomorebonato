import {
  ComponentWithAs,
  Icon,
  Link as ChakraLink,
  LinkProps,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
export { Chapter } from './chapter'
export { Container } from './Container'
export { MySection } from './my-section'
export { Title } from './title'

export const MyLink: ComponentWithAs<'a', LinkProps> = ({
  children,
  className,
  href,
  external,
  ...otherProps
}) => {
  if (!href) return <></>

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        href={href}
        variant='primary'
        className={className}
        target={external ? '_blank' : undefined}
        rel='noopener noreferrer'
        textDecor='none'
        {...otherProps}
      >
        <Text as='span'>
          {children}{' '}
          {external ? <Icon as={FiExternalLink} w={3} h={3} /> : null}
        </Text>
      </ChakraLink>
    </NextLink>
  )
}
