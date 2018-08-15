"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledConstants = require("./constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Normalize.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font: normal normal 400 ", "/", " ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    color: ", ";\n    margin: 0;\n  }\n\n  ::selection {\n      background: #d9f7fc;\n  }\n\n  normalize {\n    display: block;\n\n    & article,\n    & aside,\n    & details,\n    & figcaption,\n    & figure,\n    & footer,\n    & header,\n    & hgroup,\n    & main,\n    & menu,\n    & nav,\n    & section,\n    & summary {\n      display: block;\n    }\n\n    & audio,\n    & canvas,\n    & progress,\n    & video {\n      display: inline-block;\n      vertical-align: baseline;\n    }\n\n    & audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n\n    & [hidden],\n    & template {\n      display: none;\n    }\n\n    & a {\n      background-color: transparent;\n    }\n\n    & a:active,\n    & a:hover {\n      outline: 0;\n    }\n\n    & abbr[title] {\n      border-bottom: 1px dotted;\n    }\n\n    & b,\n    & strong {\n      font-weight: bold;\n    }\n\n    & dfn {\n      font-style: italic;\n    }\n\n    & h1 {\n      font-size: 2em;\n      margin: 0.67em 0;\n    }\n\n    & mark {\n      background: ", ";\n      color: ", ";\n    }\n\n    & small {\n      font-size: 80%;\n    }\n\n    & sub,\n    & sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n\n    & sup {\n      top: -0.5em;\n    }\n\n    & sub {\n      bottom: -0.25em;\n    }\n\n    & img {\n      border: 0;\n    }\n\n    & svg:not(:root) {\n      overflow: hidden;\n    }\n\n    & figure {\n      margin: 1em 40px;\n    }\n\n    & hr {\n      height: 0;\n    }\n\n    & pre {\n      overflow: auto;\n    }\n\n    & code,\n    & kbd,\n    & pre,\n    & samp {\n      font-family: monospace, monospace;\n      font-size: 1em;\n    }\n\n    & button,\n    & input,\n    & optgroup,\n    & select,\n    & textarea {\n      color: inherit;\n      font: inherit;\n      margin: 0;\n    }\n\n    & button {\n      overflow: visible;\n    }\n\n    & button,\n    & select {\n      text-transform: none;\n    }\n    button,\n    html input[type=\"button\"],\n    input[type=\"reset\"],\n    input[type=\"submit\"] {\n      -webkit-appearance: button;\n      cursor: pointer;\n    }\n\n    & button[disabled],\n    & html input[disabled] {\n      cursor: default;\n    }\n\n    & button::-moz-focus-inner,\n    & input::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n\n    & input {\n      line-height: normal;\n    }\n\n    & input[type=\"checkbox\"],\n    & input[type=\"radio\"] {\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    & input[type=\"number\"]::-webkit-inner-spin-button,\n    & input[type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n\n    & input[type=\"search\"] {\n      -webkit-appearance: textfield;\n      box-sizing: content-box;\n    }\n\n    & input[type=\"search\"]::-webkit-search-cancel-button,\n    & input[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n\n    & fieldset {\n      border: 1px solid ", ";\n      margin: 0 2px;\n      padding: 0.35em 0.625em 0.75em;\n    }\n\n    & legend {\n      border: 0;\n      padding: 0;\n    }\n\n    & textarea {\n      overflow: auto;\n    }\n\n    & optgroup {\n      font-weight: bold;\n    }\n\n    & table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    & td,\n    & th {\n      padding: 0;\n    }\n  }\n\n  & a {\n    color: ", ";\n    text-decoration: none;\n\n    &:hover {\n        color: ", "\n    }\n}\n\n  & h1, & h2, & h3, & h4, & h5, & h6 {\n      font-family: ", ";\n  }\n\n  & h1 {\n      font: normal normal normal ", "/", " ", ";\n      font-weight: 300;\n  }\n\n  & h2 {\n      font-size: ", ";\n      line-height: ", ";\n      font-weight: 100;\n  }\n\n  & h3, & h4, & h5, & h6 {\n      font-size: ", ";\n      font-weight: bold;\n  }\n\n  & h3 {\n      line-height: ", ";\n      letter-spacing: 0.00278em;\n  }\n\n  & h4, & h5, & h6 {\n      line-height: ", ";\n  }\n\n  & dt {\n      font-size: ", ";\n      font-style: italic;\n      font-weight: 400;\n      line-height: ", ";\n  }\n\n  & dd {\n      margin: 0;\n  }\n\n  & code {\n      font-family: ", ";\n      white-space: pre-wrap;\n  }\n"], ["\n\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font: normal normal 400 ", "/", " ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    color: ", ";\n    margin: 0;\n  }\n\n  ::selection {\n      background: #d9f7fc;\n  }\n\n  normalize {\n    display: block;\n\n    & article,\n    & aside,\n    & details,\n    & figcaption,\n    & figure,\n    & footer,\n    & header,\n    & hgroup,\n    & main,\n    & menu,\n    & nav,\n    & section,\n    & summary {\n      display: block;\n    }\n\n    & audio,\n    & canvas,\n    & progress,\n    & video {\n      display: inline-block;\n      vertical-align: baseline;\n    }\n\n    & audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n\n    & [hidden],\n    & template {\n      display: none;\n    }\n\n    & a {\n      background-color: transparent;\n    }\n\n    & a:active,\n    & a:hover {\n      outline: 0;\n    }\n\n    & abbr[title] {\n      border-bottom: 1px dotted;\n    }\n\n    & b,\n    & strong {\n      font-weight: bold;\n    }\n\n    & dfn {\n      font-style: italic;\n    }\n\n    & h1 {\n      font-size: 2em;\n      margin: 0.67em 0;\n    }\n\n    & mark {\n      background: ", ";\n      color: ", ";\n    }\n\n    & small {\n      font-size: 80%;\n    }\n\n    & sub,\n    & sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n\n    & sup {\n      top: -0.5em;\n    }\n\n    & sub {\n      bottom: -0.25em;\n    }\n\n    & img {\n      border: 0;\n    }\n\n    & svg:not(:root) {\n      overflow: hidden;\n    }\n\n    & figure {\n      margin: 1em 40px;\n    }\n\n    & hr {\n      height: 0;\n    }\n\n    & pre {\n      overflow: auto;\n    }\n\n    & code,\n    & kbd,\n    & pre,\n    & samp {\n      font-family: monospace, monospace;\n      font-size: 1em;\n    }\n\n    & button,\n    & input,\n    & optgroup,\n    & select,\n    & textarea {\n      color: inherit;\n      font: inherit;\n      margin: 0;\n    }\n\n    & button {\n      overflow: visible;\n    }\n\n    & button,\n    & select {\n      text-transform: none;\n    }\n    button,\n    html input[type=\"button\"],\n    input[type=\"reset\"],\n    input[type=\"submit\"] {\n      -webkit-appearance: button;\n      cursor: pointer;\n    }\n\n    & button[disabled],\n    & html input[disabled] {\n      cursor: default;\n    }\n\n    & button::-moz-focus-inner,\n    & input::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n\n    & input {\n      line-height: normal;\n    }\n\n    & input[type=\"checkbox\"],\n    & input[type=\"radio\"] {\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    & input[type=\"number\"]::-webkit-inner-spin-button,\n    & input[type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n\n    & input[type=\"search\"] {\n      -webkit-appearance: textfield;\n      box-sizing: content-box;\n    }\n\n    & input[type=\"search\"]::-webkit-search-cancel-button,\n    & input[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n\n    & fieldset {\n      border: 1px solid ", ";\n      margin: 0 2px;\n      padding: 0.35em 0.625em 0.75em;\n    }\n\n    & legend {\n      border: 0;\n      padding: 0;\n    }\n\n    & textarea {\n      overflow: auto;\n    }\n\n    & optgroup {\n      font-weight: bold;\n    }\n\n    & table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    & td,\n    & th {\n      padding: 0;\n    }\n  }\n\n  & a {\n    color: ", ";\n    text-decoration: none;\n\n    &:hover {\n        color: ", "\n    }\n}\n\n  & h1, & h2, & h3, & h4, & h5, & h6 {\n      font-family: ", ";\n  }\n\n  & h1 {\n      font: normal normal normal ", "/", " ", ";\n      font-weight: 300;\n  }\n\n  & h2 {\n      font-size: ", ";\n      line-height: ", ";\n      font-weight: 100;\n  }\n\n  & h3, & h4, & h5, & h6 {\n      font-size: ", ";\n      font-weight: bold;\n  }\n\n  & h3 {\n      line-height: ", ";\n      letter-spacing: 0.00278em;\n  }\n\n  & h4, & h5, & h6 {\n      line-height: ", ";\n  }\n\n  & dt {\n      font-size: ", ";\n      font-style: italic;\n      font-weight: 400;\n      line-height: ", ";\n  }\n\n  & dd {\n      margin: 0;\n  }\n\n  & code {\n      font-family: ", ";\n      white-space: pre-wrap;\n  }\n"]);

(0, _styledComponents.injectGlobal)(_templateObject, _styledConstants.fontSizeRoot, _styledConstants.lineHeight, _styledConstants.sans, _styledConstants.text120, _styledConstants.yellow10, _styledConstants.black, _styledConstants.grey15, _styledConstants.colorLink, _styledConstants.colorLinkHover, _styledConstants.sans, _styledConstants.fontSize42, _styledConstants.lineHeightTight, _styledConstants.sans, _styledConstants.fontSize28, _styledConstants.lineHeightTight, _styledConstants.fontSize18, _styledConstants.lineHeightTight, _styledConstants.lineHeightTight, _styledConstants.fontSize18, _styledConstants.lineHeightTight, _styledConstants.monospace);

var Normalize = function Normalize(props) {
  return _react2.default.createElement("normalize", (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    }
  }));
};

exports.default = Normalize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTm9ybWFsaXplLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5qZWN0R2xvYmFsIiwiYmxhY2siLCJjb2xvckxpbmsiLCJjb2xvckxpbmtIb3ZlciIsImZvbnRTaXplMTgiLCJmb250U2l6ZTI4IiwiZm9udFNpemU0MiIsImZvbnRTaXplUm9vdCIsImdyZXkxNSIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0VGlnaHQiLCJtb25vc3BhY2UiLCJzYW5zIiwidGV4dDEyMCIsInllbGxvdzEwIiwiTm9ybWFsaXplIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0s7Ozs7Ozs7O0FBRVAsb0NBQUEsQUFTOEIsQUFBZ0IsQUFBYyxBQU0vQyxBQXlFTyxBQUNMLEFBa0hXLEFBOEJiLEFBSUksQUFLSSxBQUljLEFBQWMsQUFBbUIsQUFLakQsQUFDRSxBQUtGLEFBS0UsQUFLQSxBQUlGLEFBR0UsQUFRQTs7QUFLckIsSUFBTSxZQUFZLFNBQVosQUFBWSxpQkFBQTsrRUFBUyxBQUFlOztnQkFBZjtrQkFBVCxBQUFTO0FBQUE7QUFBQSxJQUFBO0FBQTNCLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTm9ybWFsaXplLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXMtbWFpci9wb3J0Zm9saW8vcG9ydGZvbGlvIn0=