import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { MyLink } from '.'

export const Contacts: React.FC = () => (
  <Box>
    <UnorderedList spacing={2}>
      <ListItem>
        <MyLink external href='https://github.com/giacomorebonato/'>
          GitHub
        </MyLink>
      </ListItem>
      <ListItem>
        <MyLink external href='https://twitter.com/giacomorebonato'>
          Twitter
        </MyLink>
      </ListItem>
      <ListItem>
        <MyLink external href='https://www.linkedin.com/in/giacomorebonato/'>
          Linkedin
        </MyLink>
      </ListItem>
      <ListItem>
        Email -{` `}
        <MyLink href='mailto:grebonato@outlook.ie'>grebonato@outlook.ie</MyLink>
      </ListItem>
    </UnorderedList>
  </Box>
)
