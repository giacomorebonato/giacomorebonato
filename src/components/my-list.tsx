import React from 'react'

type MyListProps = {
  items:
  | string[]
  | {
    icon: string
    iconLabel: string
    text: string | Element
  }[]
}

export const MyList: React.FC<MyListProps> = ({ items }) => {
  return (
    <ul className='w-full list-disc list-inside'>
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return <li key={item}>{item}</li>
        }

        return (
          <li key={`other-${i}`}>
            <span role='img' aria-label={item.iconLabel} className='pr-3'>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        )
      })}
    </ul>
  )
}
