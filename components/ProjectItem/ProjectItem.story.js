import { storiesOf, action } from '@kadira/storybook';
import ProjectItem from './ProjectItem';
import React from 'react';

const item = {
  href: 'https://vote-ster.herokuapp.com/',
  src: 'http://travismair.com/img/Screen%20Shot%202017-03-28%20at%204.40.43%20PM.png',
  alt: 'Screenshot of Vote-ster MEAN stack site',
  desc: 'Vote-Ster Polling site in angular.js',
};

storiesOf('ProjectItem', module).add('default', () => (
  <ProjectItem {...item} />
));
