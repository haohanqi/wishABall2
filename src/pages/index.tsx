import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <MainPage />
  </Layout>
);

export default Home;
