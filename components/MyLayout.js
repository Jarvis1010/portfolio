import StickyNav from "./StickyNav/StickyNav";
import Parallax from "../components/Parallax/Parallax";
import Stack from "../components/Stack/Stack";
import styled from "styled-components";
import Root from "./Root";
import PageWrapper from "./PageWrapper";
import { darkGrey, white } from "../components/constants/styled-constants";

const Footer = styled.footer`
  margin: 0;
  text-align: center;
  color: white;
  background-color: ${darkGrey};
`;

const Landing = styled(Stack)`
  color: ${white};
  height: 100vh;
  justify-items: center;
`;

const ScrollLink = styled.a`
  color: ${white};
  border: 1px solid ${white};
  padding: 1em;
  margin-bottom: 100px;
  align-self: end;
  text-align: center;
`;

const backgroundImage =
  "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";

const Layout = ({ children }) => (
  <Root>
    <PageWrapper>
      <Parallax backgroundUrl={backgroundImage}>
        <Landing>
          <h1
            style={{
              alignSelf: "center",
              border: "1px solid white",
              padding: "1em"
            }}
          >
            Travis Waith-Mair (Site in Progress)
          </h1>
          <ScrollLink href="#about">V</ScrollLink>
        </Landing>
      </Parallax>
      <StickyNav />
      <main>{children}</main>
      <Footer>JTWM © 2018. All Rights Reserved</Footer>
    </PageWrapper>
  </Root>
);

export default Layout;
