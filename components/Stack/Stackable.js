import styled from "styled-components";
import {
  lightGrey,
  mediumGrey,
  darkGrey,
  black,
  white
} from "../constants/styled-constants";

const type = {
  light: { "background-color": lightGrey, color: black }, // eslint-disable-line no-use-before-define
  medium: { "background-color": mediumGrey, color: black }, // eslint-disable-line no-use-before-define
  dark: { "background-color": darkGrey, color: white }, // eslint-disable-line no-use-before-define
  transparent: { "background-color": "transparent", color: white }, // eslint-disable-line no-use-before-define
  default: { "background-color": lightGrey, color: black }
};

const Stack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${props =>
    Object.entries(type[props.type] || type.default)
      .map(x => x.join(":"))
      .join(";")};
`;

export default Stack;
