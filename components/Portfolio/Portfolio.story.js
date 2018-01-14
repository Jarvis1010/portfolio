import { storiesOf, action } from '@kadira/storybook';
import Portfolio from './Portfolio';
import React from 'react';

import { groups } from './mockData';

storiesOf('Portfolio', module).add('default', () => (
  <Portfolio projectGroups={groups} />
));
