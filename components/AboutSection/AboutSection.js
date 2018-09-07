import React from "react";
import styled from "styled-components";
import Grid from "../Grid";
import Stack from "../Stack/Stack";
import { SectionBoxTitle } from "../BoxTitles/BoxTitle";
import PadBox from "../PadBox/PadBox";
import { about } from "../constants/constants";
import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

const AboutWrapper = styled(PadBox)`
  scroll-snap-align: start;
`;

const SplitGrid = styled(Grid)`
  margin-top: ${spacing16};
  justify-content: space-around;
`;

const Profile = styled.section`
  justify-self: center;
`;

const Paragraph = styled.p`
  max-width: ${breakWidth480};
  line-height: 2rem;
`;

const Details = styled(Grid)`
  max-width: ${breakWidth480};
  justify-items: center;
  margin: 0;
`;

const ContactList = styled(Stack)`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  width: 100%;
  & > li:not(:last-child):after {
    content: "";
    display: block;
    padding: ${spacing16};
    border-bottom: 1px solid ${grey};
    top: 0;
    position: absolute;
    width: 100%;
  }
`;

const ContactListItem = styled(PadBox)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Email = styled.a.attrs({ href: props => `mailto:${props.children}` })``;

const Telephone = styled.a.attrs({ href: props => `tel:${props.children}` })``;

const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: 50%;
  margin: auto;
  max-width: 280px;
`;

const AboutSection = () => (
  <AboutWrapper size="8" top="64" bottom="32">
    <SectionBoxTitle inverse subtitle="All about me">
      Personal Details
    </SectionBoxTitle>
    <PadBox size="0" top="16">
      <SplitGrid minWidth={"280px"}>
        <Profile>
          <h3>Profesional Profile</h3>
          <Paragraph>{about.description}</Paragraph>
        </Profile>
        <Details minWidth={"280px"}>
          <ContactList size="8" as="ul">
            <ContactListItem size="8" as="li">
              <strong>Name:</strong> Travis Waith-Mair
            </ContactListItem>
            <ContactListItem size="8" as="li">
              <strong>Email:</strong>
              <Email> travis.mair@gmail.com</Email>
            </ContactListItem>
            <ContactListItem size="8" as="li">
              <strong>Telephone:</strong>
              <Telephone> (801) 200-7597</Telephone>
            </ContactListItem>
            <ContactListItem size="8" as="li">
              <strong>Location:</strong> Salt Lake City, Utah
            </ContactListItem>
          </ContactList>
          <Image src="static/images/profile.png" alt="Profile Photo" />
        </Details>
      </SplitGrid>
    </PadBox>
  </AboutWrapper>
);

export default AboutSection;
