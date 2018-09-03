import React from "react";
import ContactList from "../ContactList/ContactList";
import ContentSection from "../ContentSection/ContentSection";
import styled from "styled-components";

const FlexItem = styled.p`
  flex: 1 1 300px;
  margin: 0 1em;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Contact = ({ list, message }) => (
  <ContentSection title="Contact">
    <FlexWrapper>
      <ContactList list={list} />
      <FlexItem>{message}</FlexItem>
    </FlexWrapper>
  </ContentSection>
);

export default Contact;
