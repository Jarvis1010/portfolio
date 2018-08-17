"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var code = "/static/images/copycode.png";
var inator = "/static/images/inator.png";
var mormono = "/static/images/mormono.png";

var about = exports.about = {
  description: "Software developer that provides focused skills needed to meet technical challenges. Driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  title: "Web Developer",
  languages: ["HTML", "CSS", "JavaScript", "ES6", "React.js", "Bootstrap", "MongoDB", "Angular.js", "Express", "Node"]
};

var list = exports.list = ["J. Travis Waith-Mair", "travis.mair@gmail.com", "(801) 200 - 7597", "Salt Lake City, Utah"];

var desc = exports.desc = "If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.";

var pageMeta = exports.pageMeta = {
  title: "Portfolio of Travis Mair",
  tags: [{ name: "description", content: "Portfolio" }, { property: "og:type", content: "article" }]
};

var links = exports.links = [{ href: "https://github.com/Jarvis1010", content: "github" }, { href: "https://twitter.com/want2code", content: "twitter" }, {
  href: "https://www.linkedin.com/in/travis-mair/",
  content: "linkedin"
}];

var portfolio = exports.portfolio = {
  "Open Source Projectssx": [{
    href: "https://www.npmjs.com/package/react-copy-code",
    src: code,
    alt: "Screenshot of react-copy-code",
    desc: "react-copy-code"
  }, {
    href: "https://www.npmjs.com/package/react-clean-form",
    src: inator,
    alt: "Screenshot of react-clean-form",
    desc: "react-clean-form"
  }, {
    href: "https://play.google.com/store/apps/details?id=com.sanktajlibroj",
    src: mormono,
    alt: "Screenshot of Esperanto Book of Mormon",
    desc: "React Native App of Scriptures in Esperanto"
  }]
};