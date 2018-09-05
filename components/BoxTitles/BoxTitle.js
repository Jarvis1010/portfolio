import React, { Component } from "react";
import styled, { css } from "styled-components";
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

const baseCss = css`
  align-self: center;
  margin: auto;
  text-align: center;
  max-width: fit-content;
  border: 1px solid ${props => (props.inverse ? black : white)};
  color: ${props => (props.inverse ? black : white)};
  padding: ${spacing16};
  position: relative;
  font-size: ${({ element }) =>
    element in elements ? elements[element].main : elements.h2.main};
  font-weight: bold;
  line-height: ${lineHeightTight};
  letter-spacing: -0.03125rem;
  ${props => (props.top ? `border-top: none` : `border-bottom: none`)};

  &::after {
    content: ${props => (props.subtitle ? `"${props.subtitle}"` : " ")};
    font-size: ${({ element }) =>
      element in elements ? elements[element].subtitle : elements.h2.subtitle};
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
    ${props => (props.top ? "margin-top" : "margin-bottom")}: ${({ element }) =>
      element in elements ? elements[element].margin : elements.h2.margin};
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
    width: ${props => (props.width ? `${props.width}px` : "1rem")};
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
  node = null;
  handleRef = node => {
    if (node && !this.node) {
      this.node = node;
      const { width: parentWidth } = node.getBoundingClientRect();
      const { fontSize, width: calculatedWidth } = window.getComputedStyle(
        node,
        "::after"
      );

      const afterWidth =
        calculatedWidth === "fit-content"
          ? 0
          : calculatedWidth.slice(0, calculatedWidth.length - 2);

      const buffer = afterWidth === 0 ? 0 : parseFloat(fontSize);

      const bottomBorderlength = (parentWidth - afterWidth) / 2 - buffer;

      this.setState({ bottomBorderlength });
    }
  };

  render() {
    const { children, element, inverse, top, ...props } = this.props;

    const StyledElement =
      element in elements
        ? styled[element]`
            ${baseCss};
          `
        : styled.h2`
            ${baseCss};
          `;
    return (
      <StyledElement
        {...props}
        inverse={inverse}
        top={top}
        innerRef={this.handleRef}
        element={element}
      >
        {children}
        <BottomBorder
          inverse={inverse}
          top={top}
          width={this.state.bottomBorderlength}
        />
      </StyledElement>
    );
  }
}

export const BoxH1 = ({ children, ...props }) => (
  <BoxTitle {...props} element="h1">
    {children}
  </BoxTitle>
);

export const SectionBoxTitle = ({ children, ...props }) => (
  <BoxTitle {...props} element="h2" top>
    {children}
  </BoxTitle>
);

export default BoxTitle;
