import { storiesOf } from "@storybook/react";
import AboutSection from "./AboutSection";
import React from "react";

const about = {
  src: "http://travismair.com/img/profile.jpg",
  description:
    "Junior software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  title: "Web Developer",
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "JQuery",
    "MongoDB",
    "Angular.js",
    "Express",
    "Node",
    "React",
    "VBA",
    "PHP",
    "MySQL",
    "JAVA"
  ]
};

storiesOf("AboutSection", module).add("default", () => (
  <AboutSection {...about} />
));
