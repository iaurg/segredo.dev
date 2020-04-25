import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ marginTop: 30 }}>
            <h3>
              {node.frontmatter.title}{' '}
              <span>— {node.frontmatter.date_published}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date_published(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
