import React, { FC } from 'react';
import { MoreNewsSectionWrapper, MoreNewsList } from './style';
import NewsItem from './NewsItem';
import { useStaticQuery, graphql } from 'gatsby';

const MoreNewsSection: FC = () => {
  const news = useStaticQuery(graphql`
    query blogList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <MoreNewsSectionWrapper>
      <div className="headerTitle">More News</div>
      <MoreNewsList>
        {news.allMarkdownRemark.edges.map(({ node }: any) => {
          return <NewsItem {...node} key={node.frontmatter.path} />;
        })}
      </MoreNewsList>
    </MoreNewsSectionWrapper>
  );
};

export default MoreNewsSection;
