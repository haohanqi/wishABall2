/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { NewsBanner, NewsPageContainer, NewTitle, NewDate } from './style';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '@/components/CommonComponents/SEO';

const NewsPage = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <>
      <SEO
        title={title}
        keywords={[
          `${title}`,
          `${date}`,
          'OSE News Page',
          'Overseas Sports And Education News',
          'OSE News',
        ]}
      />
      <NewsBanner>
        <div className="companyLogo">
          <StaticImage
            src={'../images/logo.png'}
            alt="OSE Logo"
            width={70}
            height={55}
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
