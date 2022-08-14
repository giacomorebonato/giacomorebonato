import React from 'react'
export { Chapter } from './chapter'
export { Container } from './container.server'
export { MySection } from './my-section.server'

type TitleProps = React.HTMLProps<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title = ({
  children,
  as,
  className,
  ...otherProps
}: TitleProps) => {
  const CustomTag = as ? as : 'h2'

  return (
    <CustomTag
      className={` text-2xl font-bold mb-2 ${className}`}
      {...otherProps}
    >
      {children}
    </CustomTag>
  )
}
