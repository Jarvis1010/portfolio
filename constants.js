import code from "./images/copycode.png";
import inator from "./images/inator.png";
import mormono from "./images/mormono.png";

export const about = {
  description:
    "Software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  title: "Web Developer",
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "ES6",
    "React.js",
    "Bootstrap",
    "MongoDB",
    "Angular.js",
    "Express",
    "Node"
  ]
};

export const list = [
  "J. Travis Waith-Mair",
  "travis.mair@gmail.com",
  "(801) 200 - 7597",
  "Salt Lake City, Utah"
];

export const desc =
  "If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.";

export const pageMeta = {
  title: "Portfolio of Travis Mair",
  tags: [
    { name: "description", content: "Portfolio" },
    { property: "og:type", content: "article" }
  ]
};

export const links = [
  { href: "https://github.com/Jarvis1010", content: "github" },
  { href: "https://twitter.com/want2code", content: "twitter" },
  {
    href: "https://www.linkedin.com/in/travis-mair/",
    content: "linkedin"
  }
];

export const portfolio = {
  "NPM modules and React Native apps": [
    {
      href: "https://www.npmjs.com/package/react-copy-code",
      src: code,
      alt: "Screenshot of react-copy-code",
      desc: "react-copy-code"
    },
    {
      href: "https://www.npmjs.com/package/react-clean-form",
      src: inator,
      alt: "Screenshot of react-clean-form",
      desc: "react-clean-form"
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.sanktajlibroj",
      src: mormono,
      alt: "Screenshot of Esperanto Book of Mormon",
      desc: "React Native App of Scriptures in Esperanto"
    }
  ]
};
