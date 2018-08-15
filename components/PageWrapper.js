import React from "react";
import styled from "styled-components";
import { white, breakWidthMax } from "./constants/styled-constants";

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
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

export default ({ children }) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);
