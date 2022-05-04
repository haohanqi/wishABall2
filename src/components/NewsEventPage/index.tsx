/* eslint-disable import/no-unresolved */
import React, { FC } from "react";
import NewsSection from "components/MainPage/components/NewsSection";
import MoreNewsSection from "./components/MoreNewsSection";
import MoreEventSection from "./components/MoreEventSection";
import SEO from "../CommonComponents/SEO";

const index: FC = () => (
  <>
    <SEO
      description="Overseas Sports And Education News and Event"
      pathname="newsPages"
      keywords={[
        "OSE news and events Page",
        "Overseas Sports And Education News and Event",
      ]}
    />
    <NewsSection />
    <MoreNewsSection />
    <MoreEventSection />
  </>
);

export default index;
