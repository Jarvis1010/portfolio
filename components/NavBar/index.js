import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
  background: ${props => props.theme.primaryColor || "grey"};
  min-height: 50px;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  color: ${props => props.theme.white || "white"};
  position: sticky;
  z-index: 6;
  top: 0;
`;

const NavItem = styled.span`
  display: flex;
  color: ${props => props.theme.white || "white"};
  white-space: nowrap;
  & a {
    text-decoration: none;
    color: ${props => props.theme.white || "white"};
  }
  align-self: center;
  margin: ${props => props.theme.spacing8 || "1rem"};
`;

const BrandName = styled.h2`
  font-family: ${props => props.theme.fontFamily || "sans"};
  font-size: ${props => props.theme.fontSize18 || "18px"};
  min-width: auto;
  margin-left: ${props => props.theme.spacing8 || "1rem"};
  white-space: nowrap;
`;

const BrandLink = styled.a`
  align-items: center;
  border: 0;
  color: ${props => props.theme.white || "white"};
  display: flex;
  cursor: pointer;
  text-decoration: none;
  flex-grow: 10;
  margin-right: auto;

  &:hover {
    color: ${props => props.theme.white || "white"};
    text-decoration: none;
  }
`;

const Logo = styled.img`
  max-width: ${props => props.size || "30px"};
  height: auto;
  margin: ${props => props.theme.spacing8 || "1rem"};
`;

const Brand = ({ brandName = "", src = "", href }) => (
  <Link href={href}>
    <BrandLink>
      {src != "" && <Logo src={src} alt={`${brandName} logo`} />}
      {brandName != "" && <BrandName>{brandName}</BrandName>}
    </BrandLink>
  </Link>
);

const NavSlider = styled.div`
  min-height: 50px;
  display: flex;
  flex-flow: row wrap;
  font-size: ${props => props.theme.fontSize18 || "18px"};

  @media (max-width: ${props => props.theme.breakWidth480 || "480px"}) {
    display: ${props => (props.hidden ? "none" : "flex")};
    font-size: ${props => props.theme.fontSize13 || "13px"};
    width: 100%;
    order: 50;
    background: ${props => props.theme.secondaryColor || "grey"};
  }
`;

const Hamburger = styled.button`
  display: none;
  text-align: center;
  text-decoration: none;
  font-size: ${props => props.theme.fontSize18 || "18px"};
  color: ${props => props.theme.white || "white"};
  border: 1px solid ${props => props.theme.white || "white"};
  cursor: pointer;
  background: ${props => props.theme.primaryColor || "inherit"};

  @media screen and (max-width: ${props =>
      props.theme.breakWidth480 || "480px"}) {
    display: inline;
    margin: auto ${props => props.theme.spacing8 || "1rem"};
  }
`;

class Toggle extends React.Component {
  state = { hidden: true };
  updateState = val => this.setState({ hidden: val });
  render() {
    return this.props.children([this.state.hidden, this.updateState]);
  }
}

const NavCollapse = ({ children }) => {
  return (
    <Toggle>
      {([hidden, updateHidden]) => (
        <Fragment>
          <Hamburger onClick={() => updateHidden(!hidden)}>☰</Hamburger>
          <NavSlider hidden={hidden}>{children}</NavSlider>
        </Fragment>
      )}
    </Toggle>
  );
};

export { NavWrapper, NavItem, NavSlider, NavCollapse, Brand };
