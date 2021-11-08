import React, { useState } from 'react';
import { Row, Col } from 'antd';
import {
  WishSectionWrapper,
  WishInfoWrapper,
  WishImgWrapper,
  WishButtonWrapper,
  PromoBox,
} from './style';
import SocialMediaGroup from '../../CommonComponents/SocialMediaGroup';
import WishButton from '../../CommonComponents/WishButton';
import { BasicColor } from '../../BasicStyle';
import BasicVideoModal from './BasicVideoModal';
import wechat from '../../../images/wechat.png';
import ins from '../../../images/ins.png';
import facebook from '../../../images/facebook.png';
import wish from '../../../images/wish.jpg';
import wish2 from '../../../images/wish2.jpg';
import wish3 from '../../../images/wish3.jpg';

const WishSection = () => {
  const [open, setOpen] = useState(false);
  const [openOseKidModal, setOpenOseKidModal] = useState(false);
  const [openOseTeamModal, setOpenTeamKidModal] = useState(false);

  return (
    <WishSectionWrapper backgroundColor={BasicColor.primaryColor}>
      <BasicVideoModal
        open={open}
        setOpen={setOpen}
        videoSrc="https://www.youtube.com/embed/3l3UR-GjRGQ"
      />
      <BasicVideoModal
        open={openOseKidModal}
        setOpen={setOpenOseKidModal}
        videoSrc="https://www.youtube.com/embed/3Z-izRLX35k"
      />
      <BasicVideoModal
        open={openOseTeamModal}
        setOpen={setOpenTeamKidModal}
        videoSrc="https://www.youtube.com/embed/TviHrZ2hAEQ"
      />
      <Row justify="space-around" align="middle" style={{ minHeight: '100vh' }}>
        <Col xl={6} lg={6} md={16} sm={22} xs={22}>
          <WishInfoWrapper>
            <div className="wishTitle">
              <span>W</span>
              <span>i</span>
              <span style={{ color: '#FBB040' }}>s</span>
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

            <SocialMediaGroup
              imgs={[wechat, ins, facebook]}
              mobileHidden={true}
            />
          </WishInfoWrapper>
        </Col>
        <Col xl={6} lg={6} md={16} sm={24} xs={24}>
          <WishImgWrapper>
            <PromoBox
              backgroundImage={wish}
              height="70%"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="promoTitle">OSE BASKETBALL</div>
              <div className="promoDes">Oversea Sports and Education</div>
            </PromoBox>
            <div className="promoRow">
              <PromoBox
                backgroundImage={wish3}
                width="48%"
                height="100%"
                small={true}
                onClick={() => {
                  setOpenOseKidModal(true);
                }}
              >
                <div className="promoTitle">OBA Kid</div>
                <div className="promoDes">OBA Kids Training</div>
              </PromoBox>
              <PromoBox
                backgroundImage={wish2}
                width="48%"
                height="100%"
                small={true}
                onClick={() => {
                  setOpenTeamKidModal(true);
                }}
              >
                <div className="promoTitle">OBA</div>
                <div className="promoDes">Oversea BasketBall Team</div>
              </PromoBox>
            </div>
          </WishImgWrapper>
        </Col>
        <Col xl={6} lg={6} md={16} sm={24} xs={24}>
          <WishButtonWrapper>
            <WishButton buttonText="Find Your Wish"></WishButton>
          </WishButtonWrapper>
        </Col>
      </Row>
    </WishSectionWrapper>
  );
};

export default WishSection;
