import React from 'react'
import { graphql } from 'gatsby'
import { Container, Title } from '../components'
import './style.css'

export default function Template(props: any) {
  const { data } = props
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Title>{frontmatter.title}</Title>
      <h2 className='mb-4'>{frontmatter.date}</h2>
      <img
        src={frontmatter.featuredImage.childImageSharp.original.src}
        alt={frontmatter.featuredImageDescription}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} className='markdown' />
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImageDescription
        featuredImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`
