import React, { FC } from 'react';
import { WishButtonLayout, WishButtonLayoutProps } from './style';
import arrow from '../../images/arrow.png';
import { Link } from 'gatsby';

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
}) => {
  return (
    <WishButtonLayout width={width} height={height}>
      <Link
        to="/comingSoonPage"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
        }}
      >
        {buttonText}
        <img className="arrow" src={arrow} alt="right arrow" />
      </Link>
    </WishButtonLayout>
  );
};

export default WishButton;
