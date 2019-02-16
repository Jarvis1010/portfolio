import React from "react";
import styled from "styled-components";
import Stack from "../Stack/Stack";
import Split from "../Split";
import { SectionBoxTitleInverse } from "../BoxTitles/BoxTitle";
import PadBox from "../PadBox/PadBox";

const ExperienceWrapper = styled(PadBox)`
  scroll-snap-align: start;
  min-height: 100vh;
  display: grid;
`;

const Experience = () => (
  <ExperienceWrapper id="experience" size="8" top="64" bottom="32">
    <SectionBoxTitleInverse subtitle="What I have been doing">
      Work Experience
    </SectionBoxTitleInverse>
    <PadBox size="64" top="16">
      <Split fraction="1/4">
        <PadBox style={{ borderRight: "1px solid black" }}>
          <Stack>
            <span>April 2018 - Present</span>
            <hr style={{ width: "100%" }} />
            <span>Pluralsight</span>
            <span>Software Engineer</span>
          </Stack>
        </PadBox>
        <PadBox>
          Duis consectetur veniam eiusmod amet aliquip incididunt nostrud
          laboris est. Aute commodo est ipsum laborum occaecat.
        </PadBox>
      </Split>
      <hr />
      <Split fraction="1/4">
        <PadBox style={{ borderRight: "1px solid black" }}>
          <Stack>
            <span>May 2017 - April 2018</span>
            <hr style={{ width: "100%" }} />
            <span>The Church of Jesus Christ of Latter-day Saints</span>
            <span>Front End Engineer</span>
          </Stack>
        </PadBox>
        <PadBox>
          Duis consectetur veniam eiusmod amet aliquip incididunt nostrud
          laboris est. Aute commodo est ipsum laborum occaecat.
        </PadBox>
      </Split>
    </PadBox>
  </ExperienceWrapper>
);

export default Experience;
