import React, { Component } from "react";
import styled from "styled-components";
import isBrowser from "is-in-browser";
import {
  fontSize13,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize20,
  fontSize28,
  fontSize32,
  fontSize42,
  lineHeightTight,
  spacing16,
  black,
  white
} from "../constants/styled-constants";

const elements = {
  h1: { main: fontSize42, subtitle: fontSize28, margin: `-0.9rem` },
  h2: { main: fontSize32, subtitle: fontSize20, margin: `-0.7rem` },
  h3: { main: fontSize28, subtitle: fontSize18, margin: `-0.6rem` },
  h4: { main: fontSize20, subtitle: fontSize16, margin: `-0.6rem` },
  h5: { main: fontSize18, subtitle: fontSize14, margin: `-0.5rem` },
  h6: { main: fontSize14, subtitle: fontSize13, margin: `-0.4rem` }
};

const BoxHeading = styled.h2`
  align-self: center;
  margin: auto;
  text-align: center;
  max-width: fit-content;
  border: 1px solid ${props => (props.inverse ? black : white)};
  color: ${props => (props.inverse ? black : white)};
  padding: ${spacing16};
  position: relative;
  font-size: ${({ as = "h2" }) => elements[as].main};
  font-weight: bold;
  line-height: ${lineHeightTight};
  letter-spacing: -0.03125rem;
  ${props => (props.top ? `border-top: none` : `border-bottom: none`)};

  &::after {
    content: ${props => (props.subtitle ? `"${props.subtitle}"` : " ")};
    font-size: ${({ as = "h2" }) => elements[as].subtitle};
    font-weight: normal;
    position: absolute;
    width: fit-content;
    ${props => (props.top ? "top" : "bottom")}: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    ${props => (props.top ? "margin-top" : "margin-bottom")}: ${({
      as = "h2"
    }) => elements[as].margin};
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
      ${props => (props.inverse ? black : white)};
    /* width: ${props => (props.width ? `${props.width}px` : "1rem")}; */
    width:calc(51% - ${props => `${props.width}px`});
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

  calculateHalfOfTextWidth = (txt = "") => {
    if (isBrowser & (txt.length > 0)) {
      const elementToCreate = this.props.as in elements ? this.props.as : "h2";
      let element = document.createElement(elementToCreate);
      element.id = "s";
      element.style.height = 0;
      element.style.padding = elements[elementToCreate].subtitle;
      element.style.maxWidth = "fit-content";
      element.style.fontSize = elements[elementToCreate].subtitle;
      element.style.lineHeight = lineHeightTight;
      element.style.fontWeight = "normal";
      element.style.letterSpacing = "-0.03125rem";
      document.body.appendChild(element);
      element.innerText = txt;
      const { width } = document.querySelector("#s").getBoundingClientRect();
      document.body.removeChild(element);
      return width / 2;
    }
    return 0;
  };

  render() {
    const { children, inverse, top, subtitle, ...props } = this.props;
    return (
      <BoxHeading {...props} subtitle={subtitle} inverse={inverse} top={top}>
        {children}
        <BottomBorder
          inverse={inverse}
          top={top}
          width={this.calculateHalfOfTextWidth(subtitle)}
        />
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

export default BoxTitle;
