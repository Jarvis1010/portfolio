webpackHotUpdate(5,{

/***/ "./components/Stack/Stackable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var type = {
  light: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  },
  // eslint-disable-line no-use-before-define
  medium: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["w" /* mediumGrey */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  },
  // eslint-disable-line no-use-before-define
  dark: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["f" /* darkGrey */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */]
  },
  // eslint-disable-line no-use-before-define
  transparent: {
    "background-color": "transparent",
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */]
  },
  // eslint-disable-line no-use-before-define
  default: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  }
}; //background: linear-gradient(to right, rgba(219,219,219,1) 0%, rgba(128,128,128,1) 100%);

var Stack = __WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */].div(_templateObject, function (props) {
  return Object.entries(type[props.type] || type.default).map(function (x) {
    return x.join(":");
  }).join(";");
});
/* harmony default export */ __webpack_exports__["a"] = (Stack);

/***/ })

})
//# sourceMappingURL=5.354cce6aefcec638b94f.hot-update.js.map