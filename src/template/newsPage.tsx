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
import oseLogo from '../images/OSELogo@3x.png';

const NewsPage = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <>
      <NewsBanner>
        <img className="companyLogo" src={oseLogo} />
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
