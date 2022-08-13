import NextLink from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
export { Chapter } from './chapter'
export { Container } from './container'
export { MySection } from './my-section'
export { Title } from './title'

type MyLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  external?: boolean
}

export const MyLink = ({
  children,
  className,
  href,
  external,
  ...otherProps
}: MyLinkProps) => {
  if (!href) return <></>

  return (
    <NextLink href={href} passHref>
      <a
        href={href}
        className={`${className} link link-secondary link-hover`}
        target={external ? '_blank' : undefined}
        rel='noopener noreferrer'
        {...otherProps}
      >
        <span>
          {children}
          {external ? (
            <>
              {' '}
              <FiExternalLink className='inline align-text-bottom' />
            </>
          ) : null}
        </span>
      </a>
    </NextLink>
  )
}
