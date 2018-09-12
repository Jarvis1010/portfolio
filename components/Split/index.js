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
  default: spacing16
};

const fractions = {
  "1/4": "25%",
  "1/3": "33.33%",
  "1/2": "50%",
  "2/3": "66.67%",
  "3/4": "75%",
  default: "50%"
};

const createColumns = ({ fraction }) =>
  `${fractions[fraction] ? fractions[fraction] : fractions.default} 1fr`;

const Split = styled.div`
  display: grid;
  grid-template-columns: ${createColumns};
  grid-gap: ${props => gaps[props.gapSize] || gaps.default};
  width: 100%;
`;

export default Split;
