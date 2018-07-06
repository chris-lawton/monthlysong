import React from 'react';

export default ({ children, data }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <h1>{data.site.siteMetadata.title}</h1>
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
