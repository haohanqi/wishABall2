import React, { FC } from 'react';
import { EventListItemWrapper, EventListItem } from './style';
interface event {
  excerpt: string;
  frontmatter: {
    title: string;
    path: string;
    date: string;
  };
}

const EventItem: FC<event> = ({ frontmatter }) => {
  const dateFormat = (date: string) => {
    const newDate = new Date(date);
    const month = newDate.toLocaleDateString('default', { month: 'short' });
    const day = newDate.getDate();

    return {
      month,
      day,
    };
  };

  return (
    <EventListItemWrapper>
      <EventListItem>
        <div className="blogWrapper">
          <div className="dateWrapper">
            <div className="date">{dateFormat(frontmatter.date).month}</div>
            <div className="month">{dateFormat(frontmatter.date).day}</div>
          </div>
          <div className="blogInfo">
            <div className="blogTitle">{frontmatter.title}</div>
          </div>
        </div>
        <div className="readMoreButton">Read More</div>
      </EventListItem>
    </EventListItemWrapper>
  );
};

export default EventItem;
