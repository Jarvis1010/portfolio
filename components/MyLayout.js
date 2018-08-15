import SiteHeader from "./SiteHeader/SiteHeader";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #808080;
`;

const Footer = styled.footer`
  margin-top: 0;
  text-align: center;
  color: white;
  background-color: #222;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Layout = ({ children }) => (
  <AppWrapper>
    <SiteHeader />
    <MainWrapper>{children}</MainWrapper>
    <Footer>JTM © 2016. All Rights Reserved</Footer>
  </AppWrapper>
);

export default Layout;
