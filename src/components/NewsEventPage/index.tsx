import React from 'react';
import styled from 'styled-components';
import NewsSection from 'components/MainPage/components/NewsSection';
import AdverSection from './components/AdverSection';
import MoreNewsSection from './components/MoreNewsSection';
import MoreEventSection from './components/MoreEventSection';

const news = [
  {
    title: 'Winter Kids Basketball Training',
    date: '2020 03 25',
    blogDes:
      'Winter Kids Basketball Training will happen in this winter happen in this winterhappen in this winter ds Basketball Training ...',
  },
  {
    title: 'Teen Basketball start on Summer,Training, Games',
    date: '2020 03 25',
    blogDes:
      'Winter Kids Basketball Training will happen in this winter happen in this winterhappen in this winter ds Basketball Training ...',
  },
  {
    title: 'Winter Kids Basketball Game',
    date: '2020 03 25',
    blogDes:
      'Winter Kids Basketball Training will happen in this winter happen in this winterhappen in this winter ds Basketball Training ...',
  },
];

const event = [
  {
    title: 'OSE NEW EVENT',
    month: 'Sep',
    date: '24',
  },
  {
    title: 'Teen Basketball start on Summer,Training, Games',
    month: 'Sep',
    date: '10',
  },
  {
    title: 'OSE ONLINE TRAINING',
    month: 'Nov',
    date: '24',
  },
];

const index = () => {
  return (
    <>
      <NewsSection />
      <AdverSection />
      <MoreNewsSection />
      <MoreEventSection />
    </>
  );
};

export default index;
