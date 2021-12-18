import { ComponentWithAs, Heading, HeadingProps } from '@chakra-ui/react'

export const Chapter: ComponentWithAs<'h2', HeadingProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Heading
      fontSize='xl'
      mb='1'
      mt='4'
      fontWeight='semibold'
      variant='primary'
      {...otherProps}
    >
      {children}
    </Heading>
  )
}
