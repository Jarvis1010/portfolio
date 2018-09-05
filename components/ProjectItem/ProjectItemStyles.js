import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  flex: 0 1 380px;
  margin: 1em;
`;

export const ProjectLink = styled.a`
  margin: 5px;
  white-space: normal;
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  text-decoration: none;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
`;

export const ScreenShot = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
