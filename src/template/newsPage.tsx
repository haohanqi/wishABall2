/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import {
  NewsBanner,
  NewsPageContainer,
  NewTitle,
  NewDate,
  NewsButton,
} from './style';
import { StaticImage } from 'gatsby-plugin-image';

const NewsPage = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <>
      <NewsBanner>
        <div className="companyLogo">
          <StaticImage
            src={'../images/logo.png'}
            alt="OSE Logo"
            width={90}
            height={70}
            layout="fixed"
            loading="eager"
          />
        </div>
        <div className="logoTitle">Wish A Ball</div>
        <div className="titleContainer">
          <NewTitle>{title}</NewTitle>
        </div>
      </NewsBanner>
      <NewsPageContainer>
        <NewDate>{date}</NewDate>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <NewsButton>Back</NewsButton>
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
