import React, { FC } from "react";
import { VideoModalWrapper } from "./style";

type VideModalProps = {
  onClick: () => void;
  children: React.ReactNodeArray | React.ReactNode;
};

const VideoModal: FC<VideModalProps> = ({ children, onClick }) => (
  <VideoModalWrapper onClick={onClick}>{children}</VideoModalWrapper>
);

export default VideoModal;
