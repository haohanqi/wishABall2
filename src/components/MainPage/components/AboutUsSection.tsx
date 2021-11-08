import React, { FC } from 'react';
import { Row, Col } from 'antd';
import Logo from '../../CommonComponents/Logo';
import {
  AboutUsWrapper,
  AboutUsTitleWrapper,
  AboutUsContentWrapper,
  ImageItem,
} from './style';
import { BasicColor } from '../../BasicStyle';
import entrySection from '../../../images/entrySection.jpg';
import readSection from '../../../images/read.jpg';

import { BiSearchAlt2 } from 'react-icons/bi';
import { RiUserSearchFill, RiTeamFill } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';

const AboutUsSection = () => {
  type WorkWithUsItemProps = {
    title: string;
    des: string;
  };

  const WorkWithUsItem: FC<WorkWithUsItemProps> = ({
    title,
    des,
    children,
  }: {
    title: string;
    des: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className="workWithUsItem">
        <div className="icon">{children}</div>
        <div className="contentWrapper">
          <div className="itemTitle">{title}</div>
          <div className="itemDes">{des}</div>
        </div>
      </div>
    );
  };

  return (
    <AboutUsWrapper backgroundColor={BasicColor.primaryColor}>
      <Row justify="space-around" align="top">
        <Col xl={8} lg={0} md={0} sm={0} xs={0}>
          <AboutUsTitleWrapper>
            <div>
              <Logo
                height={65}
                imageHeight={65}
                imageWidth={65}
                dividerHeight={45}
                dividerWidth={3}
                logoTextSize={3.5}
                space={25}
                small={false}
              />
              <div className="logoSlogan">Play and Learn Anywhere, Anytime</div>
            </div>

            <div className="verticalWrapper">
              <div className="verticalDivider"></div>
              <div className="verticalText">OVERSEA SPORTS & EDUCATION</div>
            </div>
          </AboutUsTitleWrapper>
        </Col>

        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <AboutUsContentWrapper>
            <div className="aboutUsIntroWrapper">
              <h1 className="aboutUsIntroTitle">ABOUT US</h1>
              <p className="aboutUsIntroDes">
                OSE [Overseas Sports and Education Inc.] serves as a
                multi-platform organization which focuses on sports and
                wellness; sporting news; culture and education; as well as
                providing resources for studying abroads. At OSE, we are a
                reliable and trustful platform to find all useful resources.
              </p>
            </div>

            <div className="aboutUsIntroImageWrapper">
              <ImageItem
                startRow={'1'}
                endRow={'2'}
                startCol={'1'}
                endCol={'2'}
                mobileStartCol={'1'}
                mobileEndCol={'3'}
                mobileStartRow={'1'}
                mobileEndRow={'3'}
                backgroundImage={entrySection}
              >
                <div className="imageContentWrapper">
                  <h3 className="imageCoverTilte">Wish A Sport</h3>
                  <p className="imageCoverDes">Find a sport you like to do</p>
                </div>
              </ImageItem>
              <ImageItem
                startRow={'2'}
                endRow={'3'}
                startCol={'1'}
                endCol={'2'}
                mobileStartCol={'3'}
                mobileEndCol={'5'}
                mobileStartRow={'1'}
                mobileEndRow={'3'}
                backgroundImage={readSection}
              >
                <div className="imageContentWrapper">
                  <h3 className="imageCoverTilte">Wish A Book</h3>
                  <p className="imageCoverDes">
                    Find Subject you like to learn
                  </p>
                </div>
              </ImageItem>
              <div className="imgItem-3">
                <h3>Wish A Dream</h3>
              </div>
              <div className="imgItem-4">
                <h3>Wish A Win</h3>
              </div>
              <div className="imgItem-5">
                <h3>Wish A Team</h3>
              </div>
            </div>

            <div className="workWithUsWrapper">
              <Row justify="space-between" align="middle">
                <Col xl={5} lg={5} md={12} sm={12} xs={11}>
                  <WorkWithUsItem
                    title="Job Opportunity"
                    des="This is a short description"
                  >
                    {<BiSearchAlt2 />}
                  </WorkWithUsItem>
                </Col>
                <Col xl={5} lg={5} md={12} sm={12} xs={11}>
                  <WorkWithUsItem
                    title="Partnership"
                    des="This is a short description"
                  >
                    {<FaHandshake />}
                  </WorkWithUsItem>
                </Col>
                <Col xl={5} lg={5} md={12} sm={12} xs={11}>
                  <WorkWithUsItem
                    title="Ad & Sponsorship"
                    des="This is a short description"
                  >
                    {<RiTeamFill />}
                  </WorkWithUsItem>
                </Col>
                <Col xl={5} lg={5} md={12} sm={12} xs={11}>
                  <WorkWithUsItem
                    title="Contact Us"
                    des="This is a short description"
                  >
                    {<RiUserSearchFill />}
                  </WorkWithUsItem>
                </Col>
              </Row>
            </div>
          </AboutUsContentWrapper>
        </Col>
      </Row>
    </AboutUsWrapper>
  );
};

export default AboutUsSection;
