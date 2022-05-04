/* eslint-disable import/no-unresolved */
import React, { FC } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import { BasicSection, BasicColor } from "@/components/BasicStyle";
import CustomizedErrorBoundary from "@/components/ErrorBoundary";

const ComingSoonSection = styled(BasicSection)`
  min-height: 100vh;
`;

const comingSoonPage: FC = () => (
  <CustomizedErrorBoundary>
    <Layout>
      <ComingSoonSection backgroundColor={BasicColor.thirdColor}>
        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Coming Soon</h1>
        <p style={{ marginTop: "20px", fontSize: "20px" }}>
          We plan to lunch our search platform next year to help our student and
          parents to find best training program
        </p>
      </ComingSoonSection>
    </Layout>
  </CustomizedErrorBoundary>
);

export default comingSoonPage;
