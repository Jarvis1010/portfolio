import StickyNav from "./StickyNav/StickyNav";
import styled from "styled-components";
import Root from "./Root";
import PageWrapper from "./PageWrapper";

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
`;

const Layout = ({ strings = {}, theme = {}, children }) => (
  <Root>
    <PageWrapper>
      <StickyNav />
      <MainWrapper>{children}</MainWrapper>
      <Footer>JTWM © 2018. All Rights Reserved</Footer>
    </PageWrapper>
  </Root>
);

export default Layout;
