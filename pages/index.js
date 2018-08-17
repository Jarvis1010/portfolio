import React from "react";
import Layout from "../components/MyLayout.js";
import AboutSection from "../components/AboutSection/AboutSection";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import FinalSection from "../components/FinalSection/FinalSection";
import { list, desc, links, portfolio, about } from "../constants";
import Stack from "../components/Stack/Stack";
import Stackable from "../components/Stack/Stackable";

export default () => {
  return (
    <Layout>
      <Stack>
        <Stackable type="light" id="about">
          <AboutSection {...about} />
        </Stackable>
        <Stackable id="portfolio">
          <Portfolio projectGroups={portfolio} />
        </Stackable>
        <Stackable type="dark" id="contact">
          <Contact list={list} message={desc} />
        </Stackable>
        <Stackable>
          <FinalSection links={links} />
        </Stackable>
      </Stack>
    </Layout>
  );
};
