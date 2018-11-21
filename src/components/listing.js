import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

// import Layout from '../components/layout'
// import Image from '../components/image'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={(data) => (
        data.allMarkdownRemark.edges.map((edge) => (
            <article key={edge.node.frontmatter.slug} >
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                <p>{edge.node.excerpt}</p>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
            </article>
        ))
    )}
  />
)

export default Listing