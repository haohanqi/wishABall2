import React from 'react';
import Layout from 'components/Layout';
import NewsEventPage from '../components/NewsEventPage';
import { graphql } from 'gatsby';

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <NewsEventPage />
    </Layout>
  );
};

export default NewsPage;
