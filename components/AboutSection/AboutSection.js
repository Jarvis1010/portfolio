import React from 'react';
import profile from './portfolio.jpg';
import { HR, AboutWrapper, ProfilePic, Description } from './AboutStyles';

export const AboutSection = ({ src, description, title, languages }) => (
  <AboutWrapper>
    <Description>
      {description && <p>{description}</p>}
      {languages && <h3>Programming Languages</h3>}
      {languages && <p>{languages.join(', ')}</p>}
      {description && title && <HR />}
      {title && <h1>{title}</h1>}
    </Description>
    <ProfilePic>
      <img src={profile} alt="Profile Photo" />
    </ProfilePic>
  </AboutWrapper>
);

export default AboutSection;
