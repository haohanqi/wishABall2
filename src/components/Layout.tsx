import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "./CommonComponents/Header";
import { GlobalStyle, BasicSection, BasicColor } from "./BasicStyle";
import Footer from "./CommonComponents/Footer";

const PageLayoutWrapper = styled(BasicSection)`
  overflow: hidden;
`;

const Layout: FC = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <PageLayoutWrapper backgroundColor={BasicColor.primaryColor} padding="0px">
    <GlobalStyle />
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </PageLayoutWrapper>
);

export default Layout;
