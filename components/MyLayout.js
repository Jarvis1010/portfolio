import StickyNav from "./StickyNav/StickyNav";
import Parallax from "../components/Parallax/Parallax";
import { withMatchMedia } from "../components/MatchMedia/MatchMedia";
import Stack from "../components/Stack/Stack";
import styled from "styled-components";
import Root from "./Root";
import PageWrapper from "./PageWrapper";
import {
  darkGrey,
  white,
  breakWidth480
} from "../components/constants/styled-constants";

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

const backgroundImage =
  "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";

const LandingTitle = styled.h1`
  align-self: center;
  border: 1px solid white;
  padding: 1em;
  position: relative;
  font-weight: bold;
  border-bottom: none;
  &::after {
    content: ${props => `"${props.subtitle}"` || " "};
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    margin: 0 auto -0.8rem auto;
  }
`;

const BottomBorder = styled.div`
  margin: 0;
  padding: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid white;
    width: 4rem;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

const ScrollLink = styled.a`
  color: ${white};
  border: 2px solid ${white};
  padding: 2rem;
  margin-bottom: 200px;
  align-self: end;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  &::after {
    content: "";
    width: 0;
    height: 0;
    left: 33%;
    top: 33%;
    position: absolute;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-top: 1.5rem solid white;
  }
`;

const Layout = ({ children, matches }) => (
  <Root>
    <PageWrapper>
      {matches && (
        <Parallax backgroundUrl={backgroundImage}>
          <Landing>
            <LandingTitle subtitle="Web Developer">
              Travis Waith-Mair
              <BottomBorder />
            </LandingTitle>
            <ScrollLink href="#about" />
          </Landing>
        </Parallax>
      )}
      <StickyNav />
      <main>{children}</main>
      <Footer>JTWM © 2018. All Rights Reserved</Footer>
    </PageWrapper>
  </Root>
);

export default withMatchMedia(`(min-width:${breakWidth480})`)(Layout);
