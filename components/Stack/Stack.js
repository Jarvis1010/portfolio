import styled from "styled-components";

const gaps = (theme = {}) => {
  const defaultTheme = {
    spacing4: "0.4rem",
    spacing8: "0.8rem",
    spacing16: "1rem",
    spacing32: "2rem",
    spacing64: "4rem",
    spacing128: "8rem"
  };
  const finalTheme = { ...defaultTheme, ...theme };
  return {
    "0": "0",
    "4": finalTheme.spacing4,
    "8": finalTheme.spacing8,
    "16": finalTheme.spacing16,
    "24": "1.5rem",
    "32": finalTheme.spacing32,
    "64": finalTheme.spacing64,
    "128": finalTheme.spacing128,
    default: "0"
  };
};

const Stack = styled.div`
  display: grid;
  grid-gap: ${props =>
    gaps(props.theme)[props.gapSize] || gaps(props.theme).default};
  grid-auto-columns: 100%;
`;

export default Stack;
