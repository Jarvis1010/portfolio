import React from "react";
import ProjectList from "../ProjectList/ProjectList";
import ContentSection from "../ContentSection/ContentSection";

export const Portfolio = ({ projectGroups = {} }) => (
  <ContentSection title="Portfolio">
    {projectGroups &&
      Object.keys(projectGroups).map(key => (
        <ProjectList key={key} title={key} projects={projectGroups[key]} />
      ))}
  </ContentSection>
);

export default Portfolio;
