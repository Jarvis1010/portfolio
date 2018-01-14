import { storiesOf, action } from '@kadira/storybook';
import Contact from './Contact';
import React from 'react';

const list = [
  'Justin Travis Mair',
  'travis.mair@gmail.com',
  '(801) 200-7597',
  'Salt Lake City, Utah',
];

const desc =
  'If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.';

storiesOf('Contact', module).add('default', () => (
  <Contact list={list} message={desc} />
));
