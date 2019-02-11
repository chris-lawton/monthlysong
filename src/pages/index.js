import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';

export default ({ data }) => {
    return(
        <div>
            <p>A song you may like, posted once a month.</p>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div className={styles.card} key={node.id}>
                    <Link to={node.fields.slug}>
                        <h3 className={styles.cardHeading}>
                            {node.frontmatter.title}
                            <span className={styles.cardDate}>
                                {node.frontmatter.date}
                            </span>
                        </h3>
                        <p className={styles.cardTeaser}>{node.excerpt}</p>
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
