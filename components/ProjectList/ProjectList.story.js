import { storiesOf, action } from '@kadira/storybook';
import ProjectList from './ProjectList';
import React from 'react';

const projects = [
  {
    href: 'https://vote-ster.herokuapp.com/',
    src: 'http://travismair.com/img/Screen%20Shot%202017-03-28%20at%204.40.43%20PM.png',
    alt: 'Screenshot of Vote-ster MEAN stack site',
    desc: 'Vote-Ster MEAN Stack Site',
  },
  {
    href: 'https://la-vida-nocturna.herokuapp.com/',
    src: 'http://travismair.com/img/Screen%20Shot%202017-04-10%20at%2010.55.50%20AM.png?raw=1',
    alt: 'Screenshot of La Vida Nocturna',
    desc: 'Nightlife coordinator Mean Stack Site',
  },

  {
    href: 'https://realtimestock.herokuapp.com/',
    src: 'http://travismair.com/img/Screen%20Shot%202017-04-13%20at%204.52.49%20PM.png?raw=1',
    alt: 'Screenshot of real time stock web socket stack site',
    desc: 'Web Socket Stock Chart Site',
  },

  {
    href: 'https://vote-ster.herokuapp.com/',
    src: 'http://travismair.com/img/Screen%20Shot%202017-04-10%20at%2011.01.44%20AM.png?raw=1',
    alt: 'Screenshot of Unix Timestamp API',
    desc: 'Unix Time Stamp API',
  },
  {
    href: 'https://fast-caverns-82057.herokuapp.com/',
    src: 'http://travismair.com/img/Screen%20Shot%202017-03-28%20at%208.17.19%20PM.png?raw=1',
    alt: 'Screenshot of tiny-url API',
    desc: 'Tiny-Url API',
  },
];

storiesOf('ProjectList', module).add('default', () => (
  <ProjectList title="Full Stack Projects and APIs" projects={projects} />
));
