import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./index";

const Div = ({ children }) => (
  <div style={{ border: "1px solid black" }}>{children}</div>
);

storiesOf("Grid", module)
  .add("Grid defaults to auto columns", () => (
    <Grid>
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Grid>
  ))
  .add("Grid set to 3 columns", () => (
    <Grid columns={3}>
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
      <Div>4</Div>
      <Div>5</Div>
      <Div>6</Div>
    </Grid>
  ))
  .add("Grid auto minWidth set to 300px", () => (
    <Fragment>
      <Div>Adjust window width</Div>
      <Grid minWidth={"300px"}>
        <Div>1</Div>
        <Div>2</Div>
        <Div>3</Div>
        <Div>4</Div>
        <Div>5</Div>
        <Div>6</Div>
      </Grid>
    </Fragment>
  ))
  .add("Grid set to 4 columns, gapSize 128", () => (
    <Fragment>
      <Div>Adjust window width</Div>
      <Grid columns={4} gapSize="128">
        <Div>1</Div>
        <Div>2</Div>
        <Div>3</Div>
        <Div>4</Div>
        <Div>5</Div>
        <Div>6</Div>
      </Grid>
    </Fragment>
  ));
