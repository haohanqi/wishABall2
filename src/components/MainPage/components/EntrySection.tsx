import React from 'react';
import { EntrySectionWrapper, CompanyInfo } from './style';
import main from '../../../images/main.jpg';
import { BasicColor } from '../../BasicStyle';
const EntrySection = () => {
  return (
    <EntrySectionWrapper
      backgroundColor={BasicColor.thirdColor}
      imageUrl={main}
      padding="2%"
    >
      <CompanyInfo>
        <div className="companyTitle"></div>
        <div className="companySlogan"></div>
      </CompanyInfo>
    </EntrySectionWrapper>
  );
};

export default EntrySection;
