/* eslint-disable no-shadow */
import styled, { createGlobalStyle } from 'styled-components';

// global style definitions
export const GlobalStyle = createGlobalStyle`
  body{
    width:100%;
    box-sizing: border-box;
    margin:0; 
     font-family: 'Oswald', sans-serif;    
     h1,h2,h3,h4,h5,h6,p{
      margin:0;
      padding:0;
    }

    .ant-carousel .slick-dots li{
      margin:30px 100px;
    }


    .ant-carousel .slick-dots li button {
      width:15px;
      height:15px;
      border-radius: 100%;
    	background: #EFEFEF;
      opacity: 1;
    }

    .ant-carousel .slick-dots li.slick-active button {
	    opacity: 1;
	    background: black;
    } 
 }
`;

// basic style--------------------------------------
export enum BasicColor {
  primaryColor = '#FFFFFF',
  secondaryColor = '#747474',
  thirdColor = '#FAFAFA',
  highlightTextColor = '#000000',
}

export const LargeTitle = `
font-size: 7rem
`;

export const MediumTitle = `
font-size: 2.5rem
`;

export const SmallTitle = `
font-size: 1.4rem
`;

export const SmallText = `
font-size: 0.85rem;
`;

// basic types--------------------------------------
type BasicSectionProps = {
  backgroundColor: BasicColor;
  margin?: string;
  padding?: string;
  imageUrl?: string;
};

// basic container----------------------------------
export const BasicSection = styled.section<BasicSectionProps>`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding: ${(props) => (props.padding ? props.padding : '2.5%')};
  background-image: url(${(props) => (props.imageUrl ? props.imageUrl : null)});
  background-repeat: no-repeat;
  background-size: cover;
`;
