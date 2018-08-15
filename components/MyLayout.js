import SiteHeader from "./SiteHeader/SiteHeader";
import styled from "styled-components";
import { lightGrey } from "../components/constants/styled-constants";

const AppWrapper = styled.div`
  background-color: ${lightGrey};
`;

const Footer = styled.footer`
  margin: 0;
  text-align: center;
  color: white;
  background-color: #222;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Layout = ({ children }) => (
  <AppWrapper>
    <SiteHeader />
    <MainWrapper>{children}</MainWrapper>
    <Footer>JTWM © 2018. All Rights Reserved</Footer>
  </AppWrapper>
);

export default Layout;
