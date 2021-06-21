import React from 'react';
import { EntrySectionWrapper, CompanyInfo } from './style';
import entrySection from '../../../images/entrySection.jpg';
import { BasicColor } from '../../BasicStyle';
const EntrySection = () => {
  return (
    <EntrySectionWrapper
      backgroundColor={BasicColor.thirdColor}
      imageUrl={entrySection}
      padding="2%"
    >
      <CompanyInfo>
        <div className="companyTitle">
          OVERSEAS <br /> SPORTS & EDUCATION
        </div>
        <div className="companySlogan">PLAY AND LEARN ANYWHERE ANYTIME</div>
      </CompanyInfo>
    </EntrySectionWrapper>
  );
};

export default EntrySection;
