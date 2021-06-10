import React from 'react'
import AdverSlider from '../../CommonComponents/AdverSlider'
import { NewSectionWrapper, NewsSectionTitle, NewsPanelWrapper, SeeMoreButton } from './style'
import { BasicColor } from '../../BasicStyle'
import { Row,Col,Carousel } from 'antd'


const NewsSection = () => {
	return (
		<NewSectionWrapper backgroundColor={BasicColor.primaryColor} margin='5% 0 0 0' padding='0'>
			<NewsSectionTitle>NEWS & EVENT</NewsSectionTitle>
			<AdverSlider/>
			<Row justify='center' align='middle'>
				<Col xl={18} lg={18} md={22} sm={0} xs={0}>		
					<Carousel autoplay dotPosition="right">
						<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
							<div className='centerWrapper'>	
								<div className='infoWrapper'>	
									<h3 className='panelTitle'>Winter BasketBall Game</h3>
									<div className='panelDate'>February 12th 2021</div>
								</div>
							</div>
						</NewsPanelWrapper>
						<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
							<h3 className='panelTitle'>Winter BasketBall Game</h3>
						</NewsPanelWrapper>
						<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
							<h3 className='panelTitle'>Winter BasketBall Game</h3>
						</NewsPanelWrapper>
						<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
							<h3 className='panelTitle'>Winter BasketBall Game</h3>
						</NewsPanelWrapper>
						<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
							<h3 className='panelTitle'>Winter BasketBall Game</h3>
						</NewsPanelWrapper>
					</Carousel>
				</Col>

				{/* Mobile version */}
				<Col xl={0} lg={0} md={0} sm={22} xs={22}>
					<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
						<div className='centerWrapper'>
							<div className='infoWrapper'>
								<h3 className='panelTitle'>Winter BasketBall Game</h3>
								<div className='panelDate'>February 12th 2021</div>
							</div>
						</div>
					</NewsPanelWrapper>

					<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
						<div className='centerWrapper'>
							<div className='infoWrapper'>
								<h3 className='panelTitle'>Winter BasketBall Game</h3>
								<div className='panelDate'>February 12th 2021</div>
							</div>
						</div>
					</NewsPanelWrapper>

					<NewsPanelWrapper backgroundImage='https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&w=1000&q=80'>
						<div className='centerWrapper'>
							<div className='infoWrapper'>
								<h3 className='panelTitle'>Winter BasketBall Game</h3>
								<div className='panelDate'>February 12th 2021</div>
							</div>
						</div>
					</NewsPanelWrapper>
				</Col>
			</Row>

			<Row justify="center" align="middle">
				<SeeMoreButton>See More</SeeMoreButton>
			</Row>
		</NewSectionWrapper>
	)
}

export default NewsSection
