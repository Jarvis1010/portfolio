import {storiesOf, action} from '@kadira/storybook';
import NavItems from './NavItems';
import React from 'react';

storiesOf ('NavItems', module)
  .add ('default', () => <NavItems />)
