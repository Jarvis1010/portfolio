import React from 'react';
import { ItemWrapper, ProjectLink, ScreenShot } from './ProjectItemStyles';

export const ProjectItem = ({ src, href, alt, desc }) => (
  <ItemWrapper>
    <figure>
      <ScreenShot src={src} alt={alt} />
    </figure>
    <ProjectLink href={href}>{desc}</ProjectLink>
  </ItemWrapper>
);

export default ProjectItem;
