import styled from 'styled-components'

export const AdverSectionWrapper = styled.section`
	display:flex;
	justify-content:space-around;
	align-items:center;
	width:100%;
	min-height:250px;

	@media only screen and (max-width:480px){
		min-height:550px;
		flex-direction:column;
	}
`

export const AdverItem = styled.div`
	width:30%;
	height:150px;
	border-radius:10px;
	background-color:#EFF0F2;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	@media only screen and (max-width:480px){
		width:90%;
	}
`

export const MoreNewsSectionWrapper = styled.section`
	width:100%;
	padding:2.5%;
	.headerTitle{
		font-size:2rem;
		font-weight:700;
		&:after{
			display:block;
			content:'';
			width:100%;
			height:2px;
			background-color:#C8C8C8;
			margin-top:2rem;
		}
	}

	@media only screen and (max-width:480px){
		margin-top:3rem;
	}
`

export const MoreNewsList = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items:center;
`
export const NewsListItemWrapper = styled.div`
	width:100%;
	min-height: 120px;
	&:after{
			display:block;
			content:'';
			width:100%;
			height:2px;
			background-color:#C8C8C8;
	}
`

export const NewsListItem = styled.div`
	width:100%;
	min-height:120px;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;

	.blogWrapper{
		width:50%;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}

	.blogInfo{
		flex:1;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:flex-start;
	}

	.blogTitle{
		font-size:1.5rem;
		margin-bottom:1rem;
	}

	.blogDes{
		flex:1;
		font-size:0.85rem;
		color:#8C8C8C;
	}

	.readMoreButton{
		width:7rem;
		height:3.2rem;
		background-color:black;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius:10px;
		color:white;
		font-size:0.85rem;
		cursor: pointer;
		&:hover{
			
		}
	}

	@media only screen and (max-width:480px){
		flex-direction:column;
		justify-content:space-around;
		align-items:center;
		padding:2rem 1rem;

		.blogWrapper{
			width:100%;
			flex-direction:column;
			justify-content:space-between;
			align-items:flex-start;
			margin-bottom:2rem;
		}

		.readMoreButton{
			width:5rem;
			height:2.2rem;
			font-size:0.7rem;
		}
	}
`

export const EventListItemWrapper = styled(NewsListItemWrapper)`
`	

export const EventListItem = styled(NewsListItem)`
	.blogInfo{
		flex:4;
	}

	.dateWrapper{
		flex:1;
		min-height:80px;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		align-items:flex-start;
	}

	.date{
		font-size:3rem;
		font-weight:700;
	}

	.month{
		font-size:1rem;
		color:#8C8C8C;
	}
`

