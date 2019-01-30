import styled from "styled-components";

const allowedSpacings = (theme = {}) => {
  const defaultTheme = {
    spacing4: "0.25rem",
    spacing8: "0.5rem",
    spacing16: "1rem",
    spacing32: "2rem",
    spacing64: "4rem",
    spacing128: "8rem"
  };
  const finalTheme = { ...defaultTheme, ...theme };

  return {
    // fixed vals
    "0": "0",
    "4": finalTheme.spacing4,
    "8": finalTheme.spacing8,
    "16": finalTheme.spacing16,
    "24": "1.5rem",
    "32": finalTheme.spacing32,
    "64": finalTheme.spacing64,
    "128": finalTheme.spacing128,

    // percentage
    ".05": "5%",
    ".10": "10%",
    ".15": "15%",
    ".20": "20%"
  };
};

const handlePaddingFor = pos => ({ size = "32", ...props }) =>
  (props[pos] && allowedSpacings()[props[pos]]) || allowedSpacings()[size];

const PadBox = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${handlePaddingFor("bottom")};
  padding-left: ${handlePaddingFor("left")};
  padding-top: ${handlePaddingFor("top")};
  padding-right: ${handlePaddingFor("right")};
`;

export default PadBox;
