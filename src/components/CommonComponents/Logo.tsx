import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LogoWrapper, LogoProps } from "./style";

const Logo: FC<LogoProps> = ({
  height,
  dividerHeight,
  dividerWidth,
  imageHeight,
  imageWidth,
  logoTextSize,
  space,
  small,
}: LogoProps) => (
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
        src="../../images/logo.png"
        alt="OSE Logo"
        width={50}
        height={40}
        loading="eager"
      />
    ) : (
      <StaticImage
        src="../../images/logo.png"
        alt="OSE Logo"
        width={90}
        height={70}
        loading="eager"
      />
    )}
    <div className="divider" />
    <div className="logoText">OSE</div>
  </LogoWrapper>
);

export default Logo;
