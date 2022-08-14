import React from 'react'
export { ChakraMdx } from './chakra-mdx'
export { Chapter } from './chapter'
export { Container } from './container.server'
export { MyLink } from './my-link'
export { MySection } from './my-section.server'
export { Title } from './title'

export const Text: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children
}) => {
  return <span className='text-gray-800 dark:text-red-100'>{children}</span>
}

export const P: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  dangerouslySetInnerHTML
}) => {
  return dangerouslySetInnerHTML ? (
    <p
      className={`text-lg mb-2  ${className}`}
      dangerouslySetInnerHTML={{
        __html: dangerouslySetInnerHTML.__html
      }}
    />
  ) : (
    <p className={`text-lg mb-2  ${className}`}>{children}</p>
  )
}
