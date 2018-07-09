import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css'

export default ({ data }) => {
    return(
        <div>
            <p>A song you may like, posted once a month.</p>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div style={{background: `#eef7b36b`, padding: `1rem`, marginBottom: `1rem`, borderRadius: `4px`, position: `relative`, overflow: `hidden`}} key={node.id}>
                    <Link to={node.fields.slug} style={{textDecoration: `none`, color: `inherit`}} >
                        <h3 style={{margin: `0 0 1rem 0`}}>
                            {node.frontmatter.title}
                            {' '}-{' '}
                            <span
                                style={{ color: `rgba(255, 255, 255, 0.17)`, fontSize: `120px`, position: `absolute`, right: 0, top: `15px`}}>
                                {node.frontmatter.date}
                            </span>
                        </h3>
                        <p style={{marginBottom: `0`}}>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
};

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM YY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
