import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit: 5, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    frontmatter {
                        title 
                        slug
                    }
                }
            }
        }
    }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={(data) => (
      <>
        <aside>
            <h3>Archive</h3>
            <ul>
                {data.allMarkdownRemark.edges.map(post => (
                    <li key={post.node.frontmatter.slug}>
                        <Link to={`posts${post.node.frontmatter.slug}`}>
                            {post.node.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
      </>
    )}
  />
)

export default Archive