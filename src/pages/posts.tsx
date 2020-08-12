import React from 'react'
import { Container } from '../components'
import { graphql, Link } from 'gatsby'

type PostsProps = { data: any }

const Posts: React.FC<PostsProps> = ({ data }) => {
  return (
    <Container>
      <h2 className='text-xl font-bold mb-4'>Posts</h2>
      <section className='flex flex-col'>
        {data.allMarkdownRemark.edges.map((item: any) => {
          const { node } = item
          const { frontmatter } = node
          return (
            <Link
              to={frontmatter.slug}
              className='text-blue-700 hover:text-blue-800'
            >
              <div key={`post-${node.date}`}>
                <span className='text-sm'>{frontmatter.date}</span>
                <h3 className='text-lg font-bold'>{frontmatter.title}</h3>
                <p>{frontmatter.spoiler}</p>
              </div>
            </Link>
          )
        })}
      </section>
    </Container>
  )
}

export default Posts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            spoiler
          }
        }
      }
    }
  }
`
