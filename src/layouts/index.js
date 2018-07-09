import React from 'react';
import Link from 'gatsby-link';

export default ({ children, data }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <h1>{data.site.siteMetadata.title}</h1>
        </Link>
        {children()}
    </div>
);

// get the site title from gatsby-config
export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
