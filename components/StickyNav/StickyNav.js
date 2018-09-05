import React from "react";
import { withMatchMedia } from "../MatchMedia/MatchMedia";
import { breakWidth480 } from "../constants/styled-constants";
import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";

const StickyNav = ({ matches }) => (
  <NavWrapper id="top">
    <Brand brandName={"Travis Waith-Mair"} href="/" />
    <NavSlider>
      <NavItem>
        <a
          onClick={() => {
            document.querySelector("#inner").scrollTop = matches
              ? 0
              : window.innerHeight;
          }}
          href="javascript:void(0)"
        >
          About
        </a>
      </NavItem>
      <NavItem>
        <a href="/#portfolio">Portfolio</a>
      </NavItem>
      <NavItem>
        <a href="/#contact">Contact</a>
      </NavItem>
    </NavSlider>
  </NavWrapper>
);

export default withMatchMedia(`(max-width:${breakWidth480})`)(StickyNav);
