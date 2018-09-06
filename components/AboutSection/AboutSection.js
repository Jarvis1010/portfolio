import React from "react";
import styled from "styled-components";
import Grid from "../Grid";
import PadBox from "../PadBox/PadBox";
import { string, array } from "prop-types";

const ProfilePic = styled(Grid)`
  max-height: 320px;
  margin: 0;
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
  margin: auto;
  max-width: 320px;
`;

const AboutSection = ({ description = "", title = "", languages = [] }) => (
  <PadBox size="64">
    <Grid minWidth={"280px"}>
      <Description>
        <p>{description}</p>
        <h3>Programming Languages</h3>
        <p>{languages.join(", ")}</p>
        <HR />
        <h1>{title}</h1>
      </Description>
      <ProfilePic as="figure">
        <Image
          src="static/components/AboutSection/portfolio.jpg"
          alt="Profile Photo"
        />
      </ProfilePic>
    </Grid>
  </PadBox>
);

AboutSection.propTypes = {
  description: string,
  title: string,
  language: array
};

export default AboutSection;
