import React from "react";
import { storiesOf } from "@storybook/react";
import Split from "./index";

const Div = ({ children }) => (
  <div style={{ border: "1px solid black" }}>{children}</div>
);

storiesOf("Split", module)
  .add("Split defaults to auto columns", () => (
    <Split>
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ))
  .add("Split set to 1/4", () => (
    <Split fraction="1/4">
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ))
  .add("Split set to 1/3", () => (
    <Split fraction="1/3">
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ))
  .add("Split set to 1/2", () => (
    <Split fraction="1/5">
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ))
  .add("Split set to 2/3", () => (
    <Split fraction="2/3">
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ))
  .add("Split set to 3/4", () => (
    <Split fraction="3/4">
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Split>
  ));
