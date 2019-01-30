import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 40px;
  border-bottom: 1px solid grey;
  font-size: 14px;
  line-height: 1.42857143;
  text-align: center;
`;

export const ContentSection = props => <Content {...props} />;

export default ContentSection;
