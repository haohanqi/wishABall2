import React, { FC } from "react";
import EntrySection from "./components/EntrySection";
import NewsSection from "./components/NewsSection";
import WishSection from "./components/WishSection";
import AboutUsSection from "./components/AboutUsSection";
import SEO from "../CommonComponents/SEO";

const MainPage: FC = () => (
  <>
    <SEO
      title="OSE - Overseas Sports And Education"
      description="OSE serves as a multi-platform organisation which focuses on sports and wellness, sporting news, culture and education"
      keywords={[
        "OSE",
        "Overseas Sports And Education",
        "Child Sports Training",
        "Child Sports Education",
      ]}
    />
    <EntrySection />
    <NewsSection />
    <AboutUsSection />
    <WishSection />
  </>
);

export default MainPage;
