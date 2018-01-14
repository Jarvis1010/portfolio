import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
     background-color: #eee;
    box-sizing: border-box;
    color: #666;
    padding: 40px;
    border-bottom: 1px solid grey;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    text-align: center;
`;

const HR = styled.hr`
    border: 0;
    border-top: 3px solid;
    text-align: center;
    width: 60%;
    margin-bottom: 30px;
    &:after {
        content: '< / >';
        display: inline-block;
        position: relative;
        top: -15px;
        padding: 0 3px;
        background: #eee;
        color: #666;
        font-size: 18px;
    }
`;

const Title = styled.h2`
    font-size: 30px;
`;

export const ContentSection = ({ title, children }) => (
  <Content>
    <Title>{title}</Title>
    <HR />
    {children}
  </Content>
);

export default ContentSection;
