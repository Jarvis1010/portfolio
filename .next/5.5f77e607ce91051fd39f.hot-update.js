webpackHotUpdate(5,{

/***/ "./components/AboutSection/AboutSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid__ = __webpack_require__("./components/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-height: 320px;\n  margin:0;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-align: right;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border: 0;\n  border-top: 3px solid;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 320px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ProfilePic = __WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */].withComponent("figure").extend(_templateObject);
var Description = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject2);
var HR = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].hr(_templateObject3);
var Image = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].img(_templateObject4);

var AboutSection = function AboutSection(_ref) {
  var _ref$description = _ref.description,
      description = _ref$description === void 0 ? "" : _ref$description,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$languages = _ref.languages,
      languages = _ref$languages === void 0 ? [] : _ref$languages;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__["a" /* default */], {
    size: "64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */], {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Programming Languages"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, languages.join(", ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProfilePic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    src: "static/components/AboutSection/portfolio.jpg",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))));
};

AboutSection.propTypes = {
  description: __WEBPACK_IMPORTED_MODULE_4_prop_types__["string"],
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types__["string"],
  language: __WEBPACK_IMPORTED_MODULE_4_prop_types__["array"]
};
/* harmony default export */ __webpack_exports__["a"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=5.5f77e607ce91051fd39f.hot-update.js.map