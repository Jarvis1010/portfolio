import React from "react";
import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";
import Link from "next/link";

const navs = [
  { nav: "About", href: "/#about" },
  { nav: "Portfolio", href: "/#portfolio" },
  { nav: "Contact", href: "/#contact" },
];

export default () => (
  <NavWrapper>
    <Brand brandName={"Travis Waith-Mair"} href="/" />
    <NavSlider>
      {navs.map(({ nav, href }, i) => (
        <NavItem key={i}>
          <Link href={href}>
            <a>{nav}</a>
          </Link>
        </NavItem>
      ))}
    </NavSlider>
  </NavWrapper>
);
