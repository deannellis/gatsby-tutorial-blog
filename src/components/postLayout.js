import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

class postLayout extends Component {
    
    render() { 
        const { markdownRemark } = this.props.data;
        const { location } = this.props;
        return (
            <div>
                <Layout location={location} >
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                    }} />
                </Layout>
            </div>
        );
    }
}

export const query = graphql`
    query PostQuery($slug: String! ) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
            }
            }) {
                html,
                frontmatter{
                        title
                        date
            }
        }
    }
`;
 
export default postLayout;