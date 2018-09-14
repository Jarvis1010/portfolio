import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: space-around;
`;

const ListHeader = styled.h2`
  min-width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

export const ProjectList = ({ projects = [], title }) => (
  <ListWrapper>
    {title && <ListHeader>{title}</ListHeader>}
    {projects.map(project => (
      <ProjectItem key={project.desc} {...project} />
    ))}
  </ListWrapper>
);

export default ProjectList;
