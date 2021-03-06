import React, { Component } from "react";
import styled from "styled-components";
import pixelWidth from "string-pixel-width";
import {
  fontSize11,
  fontSize13,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize20,
  fontSize28,
  fontSize32,
  fontSize42
} from "../constants/styled-constants";

const elements = {
  h1: { main: fontSize42, subtitle: fontSize20, margin: `-0.9rem` },
  h2: { main: fontSize32, subtitle: fontSize18, margin: `-0.7rem` },
  h3: { main: fontSize28, subtitle: fontSize16, margin: `-0.6rem` },
  h4: { main: fontSize20, subtitle: fontSize14, margin: `-0.6rem` },
  h5: { main: fontSize18, subtitle: fontSize13, margin: `-0.5rem` },
  h6: { main: fontSize14, subtitle: fontSize11, margin: `-0.4rem` }
};

const getMargin = ({ as = "h2" }) => elements[as].margin;
const getMainSize = ({ as = "h2" }) => elements[as].main;
const getsubtitleSize = ({ as = "h2" }) => elements[as].subtitle;
const marginTopBottom = props => (props.top ? "margin-top" : "margin-bottom");
const noMarginTopBottom = props =>
  props.top ? `border-top: none` : `border-bottom: none`;
const checkInverse = props =>
  props.inverse ? props.theme.black || "black" : props.theme.white || "white";

const BoxHeading = styled.h2`
  position: relative;
  align-self: center;
  text-align: center;

  margin: auto;
  padding: ${props => props.theme.spacing16 || "1rem"};

  min-width: ${({ minWidth = 1 }) => minWidth}px;
  max-width: fit-content;

  border: 1px solid ${checkInverse};
  ${noMarginTopBottom};
  color: ${checkInverse};

  font-weight: bold;
  font-size: ${getMainSize};
  font-family: ${props => props.theme.serif || "serif"};

  line-height: ${props => props.theme.lineHeightTight || "1rem"};
  letter-spacing: -0.03125rem;

  &::after {
    content: ${props => (props.subtitle ? `"${props.subtitle}"` : " ")};
    display: block;
    position: absolute;
    text-align: center;
    font-size: ${getsubtitleSize};
    font-weight: normal;
    width: fit-content;

    ${props => (props.top ? "top" : "bottom")}: 0;
    left: 0;
    right: 0;

    margin: 0;
    margin-left: auto;
    margin-right: auto;
    ${marginTopBottom}: ${getMargin};
  }
`;

const BottomBorder = styled.div`
  margin: 0;
  padding: 0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    ${props => (props.top ? "top" : "bottom")}: 0;
    ${props => (props.top ? "border-top" : "border-bottom")}: 1px solid
      ${checkInverse};

    width: calc(51% - ${props => `${props.width}px`});
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

class BoxTitle extends Component {
  state = {
    bottomBorderlength: undefined
  };

  calculateTextWidth = (txt = "") => {
    const as = this.props.as in elements ? this.props.as : "h2";
    const FONT_MULTIPLE = parseFloat(elements[as].subtitle);
    const BASE_FONT_SIZE = 16;
    const fontSizeInPixels = BASE_FONT_SIZE * FONT_MULTIPLE;
    const leftAndRightPadding = fontSizeInPixels * 2;
    return txt.length > 0
      ? pixelWidth(txt, { font: "Times New Roman", size: fontSizeInPixels }) +
          leftAndRightPadding
      : 0;
  };

  render() {
    const { children, inverse, top, subtitle, ...props } = this.props;
    const subTitleWidth = this.calculateTextWidth(subtitle);
    return (
      <BoxHeading
        {...props}
        minWidth={subTitleWidth}
        subtitle={subtitle}
        inverse={inverse}
        top={top}
      >
        {children}
        <BottomBorder inverse={inverse} top={top} width={subTitleWidth / 2} />
      </BoxHeading>
    );
  }
}

export const BoxH1 = ({ children, ...props }) => (
  <BoxTitle {...props} as="h1">
    {children}
  </BoxTitle>
);

export const SectionBoxTitle = ({ children, ...props }) => (
  <BoxTitle {...props} as="h2" top>
    {children}
  </BoxTitle>
);

export const SectionBoxTitleInverse = ({ children, ...props }) => (
  <BoxTitle {...props} inverse as="h2" top>
    {children}
  </BoxTitle>
);

export default BoxTitle;
