import { storiesOf } from "@storybook/react";
import Portfolio from "./Portfolio";
import React from "react";

import { groups } from "./mockData";

storiesOf("Portfolio", module).add("default", () => (
  <Portfolio projectGroups={groups} />
));
