import { storiesOf } from "@storybook/react";
import BoxTitle from "./BoxTitle";
import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background: grey;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf("Box Title", module)
  .add("default (h2) without subtitle", () => (
    <Background>
      <BoxTitle>Test Title</BoxTitle>
    </Background>
  ))
  .add("h1 with subtitle", () => (
    <Background>
      <BoxTitle as="h1" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h2 with subtitle", () => (
    <Background>
      <BoxTitle as="h2" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h3 with subtitle", () => (
    <Background>
      <BoxTitle as="h3" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h4 with subtitle", () => (
    <Background>
      <BoxTitle as="h4" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h5 with subtitle", () => (
    <Background>
      <BoxTitle as="h5" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h6 with subtitle", () => (
    <Background>
      <BoxTitle as="h6" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("inverse default with subtitle on top", () => (
    <BoxTitle inverse top subtitle="Subtitle">
      Test Title
    </BoxTitle>
  ))
  .add("inverse default with long body/short subtitle", () => (
    <BoxTitle inverse subtitle="Subtitle">
      Test Title is much longer
    </BoxTitle>
  ))
  .add("inverse default with long subtitle/short body", () => (
    <BoxTitle inverse subtitle="Subtitle is much longer">
      Test
    </BoxTitle>
  ));
