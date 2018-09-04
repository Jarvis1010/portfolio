import React from "react";
import styled from "styled-components";
import { withMatchMedia } from "../MatchMedia/MatchMedia";
import Stack from "../Stack/Stack";
import Parallax from "../Parallax/Parallax";
import {
  white,
  breakWidth480,
  fontSize42
} from "../constants/styled-constants";

const Landing = styled(Stack)`
  color: ${white};
  height: 100vh;
  justify-items: center;
`;

const backgroundImage =
  "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";

const LandingTitle = styled.h1`
  align-self: center;
  border: 1px solid white;
  padding: 1em;
  position: relative;
  font-size: ${fontSize42};
  font-weight: bold;
  border-bottom: none;
  &::after {
    content: ${props => `"${props.subtitle}"` || " "};
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    margin: 0 auto -0.8rem auto;
  }
`;

const BottomBorder = styled.div`
  margin: 0;
  padding: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid white;
    width: 7rem;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

const ScrollLink = styled.a`
  color: ${white};
  border: 2px solid ${white};
  padding: 2rem;
  margin-bottom: 200px;
  align-self: end;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    left: 33%;
    top: 33%;
    position: absolute;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-top: 1.5rem solid white;
  }
`;

const LandingComponent = ({ matches }) =>
  matches ? (
    <Parallax backgroundUrl={backgroundImage}>
      <Landing>
        <LandingTitle subtitle="Web Developer">
          Travis Waith-Mair
          <BottomBorder />
        </LandingTitle>
        <ScrollLink href="#about" />
      </Landing>
    </Parallax>
  ) : null;

export default withMatchMedia(`(min-width:${breakWidth480})`)(LandingComponent);
