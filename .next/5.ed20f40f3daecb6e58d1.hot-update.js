webpackHotUpdate(5,{

/***/ "./components/AboutSection/AboutSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid__ = __webpack_require__("./components/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__("./components/constants/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  justify-self: center;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  line-height: 2rem;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  justify-items: center;\n  margin: 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  list-style: none;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n  & > li:not(:last-child):after {\n    content: \"\";\n    display: block;\n    padding: ", ";\n    border-bottom: 1px solid ", ";\n  }\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral([""]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 280px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var AboutWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */])(_templateObject);
var SplitGrid = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["A" /* spacing16 */]);
var Profile = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].section(_templateObject3);
var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].p(_templateObject4, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var Details = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject5, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var ContactList = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Stack_Stack__["a" /* default */])(_templateObject6, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["A" /* spacing16 */], __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["p" /* grey */]);
var Email = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a.attrs({
  href: function href(props) {
    return "mailto:".concat(props.children);
  }
})(_templateObject7);
var Telephone = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a.attrs({
  href: function href(props) {
    return "tel:".concat(props.children);
  }
})(_templateObject7);
var Image = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].img(_templateObject8);

var AboutSection = function AboutSection() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AboutWrapper, {
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "Personal Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */], {
    size: "0",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SplitGrid, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "Profesional Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* about */].description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Details, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactList, {
    as: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "Name:"), " Travis Waith-Mair"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Email:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Email, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, " travis.mair@gmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, "Telephone:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Telephone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, " (801) 200-7597")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Location:"), " Salt Lake City, Utah")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    src: "static/images/profile.png",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=5.ed20f40f3daecb6e58d1.hot-update.js.map