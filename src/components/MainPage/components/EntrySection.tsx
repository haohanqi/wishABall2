import React, { FC } from "react";
import { EntrySectionWrapper } from "./style";
import main from "../../../images/main.jpg";
import { BasicColor } from "../../BasicStyle";

const EntrySection: FC = () => (
  <EntrySectionWrapper backgroundColor={BasicColor.thirdColor} padding="0%">
    <img
      src={main}
      style={{ width: "100%", height: "100%" }}
      alt="oversea education and sports"
    />
  </EntrySectionWrapper>
);

export default EntrySection;
