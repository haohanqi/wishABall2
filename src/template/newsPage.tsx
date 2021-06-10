import React from 'react';
import { graphql } from 'gatsby';

const NewsPage = ({ data }) => {
  console.log(data.markdownRemark.frontmatter);
  return <div>news</div>;
};

export default NewsPage;

export const pageContent = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
