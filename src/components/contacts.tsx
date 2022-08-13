import React from 'react'
import { MyLink } from '.'

export const Contacts: React.FC = () => (
  <section>
    <ul className='grid grid-cols-1 text-black dark:text-white gap-2'>
      <li>
        <MyLink external href='https://github.com/giacomorebonato/'>
          GitHub
        </MyLink>
      </li>
      <li>
        <MyLink external href='https://twitter.com/giacomorebonato'>
          Twitter
        </MyLink>
      </li>
      <li>
        <MyLink external href='https://www.linkedin.com/in/giacomorebonato/'>
          Linkedin
        </MyLink>
      </li>
      <li>
        Email -{` `}
        <MyLink href='mailto:grebonato@outlook.ie'>grebonato@outlook.ie</MyLink>
      </li>
    </ul>
  </section>
)
