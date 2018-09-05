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
      <BoxTitle element="h1" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h2 with subtitle", () => (
    <Background>
      <BoxTitle element="h2" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h3 with subtitle", () => (
    <Background>
      <BoxTitle element="h3" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h4 with subtitle", () => (
    <Background>
      <BoxTitle element="h4" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h5 with subtitle", () => (
    <Background>
      <BoxTitle element="h5" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("h6 with subtitle", () => (
    <Background>
      <BoxTitle element="h6" subtitle="Subtitle">
        Test Title
      </BoxTitle>
    </Background>
  ))
  .add("inverse default with subtitle on top", () => (
    <BoxTitle inverse top subtitle="Subtitle">
      Test Title
    </BoxTitle>
  ));
