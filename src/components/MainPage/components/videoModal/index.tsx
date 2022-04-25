import React, { FC } from "react";
import { VideoModalWrapper } from "./style";

type VideModalProps = {
  children: React.ReactNodeArray | React.ReactNode;
  onClick: any;
};

const VideoModal: FC<VideModalProps> = ({ children, onClick }) => (
  <VideoModalWrapper
    onClick={() => {
      onClick();
    }}
  >
    {children}
  </VideoModalWrapper>
);

export default VideoModal;
