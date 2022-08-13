import React from 'react'

type ChapterProps = React.HTMLProps<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Chapter = ({
  children,
  as,
  className,
  ...otherProps
}: ChapterProps) => {
  const CustomTag = as ? as : 'h2'

  return (
    <CustomTag
      className={`text-xl mb-2 mt-4 font-semibold ${className}`}
      {...otherProps}
    >
      {children}
    </CustomTag>
  )
}
