import styled from "styled-components";
import {
  mediumGrey,
  darkGrey,
  black,
  white
} from "../constants/styled-constants";

const type = {
  light: { "background-color": white, color: black }, // eslint-disable-line no-use-before-define
  medium: {
    background: `linear-gradient(45deg, ${mediumGrey} 0%, #d0d0d0 100%)`,
    color: black
  }, // eslint-disable-line no-use-before-define
  dark: {
    background: `linear-gradient(45deg, ${darkGrey} 0%, #676767 100%)`,
    color: white
  }, // eslint-disable-line no-use-before-define
  transparent: { "background-color": "transparent", color: white }, // eslint-disable-line no-use-before-define
  default: { "background-color": white, color: black }
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
