import React from "react";
import styled from "styled-components";
// import Grid from "../Grid";
// import Stack from "../Stack/Stack";
import { SectionBoxTitle } from "../BoxTitles/BoxTitle";
import PadBox from "../PadBox/PadBox";
// import { about } from "../constants/constants";
// import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

const ExperienceWrapper = styled(PadBox)`
  scroll-snap-align: start;
`;

const Experience = () => (
  <ExperienceWrapper id="experience" size="8" top="64" bottom="32">
    <SectionBoxTitle inverse subtitle="What I have been doing">
      Work Experience
    </SectionBoxTitle>
  </ExperienceWrapper>
);

export default Experience;
