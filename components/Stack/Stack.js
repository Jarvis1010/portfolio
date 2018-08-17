import styled from "styled-components";
import {
  spacing4,
  spacing8,
  spacing16,
  spacing32,
  spacing64,
  spacing128
} from "../constants/styled-constants";

const gaps = {
  "0": "0",
  "4": spacing4,
  "8": spacing8,
  "16": spacing16,
  "24": "1.5rem",
  "32": spacing32,
  "64": spacing64,
  "128": spacing128,
  default: "0"
};

const Stack = styled.div`
  display: grid;
  grid-gap: ${props => gaps[props.gapSize] || gaps.default};
  grid-auto-columns: 100%;
`;

export default Stack;
