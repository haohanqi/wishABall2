import React, { FC } from "react";
import { DialogStateReturn } from "reakit";
import VideoModal from "./videoModal";

type BasicVideoModalProps = {
  modal: DialogStateReturn;
  videoSrc: string;
};

const BasicVideoModal: FC<BasicVideoModalProps> = ({ videoSrc, modal }) => (
  <>
    {modal.show && (
      <VideoModal
        onClick={() => {
          modal.toggle();
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
