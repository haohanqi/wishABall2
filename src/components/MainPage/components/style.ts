import styled from 'styled-components';
import {
  BasicSection,
  LargeTitle,
  MediumTitle,
  SmallTitle,
  SmallText,
  BasicColor,
} from '../../BasicStyle';

// Entry Section style
export const EntrySectionWrapper = styled(BasicSection)`
  position: relative;
  @media only screen and (max-width: 480px) {
    margin-top: 130px;
    height: 300px;
    min-height: 300px;
    background-size: contain;
  }
`;

export const CompanyInfo = styled.div`
  position: absolute;
  bottom: 200px;
  right: 40px;
  text-align: right;
  color: ${BasicColor.primaryColor};
  font-weight: 900;
  .companyTitle {
    ${LargeTitle};
    line-height: 1.25;
    letter-spacing: -1px;
  }
  .companySlogan {
    ${MediumTitle};
  }
  @media only screen and (max-width: 480px) {
    top: -120px;
    left: 10px;
    height: 120px;
    text-align: left;
    color: ${BasicColor.secondaryColor};
    .companyTitle {
      font-size: 1.5rem;
    }
    .companySlogan {
      font-size: 1rem;
    }
  }
`;

//News Section styled
export const NewSectionWrapper = styled(BasicSection)`
  position: relative;
`;

export const NewsSectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  ${MediumTitle};
  font-weight: 700;
  color: ${BasicColor.highlightTextColor};
  margin-bottom: 2rem;
`;

type NewsPanel = {
  backgroundImage: string;
};

export const NewsPanelWrapper = styled.div<NewsPanel>`
  width: 80%;
  padding: 2.5%;
  position: relative;
  height: 500px;
  margin: 20px 0px;
  border-radius: 20px;
  box-sizing: border-box;

  a {
    color: black;
  }

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${(props) =>
      props.backgroundImage ? props.backgroundImage : null});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    opacity: 0.75;
    z-index: -1;
  }

  .centerWrapper {
    width: 100%;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .infoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 5%;
  }

  .panelTitle {
    font-size: 5rem;
    font-weight: 700;
  }
  .panelDate {
    ${SmallText};
    font-family: 'Source Sans Pro', sans-serif;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    .centerWrapper {
      min-height: 180px;
    }
    .panelTitle {
      font-size: 2rem;
    }
    .infoWrapper {
      z-index: 2;
    }

    &:after {
      z-index: 1;
    }
  }
`;

export const SeeMoreButton = styled.a`
  display: block;
  ${SmallText};
  color: black;
  font-weight: 700;
  color: #8c8c8c;
  margin-top: 30px;
`;

// Wish section
export const WishSectionWrapper = styled(BasicSection)``;

export const BasicWishInfoWrapper = styled.div`
  width: 100%;
  height: 460px;
  box-sizing: border-box;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 480px) {
    justify-content: flex-start;
  }
`;
export const WishInfoWrapper = styled(BasicWishInfoWrapper)`
  .wishTitle {
    font-size: 8rem;
    font-weight: 700;
    line-height: 80%;
    margin-bottom: 5%;
  }

  .wishDescription {
    width: 90%;
    ${SmallText};
    line-height: 2;
    color: ${BasicColor.secondaryColor};
  }

  @media only screen and (max-width: 480px) {
    height: 100%;
    margin-bottom: 2rem;
    .wishTitle {
      margin-bottom: 3rem;
      font-size: 6rem;
    }
    .wishDescription {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const WishImgWrapper = styled(BasicWishInfoWrapper)`
  .promoRow {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const WishButtonWrapper = styled(BasicWishInfoWrapper)`
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    height: 200px;
    justify-content: flex-start;
  }
`;

type PromoBoxProps = {
  width?: string;
  height: string;
  small?: boolean;
  backgroundImage: string;
};

export const PromoBox = styled.div<PromoBoxProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => props.height};
  box-sizing: border-box;
  position: relative;
  ${(props) => (props.small ? 'text-align:center' : 'text-align:left')};
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.small ? 'center' : 'flex-end')};
  color: white;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    transition: all 0.4s linear;
  }

  .promoTitle {
    width: 100%;
    ${(props) => (props.small ? `${SmallText}` : `${SmallTitle}`)};
    font-weight: 600;
    ${(props) => (props.small ? 'margin-bottom:15px' : 'margin-bottom:20px')};
    transition: all 0.4s linear;
    z-index: 1;
  }

  .promoDes {
    width: 100%;
    ${(props) => (props.small ? 'font-size:0.65rem' : `${SmallText}`)};
    transition: all 0.4s linear;
    z-index: 1;
  }

  &:hover {
    &:after {
      transform: scale(1.2);
    }
    .promoTitle {
      transform: translateY(-20px);
    }
    .promoDes {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

// aboutUs Section
export const AboutUsWrapper = styled(BasicSection)``;

export const AboutUsTitleWrapper = styled.div`
  width: 100%;
  min-height: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  .verticalWrapper {
    width: 30%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: 80px;
  }
  .verticalDivider {
    height: 200px;
    width: 1px;
    margin-bottom: 60px;
    background-color: ${BasicColor.secondaryColor};
  }
  .verticalText {
    color: #8c8c8c;
    width: 500px;
    height: 50px;
    text-align: center;
    font-size: 2.3rem;
    transform: rotate(-90deg);
    font-weight: bold;
    line-height: 50px;
    margin-top: 200px;
  }
  .logoSlogan {
    text-align: center;
    font-size: 0.6rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: ${BasicColor.secondaryColor};
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
    letter-spacing: 2px;
  }
`;

export const AboutUsContentWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .aboutUsIntroWrapper {
    width: 100%;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-bottom: 1rem;
  }

  .aboutUsIntroTitle {
    ${MediumTitle};
    margin-bottom: 30px;
    font-weight: 700;
  }

  .aboutUsIntroDes {
    width: 70%;
    ${SmallText};
    line-height: 2.5;
    text-align: center;
    color: #8c8c8c;
  }

  .aboutUsIntroImageWrapper {
    width: 85%;
    min-height: 380px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 45% 35% 20%;
    row-gap: 10px;
    column-gap: 5px;
    margin-bottom: 30px;
    overflow: hidden;
  }

  .imgItem-3 {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-color: #848484;
  }

  .imgItem-4 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    background-color: #848484;
  }

  .imgItem-5 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    background-color: #848484;
  }

  .workWithUsWrapper {
    width: 90%;
    min-height: 100px;
  }

  .workWithUsItem {
    width: 100%;
    height: 100px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  .icon {
    width: 20%;
    height: 45px;
    font-size: 2rem;
    color: #8c8c8c;
  }
  .contentWrapper {
    width: 60%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
  }

  .itemTitle {
    ${SmallText};
    color: ${BasicColor.secondaryColor};
    font-weight: 700;
  }

  .itemDes {
    color: ${BasicColor.secondaryColor};
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 480px) {
    .aboutUsIntroDes {
      width: 90%;
    }
    .aboutUsIntroImageWrapper {
      width: 95%;
      min-height: 500px;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(4, 1fr);
    }

    .imgItem-3 {
      grid-column: 1 / 4;
      grid-row: 3 / 7;
      background-color: #848484;
      border-radius: 1rem;
    }

    .imgItem-4 {
      grid-column: 4 / 5;
      grid-row: 3 / 5;
      background-color: #848484;
      border-radius: 1rem;
    }

    .imgItem-5 {
      grid-column: 4 / 5;
      grid-row: 5 / 7;
      background-color: #848484;
      border-radius: 1rem;
    }
    .workWithUsWrapper {
      width: 100%;
    }
  }
`;

type ImageItemProps = {
  startRow: string;
  endRow: string;
  mobileStartCol: string;
  mobileEndCol: string;
  mobileStartRow: string;
  mobileEndRow: string;
  startCol: string;
  endCol: string;
  backgroundImage: string;
};

export const ImageItem = styled.div<ImageItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2%;
  grid-row: ${(props) => props.startRow} / ${(props) => props.endRow};
  grid-column: ${(props) => props.startCol} / ${(props) => props.endCol};
  position: relative;
  overflow: hidden;
  border-radius: 1rem;

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    content: '';
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    transition: all 0.4s linear;
  }

  .imageContentWrapper {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1;
  }

  .imageCoverTilte {
    ${SmallTitle};
    color: ${BasicColor.primaryColor};
    transition: all 0.4s linear;
  }

  .imageCoverDes {
    width: 80%;
    ${SmallText};
    color: ${BasicColor.primaryColor};
    opacity: 0;
    transition: all 0.4s linear;
  }

  &:hover {
    &:after {
      transform: scale(1.2);
      opacity: 0.7;
    }
    .imageCoverTilte {
      transform: translateY(-20px);
    }
    .imageCoverDes {
      transform: translateY(-20px);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 480px) {
    .imageCoverTilte {
      transform: translateY(40px);
    }
    grid-column: ${(props) => props.mobileStartCol} /
      ${(props) => props.mobileEndCol};
    grid-row: ${(props) => props.mobileStartRow} /
      ${(props) => props.mobileEndRow};
  }
`;
