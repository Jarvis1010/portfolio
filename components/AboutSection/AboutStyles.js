import styled from "styled-components";
import { darkGrey } from "../constants/styled-constants";

export const AboutWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px;
  background: ${darkGrey};
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  text-align: right;
  & h3 {
    font-size: 18px;
    margin: 10px 0;
  }
`;

export const ProfilePic = styled.figure`
  flex: 1 1 300px;

  & img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 100%;
    margin: auto;
  }
`;

export const HR = styled.hr`
  border: 0;
  border-top: 3px solid;
  &:after {
    content: "< / >";
    display: inline-block;
    position: relative;
    top: -15px;
    padding: 0 3px;
    background: #aaa;
    color: white;
    font-size: 18px;
  }
`;

export const Description = styled.section`
  flex: 1 1 300px;
`;
