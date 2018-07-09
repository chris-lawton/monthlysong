import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css'

export default ({ data }) => {
    return(
        <div>
            <p>A song you may like, posted once a month.</p>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <Link to={node.fields.slug} style={{textDecoration: `none`, color: `inherit`}} >
                        <h3>
                            {node.frontmatter.title}
                            {' '}-{' '}
                            <span style={{color: '#bbb'}}>{node.frontmatter.date}</span>
                        </h3>
                        <p>{node.excerpt}</p>
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
                        date(formatString: "MMMM 'YY")
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
