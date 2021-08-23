import React from 'react';
import EntrySection from './components/EntrySection';
import NewsSection from './components/NewsSection';
import WishSection from './components/WishSection';
import AboutUsSection from './components/AboutUsSection';

const MainPage = () => {
  return (
    <>
      <EntrySection />
      <NewsSection />
      <AboutUsSection />
      <WishSection />
    </>
  );
};

export default MainPage;
