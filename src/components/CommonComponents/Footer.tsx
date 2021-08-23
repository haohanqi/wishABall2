import React, { FC } from 'react';
import { Row, Col } from 'antd';
import Logo from './Logo';
import {
  FooterWrapper,
  FooterLogoSection,
  FooterInfo,
  FooterWishWrapper,
} from './style';
import SocialMediaGroup from '../CommonComponents/SocialMediaGroup';
import WishButton from '../CommonComponents/WishButton';
import wechat from '../../images/wechat.png';
import ins from '../../images/ins.png';
import facebook from '../../images/facebook.png';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <div className="contentWrapper">
        <FooterLogoSection>
          <Logo
            height={75}
            imageHeight={75}
            imageWidth={80}
            dividerHeight={60}
            dividerWidth={3}
            logoTextSize={4.5}
            space={25}
          />
          <div className="logoSlogan">Play and Learn Anywhere, Anytime</div>
          <SocialMediaGroup
            imgs={[wechat, ins, facebook]}
            width="60%"
            mobileHidden={false}
          />
        </FooterLogoSection>
        <div className="footerInfoWrapper">
          <FooterInfo>
            <h3 className="footerTitle">News & Events</h3>
            <h4 className="footerText">Event</h4>
            <h4 className="footerText">Program</h4>
            <h4 className="footerText">Sport News</h4>
          </FooterInfo>

          <FooterInfo>
            <h3 className="footerTitle">About</h3>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
          </FooterInfo>

          <FooterInfo className="footerInfo">
            <h3 className="footerTitle">Contact Us</h3>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
            <h4 className="footerText">our story</h4>
          </FooterInfo>
        </div>

        <FooterWishWrapper>
          <h1 className="wishTitle">Wish Search</h1>
          <WishButton width="85%" height="50px" buttonText="Find Your Wish" />
          <div className="wishInfo">
            <h4 className="footerText">Play</h4>
            <h4 className="footerText">Learn</h4>
            <h4 className="footerText">Sport Court</h4>
            <h4 className="footerText">Tickets</h4>
          </div>
        </FooterWishWrapper>
      </div>

      <Row justify="space-around" align="middle">
        <Col xl={{ span: 6, pull: 9 }} lg={8} md={24} sm={24} xs={24}>
          <div className="copyRight">2021 created by OBA Basketball</div>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
