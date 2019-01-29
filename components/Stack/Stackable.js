import styled from "styled-components";

const type = (theme = {}) => {
  const defaultTheme = {
    mediumGrey: "lightgrey",
    darkGrey: "grey",
    black: "black",
    white: "white"
  };
  const finalTheme = { ...defaultTheme, ...theme };
  return {
    light: { "background-color": finalTheme.white, color: finalTheme.black },
    medium: {
      "background-color": finalTheme.mediumGrey,
      color: finalTheme.black
    },
    dark: { "background-color": finalTheme.darkGrey, color: finalTheme.white },
    transparent: { "background-color": "transparent", color: finalTheme.white },
    default: { "background-color": finalTheme.white, color: finalTheme.black }
  };
};

const Stack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${props =>
    Object.entries(type(props.theme)[props.type] || type().default)
      .map(x => x.join(":"))
      .join(";")};
`;

export default Stack;
