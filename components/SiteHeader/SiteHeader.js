import React from 'react';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';
import NavCollapse from '../NavCollapse/NavCollapse';
import NavItems from '../NavItems/NavItems';

export default () => (
  <NavBar inverse={true}>
    <Link href="/"><a>Travis Mair</a></Link>
    <NavCollapse>
      <div />
      <NavItems>
        <a href="/#about">About</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#contact">Contact</a>
      </NavItems>
    </NavCollapse>
  </NavBar>
);
