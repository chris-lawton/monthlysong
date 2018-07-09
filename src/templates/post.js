import React from 'react';
import { Helmet } from "react-helmet";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Helmet>
                <title>{post.frontmatter.title} | MonthlySong</title>
            </Helmet>
            <h2 style={{ margin: `1rem 0` }}>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter {
                title
            }
        }
    }
`;
