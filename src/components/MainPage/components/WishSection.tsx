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
        <Col xl={5} lg={5} md={16} sm={22} xs={22}>
          <WishInfoWrapper>
            <div className="wishTitle">
              <span>W</span>
              <span>i</span>
              <span style={{ color: '#FBB040' }}>s</span>
              <span>h</span>
            </div>
            <p className="wishDescription">
              Wish a sport supports the community with easy access to sports and
              wellbeing. This program provides resources for community members
              and tools to participate in sports such as a space to play
              organized sports, and training. We are a firm believer in
              investing in young leaders, which through our program, we offer
              opportunities for members to take on leadership roles such as
              coaching and various volunteer opportunities within the
              organization.
            </p>

            <SocialMediaGroup
              imgs={[wechat, ins, facebook]}
              mobileHidden={true}
            />
          </WishInfoWrapper>
        </Col>
        <Col xl={5} lg={5} md={16} sm={24} xs={24}>
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
        <Col xl={8} lg={8} md={16} sm={24} xs={24}>
          <WishButtonWrapper>
            <WishButton buttonText="Find Your Wish" />
          </WishButtonWrapper>
        </Col>
      </Row>
    </WishSectionWrapper>
  );
};

export default WishSection;
