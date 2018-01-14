import { storiesOf, action } from '@kadira/storybook';
import NavCollapse from './NavCollapse';
import React from 'react';

storiesOf('NavCollapse', module).add('default', () => (
  <NavCollapse><div>Nav Left</div><div>Nav Right</div></NavCollapse>
));
