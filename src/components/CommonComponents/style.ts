import styled from 'styled-components';
import { BasicColor, SmallTitle, SmallText, MediumTitle } from '../BasicStyle';
import { SocialMediaGroupProps } from '../CommonComponents/SocialMediaGroup';
import { Sliders } from './AdverSlider';
// types
type HeaderProps = {
  backgroundColor: BasicColor;
};

export type LogoProps = {
  height: number;
  imageHeight: number;
  imageWidth: number;
  dividerWidth: number;
  dividerHeight: number;
  logoTextSize: number;
  space: number;
  small: boolean;
};

type languageTransButtonProps = {
  mobileHidden: boolean;
};

// Naviagtion-----------------------------------------

export const HeaderWrapper = styled.section<HeaderProps>`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  min-height: 100px;
  width: 100%;
  padding: 0 2.5%;
  background-color: ${(props) => props.backgroundColor};
  z-index: 1;
  overflow: hidden;

  .mobileNavBarWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .navHamIcon {
    ${MediumTitle};
    color: ${BasicColor.secondaryColor};
    font-weight: bold;
  }

  @media only screen and (min-width: 769px) {
    .navHamIcon {
      display: none;
    }
  }

  @media only screen and (max-width: 1000px) {
    .hbar {
      display: none;
    }
  }
`;

export const LogoWrapper = styled.div<LogoProps>`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height + 'px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .divider {
    width: ${(props) => props.dividerWidth + 'px'};
    height: ${(props) => props.dividerHeight + 'px'};
    background-color: ${BasicColor.highlightTextColor};
    margin: ${(props) => props.space + 'px'};
  }
  .logoText {
    font-size: ${(props) => props.logoTextSize + 'rem'};
    font-weight: 500;
    color: ${BasicColor.highlightTextColor};
  }

  @media only screen and (max-width: 480px) {
    .logoImage {
      width: ${(props) => props.imageWidth + 'px'};
      height: ${(props) => props.imageHeight + 'px'};
    }
    .divider {
      width: ${(props) => props.dividerWidth + 'px'};
      height: ${(props) => props.dividerHeight + 'px'};
      margin: ${(props) => props.space + 'px'};
    }
    .logoText {
      font-size: ${(props) => props.logoTextSize + 'rem'};
    }
  }
`;

// Desktop version NavBar
export const NavBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .navText {
    ${SmallText};
    color: ${BasicColor.secondaryColor};
    cursor: pointer;
    &:hover {
      color: #707070;
      font-weight: 500;
      font-size: 1rem;
    }
    transition: all 0.3s linear;
  }

  .languageTransButton {
    ${SmallText};
    height: 30px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
      background-color: ${BasicColor.secondaryColor};
      color: ${BasicColor.primaryColor};
    }
    transition: all 0.3s linear;
  }

  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
    .navText {
      display: none;
    }
    .languageTransButton {
      display: none;
    }
  }
`;

export const LanguageTransButton = styled.div<languageTransButtonProps>`
  ${SmallText};
  width: 40px;
  height: 30px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    background-color: ${BasicColor.secondaryColor};
    color: ${BasicColor.primaryColor};
  }
  transition: all 0.3s linear;
  @media only screen and (max-width: 1000px) {
    display: ${(props) => (props.mobileHidden ? 'none' : 'flex')};
  }
`;

export const MobileNavMenuWrapper = styled.nav`
  display: none;
  width: 200px;
  height: 100vh;
  background-color: #fafafa;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  transform: translateX(220px);
  .mobileCloseButton {
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;
  }
  .mobileNavBar {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .mobileNavItem {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #747474;
  }
`;
// Footer-----------------------------------------
export const FooterWrapper = styled.footer`
  padding: 3% 1%;
  background-color: #eff0f2;
  box-sizing: border-box;
  margin-top: 5%;

  .contentWrapper {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footerInfoWrapper {
    width: 100%;
    display: flex;
    flex: 3;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footerTitle {
    ${SmallTitle};
    font-weight: 900;
    margin-bottom: 10px;
    color: ${BasicColor.secondaryColor};
  }

  .footerText {
    ${SmallText};
    margin-bottom: 2px;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${BasicColor.secondaryColor};
  }

  .copyRight {
    ${SmallText};
    font-family: 'Source Sans Pro', sans-serif;
    color: ${BasicColor.secondaryColor};
    text-align: center;
    color: #c8c8c8;
  }

  @media only screen and (max-width: 480px) {
    .footerInfoWrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: space-around;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 5%;
    .contentWrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: space-around;
    }
  }
`;

export const FooterLogoSection = styled.div`
  flex: 3;
  width: 100%;
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logoSlogan {
    ${SmallText};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: ${BasicColor.secondaryColor};
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
    letter-spacing: 2px;
  }

  .socialMediaWrapper {
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  .socialIcon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  @media only screen and (max-width: 480px) {
    min-height: 300px;
  }
`;
export const FooterInfo = styled.div`
  flex: 2;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  a {
    color: #747474;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterWishWrapper = styled.div`
  flex: 3;
  width: 100%;
  min-height: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;

  .wishTitle {
    ${MediumTitle};
    color: ${BasicColor.secondaryColor};
    font-weight: 900;
    margin-bottom: 8%;
  }

  .wishInfo {
    width: 100%;
    margin-top: 8%;
    text-align: left;
  }

  @media only screen and (max-width: 480px) {
    align-items: center;
    width: 90%;
    padding-left: 0;
    .wishInfo {
      text-align: center;
    }
  }
`;

// social media groups
export const SocialMediaGroupWrapper = styled.div<SocialMediaGroupProps>`
  width: ${(props) => (props.width ? props.width : '90%')};
  height: ${(props) => (props.height ? props.height : '60px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    display: ${(props) => (props.mobileHidden ? 'none' : 'flex')};
  }
`;
export const SocialMediaItem = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: contain;
  @media only screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

// Wish Button
export type WishButtonLayoutProps = {
  height?: string;
  width?: string;
};
export const WishButtonLayout = styled.div<WishButtonLayoutProps>`
  width: ${(props) => (props.width ? props.width : '85%')};
  height: ${(props) => (props.height ? props.height : '60px')};
  display: flex;
  justify-content: center;
  align-items: center;
  ${SmallText};
  color: ${BasicColor.secondaryColor};
  border: 2px solid #fbb040;
  border-radius: 15px;
  text-align: center;
  box-shadow: #d2d2d2 0 20px 20px;
  cursor: pointer;
  background: linear-gradient(to right, #fbb040 50%, #fafafa 40%);
  background-size: 205% 100%;
  background-position: right bottom;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    ${SmallTitle};
  }

  .arrow {
    object-fit: contain;
    height: 50%;
    width: 30px;
    margin-left: 40%;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    .arrow {
      margin-left: 50%;
    }
  }
`;

export const SliderContainer = styled.div<Sliders>`
  width: ${(props) => (props.width ? props.width * 100 + 'vw' : 100 + '%')};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  overflow: hidden;
  transform: translateX(
    -${(props) => (100 / props.width) * props.activeIndex}%
  );
  translate: transform ease-out ${(props) => props.time}s;
`;

export const SliderItem = styled.div`
  width: 100vw;
  text-align: center;
  flex-shrink: 0;
  color: #6e6e6e;
  letter-spacing: 2px;
`;
