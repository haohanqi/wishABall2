import React, { FC } from 'react';
import { MoreNewsSectionWrapper, MoreNewsList } from './style';
import EventItem from './EventItem';
import { useStaticQuery, graphql } from 'gatsby';

const MoreEventSection: FC = () => {
  const event = useStaticQuery(graphql`
    query eventList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/event/" } }
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
      <div className="headerTitle">More Event</div>
      <MoreNewsList>
        {event.allMarkdownRemark.edges.map(({ node }) => {
          return <EventItem {...node} key={node.frontmatter.path} />;
        })}
      </MoreNewsList>
    </MoreNewsSectionWrapper>
  );
};

export default MoreEventSection;
