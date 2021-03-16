import React from 'react'
import 'twin.macro'
import { Chapter, Link } from '.'

export const Contacts: React.FC = () => (
  <>
    <Chapter>Contacts</Chapter>
    <ul tw='list-disc list-inside text-gray-800 dark:text-red-100 leading-loose'>
      <li>
        <Link external href='https://github.com/giacomorebonato/'>
          GitHub
        </Link>
      </li>
      <li>
        <Link external href='https://twitter.com/giacomorebonato'>
          Twitter
        </Link>
      </li>
      <li>
        <Link external href='https://www.linkedin.com/in/giacomorebonato/'>
          Linkedin
        </Link>
      </li>
      <li>
        Email -{` `}
        <Link href='mailto:grebonato@outlook.ie'>grebonato@outlook.ie</Link>
      </li>
    </ul>
  </>
)
