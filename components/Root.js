import React from "react";
import { ThemeProvider } from "styled-components";
import StringsProvider from "./Translate";
import Normalize from "./Normalize";

const Root = ({ theme = {}, strings = {}, ...props }) => (
  <StringsProvider strings={strings}>
    <ThemeProvider theme={theme}>
      <Normalize {...props} />
    </ThemeProvider>
  </StringsProvider>
);

export default Root;
