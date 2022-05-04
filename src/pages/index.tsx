import React from "react";
import { PageProps } from "gatsby";
import CustomizedErrorBoundary from "@/components/ErrorBoundary";
import Layout from "../components/Layout";
import MainPage from "../components/MainPage";

const Home: React.FC<PageProps> = () => (
  <CustomizedErrorBoundary>
    <Layout>
      <MainPage />
    </Layout>
  </CustomizedErrorBoundary>
);

export default Home;
