import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display:flex;
  list-style: none;
  &>*{
      padding:0 1em;
  }
  & a{
    text-decoration: none;
    color:inherit;
    &:hover{
        text-decoration: none;
        color:#fff 
    }
}
  @media (max-width: 700px) {
      align-items:center;
      flex-flow:column;
      &>*{
          padding:1em;
      }
  }
`;

export const NavItems = ({ children }) => (
  <ItemWrapper>
    {children}
  </ItemWrapper>
);

export default NavItems;
