import React from "react";

import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../components", true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
