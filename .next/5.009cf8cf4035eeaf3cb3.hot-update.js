webpackHotUpdate(5,{

/***/ "./components/ExperienceSections/ExperienceSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Split__ = __webpack_require__("./components/Split/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ExperienceSections/ExperienceSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n  min-height: 100vh;\n  display: grid;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import Grid from "../Grid";
// import Stack from "../Stack/Stack";



 // import { about } from "../constants/constants";
// import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

var ExperienceWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_4__PadBox_PadBox__["a" /* default */])(_templateObject);

var Experience = function Experience() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExperienceWrapper, {
    id: "experience",
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "What I have been doing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Work Experience"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Split__["a" /* default */], {
    fraction: "1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "dates"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "details")));
};

/* harmony default export */ __webpack_exports__["a"] = (Experience);

/***/ }),

/***/ "./components/Split/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["E" /* spacing4 */],
  "8": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["G" /* spacing8 */],
  "16": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing16 */],
  "24": "1.5rem",
  "32": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["D" /* spacing32 */],
  "64": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["F" /* spacing64 */],
  "128": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing128 */],
  default: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing16 */]
};
var fractions = {
  "1/4": "25%",
  "1/3": "33.33%",
  "1/2": "50%",
  "2/3": "66.67%",
  "3/4": "75%",
  default: "50%"
};

var createColumns = function createColumns(_ref) {
  var fraction = _ref.fraction;
  return "".concat(fractions[fraction] ? fractions[fraction] : fractions.default, " 1fr");
};

var Split = __WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */].div(_templateObject, createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["a"] = (Split);

/***/ })

})
//# sourceMappingURL=5.009cf8cf4035eeaf3cb3.hot-update.js.map