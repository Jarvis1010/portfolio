import React from "react";
import Layout from "../components/MyLayout.js";
import AboutSection from "../components/AboutSection/AboutSection";
import ExperienceSection from "../components/ExperienceSections/ExperienceSection";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import FinalSection from "../components/FinalSection/FinalSection";
import {
  list,
  desc,
  links,
  portfolio
} from "../components/constants/constants";
import Stack from "../components/Stack/Stack";
import { SectionBoxTitle } from "../components/BoxTitles/BoxTitle";
import Stackable from "../components/Stack/Stackable";

export default () => {
  return (
    <Layout>
      <Stack>
        <Stackable type="light">
          <AboutSection />
        </Stackable>
        <Stackable type="medium">
          <ExperienceSection />
        </Stackable>
        <Stackable type="dark" id="portfolio">
          <Stack style={{ paddingTop: "2rem" }}>
            <SectionBoxTitle subtitle="My Stuff">Portfolio</SectionBoxTitle>
            <Portfolio projectGroups={portfolio} />
          </Stack>
        </Stackable>
        <Stackable type="medium" id="contact">
          <Stack style={{ paddingTop: "2rem" }}>
            <SectionBoxTitle inverse subtitle="Talk To Me">
              Contact Information
            </SectionBoxTitle>
            <Contact list={list} message={desc} />
          </Stack>
        </Stackable>
        <Stackable>
          <FinalSection links={links} />
        </Stackable>
      </Stack>
    </Layout>
  );
};
