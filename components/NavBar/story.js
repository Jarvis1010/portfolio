import React from "react";
import { storiesOf } from "@storybook/react";
import { NavWrapper, NavItem, Brand, NavSlider, NavCollapse } from "./index";
import Link from "next/link";

storiesOf("NavBar", module)
  .add("NavWrapper", () => <NavWrapper />)
  .add("WithBrandOnly", () => (
    <NavWrapper>
      <Brand brandName={"Blue Moon Backup"} href={"/"} />
    </NavWrapper>
  ))
  .add("withIconOnly", () => (
    <NavWrapper>
      <Brand
        src={
          "https://bluemoonbackup.com/wp-content/themes/Karma/images/_global/custom-logo-9.png"
        }
        href="/"
      />
    </NavWrapper>
  ))
  .add("withIconandBrand", () => (
    <NavWrapper>
      <Brand
        brandName={"Blue Moon Backup"}
        src={
          "https://bluemoonbackup.com/wp-content/themes/Karma/images/_global/custom-logo-9.png"
        }
        href="/"
      />
    </NavWrapper>
  ))
  .add("withSlider", () => (
    <NavWrapper>
      <Brand
        brandName={"Blue Moon Backup"}
        src={
          "https://bluemoonbackup.com/wp-content/themes/Karma/images/_global/custom-logo-9.png"
        }
        href="/"
      />
      <NavSlider>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
      </NavSlider>
      <NavItem>Testing</NavItem>
    </NavWrapper>
  ))
  .add("withCollapse", () => (
    <NavWrapper>
      <Brand
        brandName={"Blue Moon Backup"}
        src={
          "https://bluemoonbackup.com/wp-content/themes/Karma/images/_global/custom-logo-9.png"
        }
        href="/"
      />
      <NavCollapse>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <a>test</a>
          </Link>
        </NavItem>
      </NavCollapse>
    </NavWrapper>
  ));
