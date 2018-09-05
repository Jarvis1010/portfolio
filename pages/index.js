import React from "react";
import Layout from "../components/MyLayout.js";
import AboutSection from "../components/AboutSection/AboutSection";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import FinalSection from "../components/FinalSection/FinalSection";
import { list, desc, links, portfolio, about } from "../constants";
import Stack from "../components/Stack/Stack";
import { SectionBoxTitle } from "../components/BoxTitles/BoxTitle";
import Stackable from "../components/Stack/Stackable";

export default () => {
  return (
    <Layout>
      <Stack>
        <Stackable type="light">
          <Stack style={{ paddingTop: "1rem" }}>
            <SectionBoxTitle inverse subtitle="All about me">
              Personal Details
            </SectionBoxTitle>
            <AboutSection {...about} />
          </Stack>
        </Stackable>
        <Stackable type="medium" id="portfolio">
          <Stack style={{ paddingTop: "2rem" }}>
            <SectionBoxTitle inverse subtitle="My Stuff">
              Portfolio
            </SectionBoxTitle>
            <Portfolio projectGroups={portfolio} />
          </Stack>
        </Stackable>
        <Stackable type="dark" id="contact">
          <Stack style={{ paddingTop: "2rem" }}>
            <SectionBoxTitle subtitle="Talk To Me">
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
