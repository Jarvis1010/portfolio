import { createGlobalStyle } from "styled-components";

import {
  black,
  colorLink,
  colorLinkHover,
  fontSize18,
  fontSize28,
  fontSize42,
  fontSizeRoot,
  grey15,
  lineHeight,
  lineHeightTight,
  monospace,
  sans,
  text120,
  yellow10
} from "./constants/styled-constants";

const Normalize = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font: normal normal 400 ${fontSizeRoot}/${lineHeight} ${sans};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${text120};
    margin: 0;
  }

  ::selection {
      background: #d9f7fc;
  }

  normalize {
    display: block;

    & article,
    & aside,
    & details,
    & figcaption,
    & figure,
    & footer,
    & header,
    & hgroup,
    & main,
    & menu,
    & nav,
    & section,
    & summary {
      display: block;
    }

    & audio,
    & canvas,
    & progress,
    & video {
      display: inline-block;
      vertical-align: baseline;
    }

    & audio:not([controls]) {
      display: none;
      height: 0;
    }

    & [hidden],
    & template {
      display: none;
    }

    & a {
      background-color: transparent;
    }

    & a:active,
    & a:hover {
      outline: 0;
    }

    & abbr[title] {
      border-bottom: 1px dotted;
    }

    & b,
    & strong {
      font-weight: bold;
    }

    & dfn {
      font-style: italic;
    }

    & h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    & mark {
      background: ${yellow10};
      color: ${black};
    }

    & small {
      font-size: 80%;
    }

    & sub,
    & sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    & sup {
      top: -0.5em;
    }

    & sub {
      bottom: -0.25em;
    }

    & img {
      border: 0;
    }

    & svg:not(:root) {
      overflow: hidden;
    }

    & figure {
      margin: 1em 40px;
    }

    & hr {
      height: 0;
    }

    & pre {
      overflow: auto;
    }

    & code,
    & kbd,
    & pre,
    & samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    & button,
    & input,
    & optgroup,
    & select,
    & textarea {
      color: inherit;
      font: inherit;
      margin: 0;
    }

    & button {
      overflow: visible;
    }

    & button,
    & select {
      text-transform: none;
    }
    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
    }

    & button[disabled],
    & html input[disabled] {
      cursor: default;
    }

    & button::-moz-focus-inner,
    & input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    & input {
      line-height: normal;
    }

    & input[type="checkbox"],
    & input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }

    & input[type="number"]::-webkit-inner-spin-button,
    & input[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }

    & input[type="search"] {
      -webkit-appearance: textfield;
      box-sizing: content-box;
    }

    & input[type="search"]::-webkit-search-cancel-button,
    & input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    & fieldset {
      border: 1px solid ${grey15};
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }

    & legend {
      border: 0;
      padding: 0;
    }

    & textarea {
      overflow: auto;
    }

    & optgroup {
      font-weight: bold;
    }

    & table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    & td,
    & th {
      padding: 0;
    }
  }

  & a {
    color: ${colorLink};
    text-decoration: none;

    &:hover {
        color: ${colorLinkHover}
    }
}

  & h1, & h2, & h3, & h4, & h5, & h6 {
      font-family: ${sans};
  }

  & h1 {
      font: normal normal normal ${fontSize42}/${lineHeightTight} ${sans};
      font-weight: 300;
  }

  & h2 {
      font-size: ${fontSize28};
      line-height: ${lineHeightTight};
      font-weight: 100;
  }

  & h3, & h4, & h5, & h6 {
      font-size: ${fontSize18};
      font-weight: bold;
  }

  & h3 {
      line-height: ${lineHeightTight};
      letter-spacing: 0.00278em;
  }

  & h4, & h5, & h6 {
      line-height: ${lineHeightTight};
  }

  & dt {
      font-size: ${fontSize18};
      font-style: italic;
      font-weight: 400;
      line-height: ${lineHeightTight};
  }

  & dd {
      margin: 0;
  }

  & code {
      font-family: ${monospace};
      white-space: pre-wrap;
  }
`;

export default Normalize;
