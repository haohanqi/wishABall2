import React, { FC } from 'react';
import { LogoWrapper, LogoProps } from './style';
import OSELogo from '../../images/logo.png';

const Logo: FC<LogoProps> = ({
  height,
  dividerHeight,
  dividerWidth,
  imageHeight,
  imageWidth,
  logoTextSize,
  space,
}) => {
  return (
    <LogoWrapper
      height={height}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      dividerHeight={dividerHeight}
      dividerWidth={dividerWidth}
      logoTextSize={logoTextSize}
      space={space}
    >
      <img className="logoImage" src={OSELogo} alt="OSE Logo" />
      <div className="divider" />
      <div className="logoText">OSE</div>
    </LogoWrapper>
  );
};

export default Logo;
