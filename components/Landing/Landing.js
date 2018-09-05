import React from "react";
import styled from "styled-components";
import { withMatchMedia } from "../MatchMedia/MatchMedia";
import Stack from "../Stack/Stack";
import Parallax from "../Parallax/Parallax";
import { BoxH1 } from "../BoxTitles/BoxTitle";
import { white, breakWidth480 } from "../constants/styled-constants";

const Landing = styled(Stack)`
  color: ${white};
  height: 100vh;
  justify-items: center;
`;

const backgroundImage = "/static/images/background.jpeg";

const ScrollLink = styled.a`
  color: ${white};
  border: 2px solid ${white};
  padding: 2rem;
  margin-bottom: 200px;
  align-self: end;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

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

class LandingComponent extends React.Component {
  componentDidMount() {
    if (this.props.matches) this.scroll();
  }
  componentDidUpdate() {
    if (this.props.matches) this.scroll();
  }
  scroll = () => {
    document.querySelector("#inner").scrollTop = window.innerHeight;
  };
  render() {
    return (
      <Parallax backgroundUrl={backgroundImage}>
        <Landing>
          <BoxH1 subtitle="Web Developer">Travis Waith-Mair</BoxH1>
          <ScrollLink href="#top" />
        </Landing>
      </Parallax>
    );
  }
}

export default withMatchMedia(`(max-width:${breakWidth480})`)(LandingComponent);
