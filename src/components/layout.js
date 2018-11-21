import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Spring } from 'react-spring'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath:{
          regex: "/bg/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring 
          from={{height: location.pathname === '/' ? 100 : 500}}
          to={{height: location.pathname === '/' ? 500 : 100}}
        >
          {styles => (
            <div style={{overflow: 'hidden', ...styles}}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        {/* {location.pathname === '/' && ()} */}
        <MainLayout >
          <div>
            {children}
          </div>
          <Archive />
        </ MainLayout >
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {}
}

export default Layout
