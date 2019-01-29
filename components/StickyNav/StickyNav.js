import React from "react";
import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";
import styled from "styled-components";

const NavLink = styled.a`
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colorLinkHover || "blue"};
  }

  &:hover,
  &:active {
    outline: 0;
  }
`;

const NavButton = props => (
  <NavLink
    {...props}
    as="button"
    onClick={() => {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    }}
    href="javascript:void(0)"
  />
);

const StickyNav = () => (
  <NavWrapper id="top">
    <Brand brandName={"Travis Waith-Mair"} href="/" />
    <NavSlider>
      <NavItem>
        <NavButton>About</NavButton>
      </NavItem>
      <NavItem>
        <NavLink href="/#experience">Experience</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/#portfolio">Portfolio</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/#contact">Contact</NavLink>
      </NavItem>
    </NavSlider>
  </NavWrapper>
);

export default StickyNav;
