/* eslint-disable react/require-default-props */
import React, { FC } from "react";
import { Link } from "gatsby";
import { WishButtonLayout, WishButtonLayoutProps } from "./style";
import arrow from "../../images/arrow.png";

type WishButtonProps = WishButtonLayoutProps & {
  buttonText: string;
  height?: string;
  width?: string;
};

const WishButton: FC<WishButtonProps> = ({
  buttonText,
  height,
  width,
}: {
  buttonText: string;
  height?: string;
  width?: string;
}) => (
  <WishButtonLayout width={width} height={height}>
    <Link
      to="/comingSoonPage"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      {buttonText}
      <img className="arrow" src={arrow} alt="right arrow" />
    </Link>
  </WishButtonLayout>
);

export default WishButton;
