import React, { FC } from 'react';
import { LogoWrapper, LogoProps } from './style';
import { StaticImage } from 'gatsby-plugin-image';

const Logo: FC<LogoProps> = ({
  height,
  dividerHeight,
  dividerWidth,
  imageHeight,
  imageWidth,
  logoTextSize,
  space,
  small,
}: LogoProps) => {
  return (
    <LogoWrapper
      height={height}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      dividerHeight={dividerHeight}
      dividerWidth={dividerWidth}
      logoTextSize={logoTextSize}
      space={space}
      small={small}
    >
      {small ? (
        <StaticImage
          src={'../../images/logo.png'}
          alt="OSE Logo"
          width={40}
          height={30}
          loading="eager"
        />
      ) : (
        <StaticImage
          src={'../../images/logo.png'}
          alt="OSE Logo"
          width={90}
          height={70}
          loading="eager"
          imgClassName="loadImage"
        />
      )}
      <div className="divider" />
      <div className="logoText">OSE</div>
    </LogoWrapper>
  );
};

export default Logo;
