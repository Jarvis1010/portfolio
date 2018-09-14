import React from "react";
import styled from "styled-components";
// import Grid from "../Grid";
// import Stack from "../Stack/Stack";
import Split from "../Split";
import { SectionBoxTitle } from "../BoxTitles/BoxTitle";
import PadBox from "../PadBox/PadBox";
// import { about } from "../constants/constants";
// import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

const ExperienceWrapper = styled(PadBox)`
  scroll-snap-align: start;
  min-height: 100vh;
  display: grid;
`;

const Experience = () => (
  <ExperienceWrapper id="experience" size="8" top="64" bottom="32">
    <SectionBoxTitle inverse subtitle="What I have been doing">
      Work Experience
    </SectionBoxTitle>
    <PadBox size="64" top="16">
      <Split fraction="1/3">
        <PadBox style={{ borderRight: "1px solid black" }}>dates</PadBox>
        <PadBox>
          Duis consectetur veniam eiusmod amet aliquip incididunt nostrud
          laboris est.
        </PadBox>
      </Split>
    </PadBox>
  </ExperienceWrapper>
);

export default Experience;
