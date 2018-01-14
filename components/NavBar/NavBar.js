import React from 'react';
import { NavWrapper, Icon, IconAnchor } from './NavBarStyles';

export const NavBar = ({ className, children, img, href = '', ...props }) => (
  <NavWrapper {...props}>
    {img &&
      <IconAnchor disabled={href === ''} href={href}>
        <Icon src={img} />
      </IconAnchor>}
    {children}
  </NavWrapper>
);

export default NavBar;
