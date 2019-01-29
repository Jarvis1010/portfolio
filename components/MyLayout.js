import StickyNav from "./StickyNav/StickyNav";
import Landing from "../components/Landing/Landing";
import styled, { ThemeProvider } from "styled-components";
import PageWrapper from "./PageWrapper";
import * as theme from "../components/constants/styled-constants";

const Footer = styled.footer`
  margin: 0;
  text-align: center;
  color: ${props => props.theme.white || "white"};
  background-color: ${props => props.theme.darkGrey || "#565656"};
`;

const Layout = ({ children }) => (
  <ThemeProvider
    theme={{ primaryColor: "#BD5751", secondaryColor: theme.grey30, ...theme }}
  >
    <PageWrapper>
      <Landing />
      <StickyNav />
      <main>{children}</main>
      <Footer>JTWM © 2018. All Rights Reserved</Footer>
    </PageWrapper>
  </ThemeProvider>
);

export default Layout;
