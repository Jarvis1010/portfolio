import React from "react";
import { ThemeProvider } from "styled-components";
import StringsProvider from "./Translate";
import Normalize from "./Normalize";

const Root = ({ theme = {}, strings = {}, children }) => (
  <StringsProvider strings={strings}>
    <Normalize />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StringsProvider>
);

export default Root;
