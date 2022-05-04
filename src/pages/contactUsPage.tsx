/* eslint-disable import/no-unresolved */
import React, { FC } from "react";
import Layout from "components/Layout";
import ContactUsPage from "components/ContactUsPage";
import CustomizedErrorBoundary from "@/components/ErrorBoundary";

const contactUsPage: FC = () => (
  <CustomizedErrorBoundary>
    <Layout>
      <ContactUsPage />
    </Layout>
  </CustomizedErrorBoundary>
);

export default contactUsPage;
