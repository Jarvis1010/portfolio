import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
    margin: 0;
    padding: 0;
    font-size: 24px;
    flex: 1 1 300px;
    margin: 0 1em;
`;

const ListItem = styled.li`
  margin: 0;
        border-bottom: 1px solid;
        padding: 0.5em 1em;
        &:last-child {
            border-bottom: none;
        }
`;

export const ContactList = ({ list }) => (
  <ListWrapper>
    {list &&
      list.map(listitem => <ListItem key={listitem}>{listitem}</ListItem>)}
  </ListWrapper>
);

export default ContactList;
