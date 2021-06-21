import React, { useEffect, FC } from 'react';
import { Row, Col } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';
import SocialMediaGroup from './SocialMediaGroup';
import {
  HeaderWrapper,
  NavBar,
  LanguageTransButton,
  MobileNavMenuWrapper,
} from './style';
import { BasicColor } from '../BasicStyle';

import insIcon from '../../images/ins.png';
import wechatIcon from '../../images/wechat.png';
import facebookIcon from '../../images/facebook.png';

const Header: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.anime-header', 0.6, {
      scrollTrigger: {
        trigger: '.anime-header',
        // markers: true,
        start: 'top -80',
        toggleActions: 'play none reverse none',
      },
      opacity: 0,
    });
  }, []);

  const showMobileNavMenu = () => {
    const t1 = gsap.timeline();
    t1.to('.MobileNavMenuWrapper', {
      display: 'block',
    })
      .to('.MobileNavMenuWrapper', 0.6, {
        x: '0px',
      })
      .to('body', {
        overflowY: 'hidden',
      });
  };

  return (
    <>
      <HeaderWrapper
        className="anime-header"
        backgroundColor={BasicColor.primaryColor}
      >
        <Row justify="start" align="middle">
          <Col xl={3} lg={3} md={4} sm={7} xs={7}>
            <Logo
              height={60}
              imageHeight={29}
              imageWidth={45}
              dividerHeight={25}
              dividerWidth={2}
              logoTextSize={1.75}
              space={10}
            />
          </Col>

          <Col xl={21} lg={21} md={21} sm={0} xs={0}>
            <div
              className="hbar"
              style={{
                width: '100%',
                height: '20px',
                backgroundColor: '#F1F1F1',
              }}
            ></div>
          </Col>

          {/* mobile version */}
          <Col
            xl={0}
            lg={0}
            md={0}
            sm={{ span: 15, offset: 1 }}
            xs={{ span: 15, offset: 2 }}
          >
            <div className="mobileNavBarWrapper">
              <LanguageTransButton mobileHidden={false}>
                中文
              </LanguageTransButton>
              <GiHamburgerMenu
                className="navHamIcon"
                onClick={showMobileNavMenu}
              />
            </div>
          </Col>
          {/* mobile version */}
        </Row>

        {/* desktop version */}
        <Row>
          <Col
            xl={{ span: 14, offset: 8 }}
            lg={{ span: 12, offset: 12 }}
            md={{ span: 12, offset: 8 }}
            sm={0}
            xs={0}
          >
            <NavBar>
              <div className="navText">WISH</div>
              <div className="navText">NEWS</div>
              <div className="navText">PROGRAM</div>
              <div className="navText">CONTACT US</div>
              <div className="navText">MORE</div>
              <LanguageTransButton mobileHidden={true} />
            </NavBar>
          </Col>
        </Row>
        {/* desktop version */}
      </HeaderWrapper>

      <MobileNavMenu />
    </>
  );
};

const MobileNavMenu = () => {
  const closeMobileNavMenu = () => {
    const t1 = gsap.timeline();
    t1.to('.MobileNavMenuWrapper', 0.6, {
      x: '220px',
    })
      .to('.MobileNavMenuWrapper', {
        display: 'none',
      })
      .to('body', {
        overflowY: 'scroll',
      });
  };

  return (
    <MobileNavMenuWrapper className="MobileNavMenuWrapper">
      <AiOutlineClose
        className="mobileCloseButton"
        onClick={closeMobileNavMenu}
      />
      <div className="mobileNavBar">
        <div className="mobileNavItem">WISH</div>
        <div className="mobileNavItem">NEWS</div>
        <div className="mobileNavItem">CONTACT US</div>
        <div className="mobileNavItem">MORE</div>
        <SocialMediaGroup
          imgs={[insIcon, wechatIcon, facebookIcon]}
          width="80%"
        />
      </div>
    </MobileNavMenuWrapper>
  );
};

export default Header;
