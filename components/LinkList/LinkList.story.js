import { storiesOf, action } from '@kadira/storybook';
import LinkList from './LinkList';
import React from 'react';

const links = [
  { href: 'https://github.com/Jarvis1010', content: 'github' },
  { href: 'https://twitter.com/want2code', content: 'twitter' },
  {
    href: 'https://www.linkedin.com/in/travis-mair-2b709447',
    content: 'linkedin',
  },
];

storiesOf('LinkList', module).add('default', () => <LinkList links={links} />);
