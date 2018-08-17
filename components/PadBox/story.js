import React from "react";
import { storiesOf } from "@storybook/react";
import PadBox from "./PadBox";

const filler = (
  <div style={{ border: "1px solid black", background: "lightgrey" }}>
    Content
  </div>
);

storiesOf("PadBox", module)
  .add(
    "PadBox updates all sides with default size attribute when no props passed",
    () => <PadBox style={{ border: "1px solid black" }}>{filler}</PadBox>
  )
  .add("PadBox updates all sides with size attribute", () => (
    <PadBox size="128" style={{ border: "1px solid black" }}>
      {filler}
    </PadBox>
  ))
  .add("PadBox update top with top attribute ", () => (
    <PadBox top="128" style={{ border: "1px solid black" }}>
      {filler}
    </PadBox>
  ))
  .add(
    "PadBox updates all sides except top with size attribute and top is set to different size",
    () => (
      <PadBox top="0" size="128" style={{ border: "1px solid black" }}>
        {filler}
      </PadBox>
    )
  );
