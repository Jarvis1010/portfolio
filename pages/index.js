import React from "react";
import Head from "next/head";
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
import Stackable, {
  StackableLight,
  StackableMedium,
  StackableDark
} from "../components/Stack/Stackable";
import { pageMeta } from "../components/constants/constants";

export default () => {
  return (
    <Stack>
      <Head>
        <title>{pageMeta.title}</title>
      </Head>
      <StackableLight>
        <AboutSection />
      </StackableLight>
      <StackableMedium>
        <ExperienceSection />
      </StackableMedium>
      <StackableDark id="portfolio">
        <Stack style={{ paddingTop: "2rem" }}>
          <SectionBoxTitle subtitle="My Stuff">Portfolio</SectionBoxTitle>
          <Portfolio projectGroups={portfolio} />
        </Stack>
      </StackableDark>
      <StackableMedium id="contact">
        <Stack style={{ paddingTop: "2rem" }}>
          <SectionBoxTitle inverse subtitle="Talk To Me">
            Contact Information
          </SectionBoxTitle>
          <Contact list={list} message={desc} />
        </Stack>
      </StackableMedium>
      <Stackable>
        <FinalSection links={links} />
      </Stackable>
    </Stack>
  );
};
