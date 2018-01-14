import React from 'react';
import Layout from '../components/MyLayout.js';
import AboutSection from '../components/AboutSection/AboutSection';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import FinalSection from '../components/FinalSection/FinalSection';
import styled from 'styled-components';
import { list, desc, pageMeta, links, portfolio, about } from '../constants';

const ContentSection = styled.section`
  max-width: 900px;
  margin: 0;
`;

const About = ContentSection.extend`
  flex: 0 1 400px;
`;

const Final = styled.section`
   width: 100%;
  margin: 0;
`;

export default props => {
  return (
    <Layout {...props}>
      <About id="about">
        <AboutSection {...about} />
      </About>
      <ContentSection id="portfolio">
        <Portfolio projectGroups={portfolio} />
      </ContentSection>
      <ContentSection id="contact">
        <Contact list={list} message={desc} />
      </ContentSection>
      <Final>
        <FinalSection links={links} />
      </Final>
    </Layout>
  );
};
