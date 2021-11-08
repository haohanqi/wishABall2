import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { BasicSection, BasicColor } from '@/components/BasicStyle';

const ComingSoonSection = styled(BasicSection)`
  min-height: 100vh;
`;

const comingSoonPage = () => {
  return (
    <Layout>
      <ComingSoonSection backgroundColor={BasicColor.thirdColor}>
        <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Coming Soon</h1>
        <p style={{ marginTop: '20px', fontSize: '20px' }}>
          We plan to lunch our search platform next year to help our student and
          parents to find best training program
        </p>
      </ComingSoonSection>
    </Layout>
  );
};

export default comingSoonPage;
