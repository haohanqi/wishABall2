import React, { FC } from 'react'
import { MoreNewsSectionWrapper, MoreNewsList, NewsListItemWrapper, NewsListItem} from './style'
import NewsItem from './NewsItem'
import EventItem from './EventItem'

export interface news {
	title:string;
	date:string;
	blogDes:string;
}

export interface event{
	title:string;
	month:string;
	date:string;
}

interface MoreNewsSectionProps {
	type:string;
	data: (news | event)[]
}

const MoreNewsSection: FC<MoreNewsSectionProps> = ({type,data}) => {
	return (
		<MoreNewsSectionWrapper>
			<div className="headerTitle">{type === 'news' ? 'More News':'More Event'}</div>
			<MoreNewsList>
				{
					data.map((item,_)=>{
						if(type === 'news'){
							return (
								<NewsItem {...item as news}/>
							)
						}else{
							return (
								<EventItem {...item as event}/>
							)
						}
					})
				}
			</MoreNewsList>
		</MoreNewsSectionWrapper>
	)
}

export default MoreNewsSection
