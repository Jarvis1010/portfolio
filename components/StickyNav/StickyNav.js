import React from "react";
import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";

const StickyNav = () => (
  <NavWrapper id="top">
    <Brand brandName={"Travis Waith-Mair"} href="/" />
    <NavSlider>
      <NavItem>
        <a
          onClick={() => {
            document.querySelector("#inner").scrollTop = window.innerHeight;
          }}
          href="javascript:void(0)"
        >
          About
        </a>
      </NavItem>
      <NavItem>
        <a href="/#experience">Experience</a>
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

export default StickyNav;
