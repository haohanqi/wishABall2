import React from 'react'
import { NewsListItemWrapper, NewsListItem } from './style'
import {news} from './MoreNewsSection'
const NewsItem = ({ title, date, blogDes}:news) => {
	return (
		<NewsListItemWrapper>
			<NewsListItem>
				<div className="blogWrapper">
					<div className="blogInfo">
						<div className="blogTitle">{title}</div>
						<div className="blogDes">{date}</div>
					</div>
					<div className="blogDes">{blogDes}</div>
				</div>
				<div className="readMoreButton">Read More</div>
			</NewsListItem>
		</NewsListItemWrapper>
	)
}

export default NewsItem
