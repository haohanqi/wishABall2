/* eslint-disable import/no-unresolved */
import React, { FC } from "react";
import Layout from "components/Layout";
import CustomizedErrorBoundary from "@/components/ErrorBoundary";
import NewsEventPage from "../components/NewsEventPage";

const NewsPage: FC = () => (
  <CustomizedErrorBoundary>
    <Layout>
      <NewsEventPage />
    </Layout>
  </CustomizedErrorBoundary>
);

export default NewsPage;
