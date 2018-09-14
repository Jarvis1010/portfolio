import styled from "styled-components";

export const ListOfLinks = styled.div`
  display: inline-block;
  font-size: 25px;
`;

export const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
  border: 1px solid;
  border-radius: 50%;
  padding: 0.4em 0.7em 0.7em 0.7em;
  margin: 0 0.2em;
  background: inherit;
  &:hover {
    text-decoration: none;
    background: white;
    color: grey;
  }
`;
