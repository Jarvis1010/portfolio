import { storiesOf, action } from '@kadira/storybook';
import NavBar from './NavBar';
import React from 'react';
import NavCollapse from '../NavCollapse/NavCollapse';
import NavItems from '../NavItems/NavItems';
import NavForm from '../NavForm/NavForm';

const iconImage = 'https://ip.ldschurch.org/app/images/integration-point.svg';

storiesOf('NavBar', module)
  .add('default', () => (
    <NavBar inverse={true} img={iconImage}>
      <NavCollapse>
        <NavItems>
          <a href="#">Home</a>
          <a>Library</a>
          <NavForm onClick={action('Search Button Clicked')} />
        </NavItems>
        <NavItems>
          <div>Welcome Anon!</div>
          <div>logoff</div>
        </NavItems>
      </NavCollapse>
    </NavBar>
  ))
  .add('fixed bottom and inverse', () => (
    <NavBar img={iconImage} inverse={true} fixed="bottom">
      <NavCollapse>
        <NavItems>
          <div>Home</div>
          <div>Library</div>
        </NavItems>
        <NavItems>
          <div>Welcome Anon!</div>
          <div>logoff</div>
        </NavItems>
      </NavCollapse>
    </NavBar>
  ))
  .add('No collapse', () => (
    <NavBar img={iconImage}>
      <NavItems forceRow={true}>
        <div>Home</div>
        <div>Library</div>
      </NavItems>
    </NavBar>
  ))
  .add('No image, collapse, and left only', () => (
    <NavBar>
      <div>Brand</div>
      <NavCollapse>
        <NavItems>
          <div>Home</div>
          <div>Library</div>
        </NavItems>
      </NavCollapse>
    </NavBar>
  ))
  .add('Collapse and right only', () => (
    <NavBar img={iconImage}>
      <NavCollapse>
        <div />
        <NavItems>
          <div>Welcome Anon!</div>
          <div>logoff</div>
        </NavItems>
      </NavCollapse>
    </NavBar>
  ));
