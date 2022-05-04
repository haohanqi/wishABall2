import React, { FC, useState } from "react";
import { Row, Col } from "antd";
import {
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
  useDialogState,
} from "reakit";
import {
  WishSectionWrapper,
  WishInfoWrapper,
  WishImgWrapper,
  WishButtonWrapper,
  PromoBox,
} from "./style";
import SocialMediaGroup from "../../CommonComponents/SocialMediaGroup";
import WishButton from "../../CommonComponents/WishButton";
import { BasicColor } from "../../BasicStyle";
import BasicVideoModal from "./BasicVideoModal";
import wechat from "../../../images/wechat.png";
import ins from "../../../images/ins.png";
import facebook from "../../../images/facebook.png";
import wish from "../../../images/wish.jpg";
import wish2 from "../../../images/wish2.jpg";
import wish3 from "../../../images/wish3.jpg";

const WishSection: FC = () => {
  const modal = useDialogState({ visible: false });
  const openOseKidModal = useDialogState({ visible: false });
  const openOseTeamModal = useDialogState({ visible: false });
  return (
    <WishSectionWrapper backgroundColor={BasicColor.primaryColor}>
      <DialogBackdrop {...modal}>
        <Dialog {...modal} aria-label="video modal">
          <BasicVideoModal
            modal={modal}
            videoSrc="https://www.youtube.com/embed/3l3UR-GjRGQ"
          />
        </Dialog>
      </DialogBackdrop>
      <DialogBackdrop {...openOseKidModal}>
        <Dialog {...openOseKidModal} aria-label="video modal">
          <BasicVideoModal
            modal={openOseKidModal}
            videoSrc="https://www.youtube.com/embed/3Z-izRLX35k"
          />
        </Dialog>
      </DialogBackdrop>
      <DialogBackdrop {...openOseTeamModal}>
        <Dialog {...openOseTeamModal} aria-label="video modal">
          <BasicVideoModal
            modal={openOseTeamModal}
            videoSrc="https://www.youtube.com/embed/TviHrZ2hAEQ"
          />
        </Dialog>
      </DialogBackdrop>
      <Row justify="space-around" align="middle" style={{ minHeight: "100vh" }}>
        <Col xl={6} lg={6} md={16} sm={22} xs={22}>
          <WishInfoWrapper>
            <div className="wishTitle">
              <span>W</span>
              <span>i</span>
              <span style={{ color: "#FBB040" }}>s</span>
              <span>h</span>
            </div>
            <p className="wishDescription">
              Wish a sport supports the community with easy access to sports and
              wellbeing. This program provides resources for community members
              and tools to participate in sports such as a space to play
              organized sports, and training. We are a firm believer in
              investing in young leaders, which through our program, we offer
              opportunities for members to take on leadership roles such as
              coaching and various volunteer opportunities within the
              organization.
            </p>

            <SocialMediaGroup imgs={[wechat, ins, facebook]} mobileHidden />
          </WishInfoWrapper>
        </Col>
        <Col xl={6} lg={6} md={16} sm={24} xs={24}>
          <WishImgWrapper>
            <PromoBox
              backgroundImage={wish}
              height="70%"
              onClick={() => {
                modal.toggle();
              }}
            >
              <h1 className="promoTitle">OSE BASKETBALL</h1>
              <h2 className="promoDes">Oversea Sports and Education</h2>
            </PromoBox>
            <div className="promoRow">
              <PromoBox
                backgroundImage={wish3}
                width="48%"
                height="100%"
                small
                onClick={() => {
                  openOseKidModal.toggle();
                }}
              >
                <h1 className="promoTitle">OBA Kid</h1>
                <h2 className="promoDes">OBA Kids Training</h2>
              </PromoBox>

              <PromoBox
                backgroundImage={wish2}
                width="48%"
                height="100%"
                small
                onClick={() => {
                  openOseTeamModal.toggle();
                }}
              >
                <h1 className="promoTitle">OBA</h1>
                <h2 className="promoDes">Oversea BasketBall Team</h2>
              </PromoBox>
            </div>
          </WishImgWrapper>
        </Col>
        <Col xl={6} lg={6} md={16} sm={24} xs={24}>
          <WishButtonWrapper>
            <WishButton buttonText="Find Your Wish" />
          </WishButtonWrapper>
        </Col>
      </Row>
    </WishSectionWrapper>
  );
};

export default WishSection;
