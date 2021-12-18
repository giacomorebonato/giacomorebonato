import React from 'react'
import { MyList } from './my-list'

export const Skills = () => {
  return (
    <MyList
      items={[
        'ReactJS',
        'Serverless',
        'NodeJS',
        'A11Y',
        'TypeScript',
        'GraphQL',
        'Testing'
      ]}
    />
  )
}
