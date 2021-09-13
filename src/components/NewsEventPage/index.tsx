import React from 'react';
import NewsSection from 'components/MainPage/components/NewsSection';
// import AdverSection from './components/AdverSection';
import MoreNewsSection from './components/MoreNewsSection';
import MoreEventSection from './components/MoreEventSection';

const index = () => {
  return (
    <>
      <NewsSection />
      <MoreNewsSection />
      <MoreEventSection />
    </>
  );
};

export default index;
