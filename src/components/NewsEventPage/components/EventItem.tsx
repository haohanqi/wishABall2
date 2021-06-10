import React from 'react'
import { EventListItemWrapper,EventListItem } from './style'
import { event } from './MoreNewsSection'
const EventItem = (item:event) => {
	return (
		<EventListItemWrapper>
			<EventListItem>
				<div className="blogWrapper">
					<div className="dateWrapper">
					<div className="date">{item.date}</div>
					<div className="month">{item.month}</div>
					</div>
					<div className="blogInfo">
						<div className="blogTitle">{item.title}</div>
					</div>
				</div>
				<div className="readMoreButton">Read More</div>
			</EventListItem>
		</EventListItemWrapper>
	)
}

export default EventItem
