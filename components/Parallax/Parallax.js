import styled from "styled-components";
import { darkGrey } from "../constants/styled-constants";

const Parallax = styled.div`
  position: relative;
  min-height: ${props => props.minHeight || "100vh"};
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${darkGrey};
    background-size: cover;
    transform: translateZ(-1px) scale(1.5);
    z-index: -1;
    ${props =>
      props.backgroundUrl &&
      `background: url(${props.backgroundUrl}) no-repeat center center;`};
  }
`;

export default Parallax;
