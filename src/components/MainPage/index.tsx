import React from 'react';
import EntrySection from './components/EntrySection';
import NewsSection from './components/NewsSection';
import WishSection from './components/WishSection';
import AboutUsSection from './components/AboutUsSection';
import SEO from '../CommonComponents/SEO';

const MainPage = () => {
  return (
    <>
      <SEO
        keywords={[
          'OSE Main Page',
          'Overseas Sports And Education',
          'OSE news',
          'OSE About us',
          'OSE Wish',
          'OSE Contact us',
        ]}
      />
      <EntrySection />
      <NewsSection />
      <AboutUsSection />
      <WishSection />
    </>
  );
};

export default MainPage;
