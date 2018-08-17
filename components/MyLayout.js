import StickyNav from "./StickyNav/StickyNav";
import styled from "styled-components";
import Root from "./Root";
import PageWrapper from "./PageWrapper";
import { darkGrey } from "../components/constants/styled-constants";

const Footer = styled.footer`
  margin: 0;
  text-align: center;
  color: white;
  background-color: ${darkGrey};
`;

const Layout = ({ children }) => (
  <Root>
    <PageWrapper>
      <StickyNav />
      <main>{children}</main>
      <Footer>JTWM © 2018. All Rights Reserved</Footer>
    </PageWrapper>
  </Root>
);

export default Layout;
