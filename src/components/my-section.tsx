import React from 'react'
import { Chapter } from './chapter'

export const MySection = ({
  children,
  title
}:
  | React.HTMLProps<HTMLDivElement>
  | { title?: string; children: React.ReactNode }) => {
  return (
    <section className='p-2'>
      {title ? <Chapter>{title}</Chapter> : null}
      {children}
    </section>
  )
}
