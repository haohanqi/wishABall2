import React, { FC } from 'react';
import { WishButtonLayout, WishButtonLayoutProps } from './style';
import arrow from '../../images/arrow.png';

type WishButtonProps = WishButtonLayoutProps & {
  buttonText: string;
};

const WishButton: FC<WishButtonProps> = ({ buttonText, height, width }) => {
  return (
    <WishButtonLayout width={width} height={height}>
      {buttonText}
      <img className="arrow" src={arrow} />
    </WishButtonLayout>
  );
};

export default WishButton;
