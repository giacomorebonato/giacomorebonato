import React from 'react'
import { MyList } from './my-list'

export const Skills = () => {
  return (
    <MyList
      items={[
        'React',
        'NodeJS',
        'TypeScript',
        'Accessibility',
        'Observability',
        'Testing'
      ]}
    />
  )
}
