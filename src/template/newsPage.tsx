/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { FC } from "react";
import { graphql } from "gatsby";
import SEO from "@/components/CommonComponents/SEO";
import { NewsBanner, NewsPageContainer, NewTitle, NewDate } from "./style";

const NewsPage: FC<{ data: any }> = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <>
      <SEO
        description="Overseas Sports And Education News"
        title={title}
        keywords={[
          `${title}`,
          `${date}`,
          "OSE News Page",
          "Overseas Sports And Education News",
          "OSE News",
        ]}
      />
      <NewsBanner>
        <div className="logoTitle">Wish A Ball</div>
        <div className="titleContainer">
          <NewTitle>{title}</NewTitle>
        </div>
      </NewsBanner>
      <NewsPageContainer>
        <NewDate>{date}</NewDate>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </NewsPageContainer>
    </>
  );
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
