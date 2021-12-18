import { Box } from '@chakra-ui/react'
import React from 'react'
import { Chapter } from './chapter'

type MySectionProps = {
  title?: string
}

export const MySection: React.FC<MySectionProps> = ({ children, title }) => {
  return (
    <Box>
      {title ? <Chapter mb='2'>{title}</Chapter> : null}
      {children}
    </Box>
  )
}
