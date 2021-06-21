/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import {
  NewsBanner,
  EventPageContainer,
  NewTitle,
  EventField,
  JoinButton,
} from './style';
import oseLogo from '../images/OSELogo@3x.png';
const EventPage = ({ data }) => {
  const { title, date, location } = data.markdownRemark.frontmatter;

  return (
    <>
      <NewsBanner>
        <img className="companyLogo" src={oseLogo} />
        <JoinButton>Join</JoinButton>
        <div className="titleContainer">
          <NewTitle>{title}</NewTitle>
        </div>
      </NewsBanner>
      <EventPageContainer>
        <div>
          <EventField>
            <div className="title">Location</div>
            <div className="des">{location}</div>
          </EventField>
          <EventField>
            <div className="title">Date</div>
            <div className="des">{date}</div>
          </EventField>
        </div>

        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </EventPageContainer>
    </>
  );
};

export default EventPage;

export const eventContent = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        backgroundImage
        important
        eventName
        location
      }
    }
  }
`;
