import styled from "styled-components";

import {
  spacing4,
  spacing8,
  spacing16,
  spacing32,
  spacing64,
  spacing128
} from "../constants/styled-constants";

const allowedSpacings = {
  // fixed vals
  "0": "0",
  "4": spacing4,
  "8": spacing8,
  "16": spacing16,
  "24": "1.5rem",
  "32": spacing32,
  "64": spacing64,
  "128": spacing128,

  // percentage
  ".05": "5%",
  ".10": "10%",
  ".15": "15%",
  ".20": "20%"
};

const handlePaddingFor = pos => ({ size = "32", ...props }) =>
  (props[pos] && allowedSpacings[props[pos]]) || allowedSpacings[size];

const PadBox = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${handlePaddingFor("bottom")};
  padding-left: ${handlePaddingFor("left")};
  padding-top: ${handlePaddingFor("top")};
  padding-right: ${handlePaddingFor("right")};
`;

export default PadBox;
