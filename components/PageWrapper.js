import React from "react";
import styled from "styled-components";
import Normalize from "./Normalize";
import {
  white,
  breakWidthMax,
  breakWidth480
} from "./constants/styled-constants";

const Outer = styled.div`
  background-color: rgb(247, 248, 248);
  padding: 0;
  max-width: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  background: ${white};
  margin: 0 auto;
  max-width: ${breakWidthMax};
  overflow-x: hidden;
  perspective: 2px;
  transform-style: preserve-3d;
  scroll-snap-type: y proximity;
  overflow-y: auto;
  height: 100vh;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  @media (max-width: ${breakWidth480}) {
    scroll-padding-top: 64px;
  }
`;

export default ({ children }) => (
  <Outer>
    <Normalize />
    <Inner id="inner">{children}</Inner>
  </Outer>
);
