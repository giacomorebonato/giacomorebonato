import { ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

type MyListProps = {
  items:
    | string[]
    | {
        icon: string
        iconLabel: string
        text: string
      }[]
}

export const MyList: React.FC<MyListProps> = ({ items }) => {
  return (
    <UnorderedList w='100%'>
      {items.map((item) => {
        if (typeof item === 'string') {
          return <ListItem key={item}>{item}</ListItem>
        }

        return (
          <ListItem key={item.text}>
            <Text role='img' aria-label={item.iconLabel} as='span' pr='3'>
              {item.icon}
            </Text>
            <Text as='span'>{item.text}</Text>
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}
