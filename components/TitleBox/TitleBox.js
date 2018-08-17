import React from "react";
import styled from "styled-components";

const Box = styled.div`
  font-size: 18px;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  flex: 1 1 400px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

export const TitleBox = ({ title, children }) => (
  <Box>
    <Title>{title}</Title>
    {children}
  </Box>
);

export default TitleBox;
