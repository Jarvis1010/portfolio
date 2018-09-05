import { storiesOf } from "@storybook/react";
import TitleBox from "./TitleBox";
import React from "react";
import LinkList from "../LinkList/LinkList";

const links = [
  { href: "https://github.com/Jarvis1010", content: "github" },
  { href: "https://twitter.com/want2code", content: "twitter" },
  {
    href: "https://www.linkedin.com/in/travis-mair-2b709447",
    content: "linkedin"
  }
];

storiesOf("TitleBox", module)
  .add("default", () => (
    <TitleBox title="ABOUT THIS PAGE">
      <p>Made with love and patience by Justin Travis Mair</p>
    </TitleBox>
  ))
  .add("with linked list", () => (
    <TitleBox title="AROUND THE WEB">
      <LinkList links={links} />
    </TitleBox>
  ));
