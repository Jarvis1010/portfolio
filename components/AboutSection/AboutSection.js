import React from "react";
import styled from "styled-components";
import Grid from "../Grid";
import Stack from "../Stack/Stack";
import PadBox from "../PadBox/PadBox";
import { SectionBoxTitle } from "../BoxTitles/BoxTitle";
import { about } from "../constants/constants";

const AboutWrapper = styled(PadBox)`
  scroll-snap-align: start;
  min-height: 100vh;
  display: grid;
`;

const SplitGrid = styled(Grid)`
  margin-top: ${props => props.theme.spacing16 || "1rem"};
  justify-content: space-around;
`;

const Profile = styled.section`
  justify-self: center;
  padding: ${props => props.theme.spacing32 || "2rem"};
  @media (min-width: ${props => props.theme.breakWidth840 || "840px"}) {
    box-shadow: -11px 14px 34px 6px rgba(128, 128, 128, 1);
  }
`;

const Paragraph = styled.p`
  max-width: ${props => props.theme.breakWidth480 || "480px"};
  line-height: 2rem;
`;

const Details = styled(Grid)`
  max-width: ${props => props.theme.breakWidth480 || "480px"};
  justify-items: center;
  justify-self: center;
  padding: ${props => props.theme.spacing32 || "2rem"};
  margin: 0;
  width: 100%;
  @media (min-width: ${props => props.theme.breakWidth840 || "840px"}) {
    box-shadow: -11px 14px 34px 6px rgba(128, 128, 128, 1);
  }
`;

const ContactList = styled(Stack)`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  width: 100%;
  & > li:not(:last-child):after {
    content: "";
    display: block;
    padding: ${props => props.theme.spacing16 || "1rem"};
    border-bottom: 1px solid ${props => props.theme.grey || "grey"};
    top: 0;
    position: absolute;
    width: 90%;
    height: 100%;
  }
`;

const ContactListItem = styled(PadBox)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Email = ({ children, ...props }) => (
  <a {...props} href={`mailto:${children}`}>
    {children}
  </a>
);

const Telephone = ({ children, ...props }) => (
  <a {...props} href={`tel:${children}`}>
    {children}
  </a>
);

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
          <h3>Professional Profile</h3>
          <Paragraph>{about.description}</Paragraph>
        </Profile>
        <Details minWidth={"280px"}>
          <ContactList size="8">
            <ContactListItem size="8">
              <strong>Name: </strong>
              <span>Travis Waith-Mair</span>
            </ContactListItem>
            <ContactListItem size="8">
              <strong>Email: </strong>
              <Email>travis.mair@gmail.com</Email>
            </ContactListItem>
            <ContactListItem size="8">
              <strong>Telephone: </strong>
              <Telephone>(801) 200-7597</Telephone>
            </ContactListItem>
            <ContactListItem size="8">
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
