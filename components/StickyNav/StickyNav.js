import React from "react";
import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";
import styled from "styled-components";
import { colorLinkHover } from "../constants/styled-constants";

const NavLink = styled.a`
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  text-decoration: none;

  &:hover {
    color: ${colorLinkHover};
  }

  &:hover,
  &:active {
    outline: 0;
  }
`;

const StickyNav = () => (
  <NavWrapper id="top">
    <Brand brandName={"Travis Waith-Mair"} href="/" />
    <NavSlider>
      <NavItem>
        <NavLink
          as="button"
          onClick={() => {
            document.querySelector("#inner").scrollTop = window.innerHeight;
          }}
          href="javascript:void(0)"
        >
          About
        </NavLink>
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
