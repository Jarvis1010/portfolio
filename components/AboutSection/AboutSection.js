import React from "react";
import profile from "./portfolio.jpg";
import styled from "styled-components";
import Grid from "../Grid";
import PadBox from "../PadBox/PadBox";
import { breakWidth480 } from "../constants/styled-constants";

const ProfilePic = Grid.withComponent("figure").extend`
  max-height: ${breakWidth480};
`;

const Description = styled.div`
  text-align: right;
`;

const HR = styled.hr`
  border: 0;
  border-top: 3px solid;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: 50%;
  margin-left: auto;
  max-width: ${breakWidth480};
`;

export const AboutSection = ({
  description = "",
  title = "",
  languages = []
}) => (
  <PadBox size="64">
    <Grid minWidth={"400px"}>
      <Description>
        <p>{description}</p>
        <h3>Programming Languages</h3>
        <p>{languages.join(", ")}</p>
        <HR />
        <h1>{title}</h1>
      </Description>
      <ProfilePic>
        <Image src={profile} alt="Profile Photo" />
      </ProfilePic>
    </Grid>
  </PadBox>
);

export default AboutSection;
