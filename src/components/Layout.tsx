import React, { FC } from 'react';
import Header from './CommonComponents/Header';
import { GlobalStyle,BasicSection,BasicColor } from './BasicStyle';
import Footer from './CommonComponents/Footer';
import styled from 'styled-components'

const Layout: FC = ({ children }) => (
  <PageLayoutWrapper backgroundColor={BasicColor.primaryColor} padding="0px">
    <GlobalStyle/>
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </PageLayoutWrapper>
);

export default Layout;

const PageLayoutWrapper = styled(BasicSection)`
  overflow:hidden;
`