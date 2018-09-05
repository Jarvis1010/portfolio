import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  grey20,
  grey30,
  white,
  fontSize18,
  spacing8,
  sans,
  breakWidth480
} from "../constants/styled-constants";

const NavWrapper = styled.nav`
  background: ${props =>
    props.theme.primaryColor ? props.theme.primaryColor : grey20};
  min-height: 50px;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  color: ${props => (props.theme.white ? props.theme.white : white)};
  position: sticky;
  z-index: 6;
  top: 0;
`;

const NavItem = styled.span`
  display: flex;
  font-size: ${fontSize18};
  color: ${props => (props.theme.white ? props.theme.white : white)};
  white-space: nowrap;
  & a {
    text-decoration: none;
    color: ${props => (props.theme.white ? props.theme.white : white)};
  }
  align-self: center;
  margin: ${spacing8};
`;

const BrandName = styled.h2`
  font-family: ${props =>
    props.theme.fontFamily ? props.theme.fontFamily : sans};
  font-size: ${fontSize18};
  min-width: auto;
  margin-left: ${spacing8};
  white-space: nowrap;
`;

const BrandLink = styled.a`
  align-items: center;
  border: 0;
  color: ${props => (props.theme.white ? props.theme.white : white)};
  display: flex;
  cursor: pointer;
  text-decoration: none;
  flex-grow: 10;
  margin-right: auto;
  &:hover {
    color: ${props => (props.theme.white ? props.theme.white : white)};
    text-decoration: none;
  }
`;

const Logo = styled.img`
  max-width: ${props => (props.size ? props.size : "30px")};
  height: auto;
  margin: ${spacing8};
`;

const Brand = ({ brandName, src, href }) => (
  <Link href={href}>
    <BrandLink>
      {src && (
        <Logo src={src} alt={`${brandName ? brandName + " " : ""}logo`} />
      )}
      {brandName && <BrandName>{brandName}</BrandName>}
    </BrandLink>
  </Link>
);

const NavSlider = styled.div`
  min-height: 50px;
  display: flex;
  @media (max-width: ${breakWidth480}) {
    display: ${props => (props.hidden ? "none" : "flex")};
    width: 100%;
    order: 50;
    background: ${props =>
      props.theme.secondaryColor ? props.theme.secondaryColor : grey30};
  }
`;

const Hamburger = styled.button`
  display: none;
  text-align: center;
  text-decoration: none;
  font-size:${fontSize18};
  color: ${props => (props.theme.white ? props.theme.white : white)};
  border: 1px solid ${props => (props.theme.white ? props.theme.white : white)};
  cursor: pointer;
  background: ${props =>
    props.theme.primaryColor ? props.theme.primaryColor : "inherit"};
  }
  @media screen and (max-width: ${breakWidth480}) {
    display: inline;
    margin:auto ${spacing8};
`;

class NavCollapse extends React.Component {
  state = { hidden: true };

  handleClick = () => this.setState(state => ({ hidden: !state.hidden }));

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Hamburger onClick={this.handleClick}>☰</Hamburger>
        <NavSlider {...this.state}>{children}</NavSlider>
      </Fragment>
    );
  }
}

export { NavWrapper, NavItem, NavSlider, NavCollapse, Brand };
