import React from 'react';
import { Row, Col } from 'antd';
import {
  WishSectionWrapper,
  WishInfoWrapper,
  WishImgWrapper,
  WishButtonWrapper,
  PromoBox,
} from './style';
import SocialMediaGroup from '../../CommonComponents/SocialMediaGroup';
import WishButton from '../../CommonComponents/WishButton';
import { BasicColor } from '../../BasicStyle';
import wechat from '../../../images/wechat.png';
import ins from '../../../images/ins.png';
import facebook from '../../../images/facebook.png';
import wish from '../../../images/wish.jpg';
import wish2 from '../../../images/wish2.jpg';
import wish3 from '../../../images/wish3.jpg';

const WishSection = () => {
  return (
    <WishSectionWrapper backgroundColor={BasicColor.primaryColor}>
      <Row justify="space-around" align="middle" style={{ minHeight: '100vh' }}>
        <Col xl={5} lg={5} md={5} sm={22} xs={22}>
          <WishInfoWrapper>
            <div className="wishTitle">
              <span>W</span>
              <span>i</span>
              <span style={{ color: '#FBB040' }}>s</span>
              <span>h</span>
            </div>
            <p className="wishDescription">
              ply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
            </p>

            <SocialMediaGroup
              imgs={[wechat, ins, facebook]}
              mobileHidden={true}
            />
          </WishInfoWrapper>
        </Col>
        <Col xl={5} lg={5} md={5} sm={24} xs={24}>
          <WishImgWrapper>
            <PromoBox backgroundImage={wish} height="70%">
              <div className="promoTitle">BASKETBALL</div>
              <div className="promoDes">This is a promation</div>
            </PromoBox>
            <div className="promoRow">
              <PromoBox
                backgroundImage={wish3}
                width="48%"
                height="100%"
                small={true}
              >
                <div className="promoTitle">Hockey</div>
                <div className="promoDes">This is a promation</div>
              </PromoBox>
              <PromoBox
                backgroundImage={wish2}
                width="48%"
                height="100%"
                small={true}
              >
                <div className="promoTitle">Volleyball</div>
                <div className="promoDes">This is a promation</div>
              </PromoBox>
            </div>
          </WishImgWrapper>
        </Col>
        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
          <WishButtonWrapper>
            <WishButton buttonText="Find Your Wish" />
          </WishButtonWrapper>
        </Col>
      </Row>
    </WishSectionWrapper>
  );
};

export default WishSection;
