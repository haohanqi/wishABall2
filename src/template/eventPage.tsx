/* eslint-disable react/prop-types */
import React, { FC } from "react";
import { graphql } from "gatsby";
import SEO from "@/components/CommonComponents/SEO";
import { NewsBanner, EventPageContainer, NewTitle, EventField } from "./style";

const EventPage: FC<{ data: any }> = ({ data }) => {
  const { title, date, location } = data.markdownRemark.frontmatter;

  return (
    <>
      <SEO
        description="Overseas Sports And Education Events"
        title={title}
        keywords={[
          `${title}`,
          `${location}`,
          `${date}`,
          "OSE Events Page",
          "Overseas Sports And Education Events",
          "OSE Event",
        ]}
      />
      <NewsBanner>
        <NewTitle>{title}</NewTitle>
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

        <div
          style={{ width: "100%", maxWidth: "500px" }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
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
