import React from 'react';
import NewsSection from 'components/MainPage/components/NewsSection';
import MoreNewsSection from './components/MoreNewsSection';
import MoreEventSection from './components/MoreEventSection';
import SEO from '../CommonComponents/SEO';

const index = () => {
  return (
    <>
      <SEO
        pathname="newsPages"
        keywords={[
          'OSE',
          'OSE newsPage',
          'OSE news and events',
          'OSE News And Events Page',
          'Overseas Sports And Education News',
          'Overseas Sports And Education Events',
          'OSE News',
          'OSE Event',
        ]}
      />
      <NewsSection />
      <MoreNewsSection />
      <MoreEventSection />
    </>
  );
};

export default index;
