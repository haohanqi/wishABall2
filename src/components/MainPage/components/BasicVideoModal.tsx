import React, { FC } from "react";
import VideoModal from "./videoModal";

type BasicVideoModalProps = {
  open: boolean;
  setOpen: any;
  videoSrc: string;
};

const BasicVideoModal: FC<BasicVideoModalProps> = ({
  open,
  setOpen,
  videoSrc,
}) => (
  <>
    {open && (
      <VideoModal
        onClick={() => {
          setOpen(!open);
        }}
      >
        <iframe
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoModal>
    )}
  </>
);

export default BasicVideoModal;
