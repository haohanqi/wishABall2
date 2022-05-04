import React, { FC, useEffect, useState } from "react";
import { Row, Col } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "gatsby";
import Logo from "./Logo";
import SocialMediaGroup from "./SocialMediaGroup";
import { HeaderWrapper, NavBar, MobileNavMenuWrapper } from "./style";
import { BasicColor } from "../BasicStyle";
import insIcon from "../../images/ins.png";
import wechatIcon from "../../images/wechat.png";
import facebookIcon from "../../images/facebook.png";

const MobileNavMenu: FC<{
  closeMobileNavMenu: () => void;
  visible: boolean;
}> = ({ closeMobileNavMenu, visible }) => {
  useEffect(() => {
    gsap.timeline().to("body", {
      overflowY: "scroll",
    });
  }, []);

  return (
    <MobileNavMenuWrapper
      className="MobileNavMenuWrapper"
      role="navigation"
      aria-hidden={visible}
    >
      <AiOutlineClose
        className="mobileCloseButton"
        onClick={closeMobileNavMenu}
        role="button"
        aria-label="mobile navigation close button"
      />
      <div className="mobileNavBar" role="menu">
        <Link to="/">
          <div className="mobileNavItem" role="menuitem">
            ABOUT US
          </div>
        </Link>
        <Link to="/newsPage">
          <div className="mobileNavItem" role="menuitem">
            NEWS
          </div>
        </Link>
        <Link to="/contactUsPage">
          <div className="mobileNavItem" role="menuitem">
            CONTACT US
          </div>
        </Link>
        <div className="mobileNavItem" role="menuitem">
          MORE
        </div>
        <SocialMediaGroup
          imgs={[insIcon, wechatIcon, facebookIcon]}
          width="80%"
        />
      </div>
    </MobileNavMenuWrapper>
  );
};

const Header: FC = () => {
  const [visibale, setVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const showMobileNavMenu = () => {
    const t1 = gsap.timeline();
    t1.to(".MobileNavMenuWrapper", {
      display: "block",
    })
      .to(".MobileNavMenuWrapper", 0.6, {
        x: "0px",
      })
      .to("body", {
        overflowY: "hidden",
      });
    setVisible(true);
  };

  const closeMobileNavMenu = () => {
    const t1 = gsap.timeline();
    t1.to(".MobileNavMenuWrapper", 0.6, {
      x: "220px",
    })
      .to(".MobileNavMenuWrapper", {
        display: "none",
      })
      .to("body", {
        overflowY: "scroll",
      });
    setVisible(false);
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
              small
            />
          </Col>

          <Col xl={21} lg={21} md={0} sm={0} xs={0}>
            <div
              className="hbar"
              style={{
                width: "100%",
                height: "20px",
                marginLeft: "10px",
                backgroundColor: "#F1F1F1",
              }}
            />
          </Col>

          {/* mobile version */}
          <Col
            xl={0}
            lg={0}
            md={{ span: 22 }}
            sm={{ span: 15, offset: 1 }}
            xs={{ span: 15, offset: 2 }}
          >
            <div className="mobileNavBarWrapper">
              {/* <LanguageTransButton mobileHidden={true}>
                中文
              </LanguageTransButton> */}
              <GiHamburgerMenu
                className="navHamIcon"
                onClick={showMobileNavMenu}
                role="button"
                aria-label="mobile hamburger button"
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
            <NavBar role="navigation">
              <div className="navMenu" role="menu">
                <Link to="/">
                  <div className="navText">Home</div>
                </Link>

                <Link to="/newsPage">
                  <div className="navText">NEWS</div>
                </Link>

                <Link to="https://oseca.square.site/s/appointments">
                  <div className="navText">OSE PROGRAM</div>
                </Link>

                <Link to="/contactUsPage">
                  <div className="navText">CONTACT US</div>
                </Link>

                <Link to="/comingSoonPage">
                  <div className="navText">COMING SOON</div>
                </Link>
              </div>

              {/* <LanguageTransButton mobileHidden={true} /> */}
            </NavBar>
          </Col>
        </Row>
        {/* desktop version */}
      </HeaderWrapper>

      <MobileNavMenu
        visible={visibale}
        closeMobileNavMenu={closeMobileNavMenu}
      />
    </>
  );
};

export default Header;
