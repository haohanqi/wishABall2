/* eslint-disable react/prop-types */
import React, { FC } from "react";
import { Link } from "gatsby";
import { NewsListItemWrapper, NewsListItem } from "./style";

interface news {
  excerpt: string;
  frontmatter: {
    title: string;
    path: string;
    date: string;
  };
}

const NewsItem: FC<news> = ({ excerpt, frontmatter }) => (
  <NewsListItemWrapper>
    <NewsListItem>
      <div className="blogWrapper">
        <div className="blogInfo">
          <div className="blogTitle">{frontmatter.title}</div>
          <div className="blogDes">{frontmatter.date}</div>
        </div>
        <div className="blogDes">{excerpt}</div>
      </div>
      <Link to={frontmatter.path}>
        <div className="readMoreButton">Read More</div>
      </Link>
    </NewsListItem>
  </NewsListItemWrapper>
);

export default NewsItem;
