import React, { FC } from "react";
import { Row, Col, Carousel } from "antd";
import { useStaticQuery, graphql, Link } from "gatsby";
import AdverSlider from "../../CommonComponents/AdverSlider";
import {
  NewSectionWrapper,
  NewsSectionTitle,
  NewsPanelWrapper,
  SeeMoreButton,
} from "./style";
import { BasicColor } from "../../BasicStyle";

const NewsSection: FC = () => {
  const event = useStaticQuery(graphql`
    query BlogList {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 5
      ) {
        edges {
          node {
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
    <NewSectionWrapper
      backgroundColor={BasicColor.primaryColor}
      margin="5% 0 0 0"
      padding="0"
    >
      <NewsSectionTitle>NEWS & EVENT</NewsSectionTitle>
      <AdverSlider />
      <Row justify="center" align="middle">
        <Col xl={18} lg={18} md={0} sm={0} xs={0}>
          <Carousel autoplay dotPosition="right" adaptiveHeight>
            {event
              ? event.allMarkdownRemark.edges.map(({ node }) => (
                  <NewsPanelWrapper
                    {...node}
                    key={node.frontmatter.path}
                    backgroundImage={node.frontmatter.backgroundImage}
                  >
                    <Link to={node.frontmatter.path}>
                      <div className="centerWrapper">
                        <div className="infoWrapper">
                          <h3 className="panelTitle">
                            {node.frontmatter.title}
                          </h3>
                          <div className="panelDate">
                            {node.frontmatter.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </NewsPanelWrapper>
                ))
              : `No Content Available now`}
          </Carousel>
        </Col>

        {/* Mobile version */}
        <Col xl={0} lg={0} md={22} sm={22} xs={22}>
          {event
            ? event.allMarkdownRemark.edges.map(({ node }) => (
                <NewsPanelWrapper
                  {...node}
                  key={node.frontmatter.path}
                  backgroundImage={node.frontmatter.backgroundImage}
                >
                  <Link to={node.frontmatter.path}>
                    <div className="centerWrapper">
                      <div className="infoWrapper">
                        <h3 className="panelTitle">{node.frontmatter.title}</h3>
                        <div className="panelDate">{node.frontmatter.date}</div>
                      </div>
                    </div>
                  </Link>
                </NewsPanelWrapper>
              ))
            : `No Content Available now`}
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <SeeMoreButton>
          <Link to="/newsPage">Learn More</Link>
        </SeeMoreButton>
      </Row>
    </NewSectionWrapper>
  );
};

export default NewsSection;
