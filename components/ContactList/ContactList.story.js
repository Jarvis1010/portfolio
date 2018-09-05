import { storiesOf } from "@storybook/react";
import ContactList from "./ContactList";
import React from "react";

const list = [
  "Justin Travis Mair",
  "travis.mair@gmail.com",
  "(801) 200-7597",
  "Salt Lake City, Utah"
];

storiesOf("ContactList", module).add("default", () => (
  <ContactList list={list} />
));
