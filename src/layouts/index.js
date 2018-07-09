import React from 'react';
import Link from 'gatsby-link';
import { Helmet } from "react-helmet";

export default ({ children, data }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <h1 style={{margin: `0 0 1rem`}}>{data.site.siteMetadata.title}</h1>
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
