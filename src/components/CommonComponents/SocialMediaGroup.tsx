import React, { FC } from 'react';
import { SocialMediaGroupWrapper, SocialMediaItem } from './style';

export type SocialMediaGroupProps = {
  imgs?: string[];
  width?: string;
  height?: string;
  mobileHidden?: boolean;
};

const SocialMediaGroup: FC<SocialMediaGroupProps> = ({
  imgs,
  width,
  height,
}: SocialMediaGroupProps) => {
  return (
    <SocialMediaGroupWrapper width={width} height={height}>
      {imgs.map((src) => (
        <SocialMediaItem key={src} src={src} />
      ))}
    </SocialMediaGroupWrapper>
  );
};

export default SocialMediaGroup;
