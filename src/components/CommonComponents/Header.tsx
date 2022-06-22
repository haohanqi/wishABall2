import React, { FC, useEffect, useState } from "react";
import { Row, Col } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "gatsby";
import { MenuItem, MenuBar, useMenuBarState } from "reakit/Menu";
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
  const menu = useMenuBarState();

  return (
    <MobileNavMenuWrapper
      aria-label="mobile-main-navigation"
      className="MobileNavMenuWrapper"
      aria-hidden={visible}
    >
      <AiOutlineClose
        className="mobileCloseButton"
        onClick={closeMobileNavMenu}
        role="button"
        aria-label="mobile navigation close button"
      />
      <MenuBar className="mobileNavBar" {...menu}>
        <MenuItem {...menu}>
          <Link to="/" className="mobileNavItem">
            ABOUT US
          </Link>
        </MenuItem>
        <MenuItem {...menu}>
          <Link to="/newsPage" className="mobileNavItem">
            NEWS
          </Link>
        </MenuItem>
        <MenuItem {...menu}>
          <Link to="/contactUsPage" className="mobileNavItem">
            CONTACT US
          </Link>
        </MenuItem>
        <MenuItem {...menu}>
          <Link to="/comingSoonPage" className="mobileNavItem">
            MORE
          </Link>
        </MenuItem>

        <SocialMediaGroup
          imgs={[insIcon, wechatIcon, facebookIcon]}
          width="80%"
        />
      </MenuBar>
    </MobileNavMenuWrapper>
  );
};

const Header: FC = () => {
  const [visibale, setVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const menu = useMenuBarState({ orientation: "horizontal" });

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
            <NavBar aria-label="desktop-main-navigation">
              <MenuBar
                className="navMenu"
                {...menu}
                aria-label="navigation-menu"
              >
                <MenuItem {...menu}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem {...menu}>
                  <Link to="/newsPage">NEWS</Link>
                </MenuItem>
                <MenuItem {...menu}>
                  <Link to="https://oseca.square.site/s/appointments">
                    OSE PROGRAM
                  </Link>
                </MenuItem>
                <MenuItem {...menu}>
                  <Link to="/contactUsPage">CONTACT US</Link>
                </MenuItem>
                <MenuItem {...menu}>
                  <Link to="/comingSoonPage">COMING SOON</Link>
                </MenuItem>
              </MenuBar>

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
