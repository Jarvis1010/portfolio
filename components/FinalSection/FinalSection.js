import React from 'react';
import TitleBox from '../TitleBox/TitleBox';
import LinkList from '../LinkList/LinkList';
import styled from 'styled-components';

const SectionWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: #aaa;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 40px;
`;

export const FinalSection = ({ className, links }) => (
  <SectionWrapper>
    <TitleBox title="ABOUT THIS PAGE">
      <p>Made with love and patience by Justin Travis Mair</p>
    </TitleBox>
    <TitleBox title="AROUND THE WEB">
      <LinkList links={links} />
    </TitleBox>
  </SectionWrapper>
);

export default FinalSection;
