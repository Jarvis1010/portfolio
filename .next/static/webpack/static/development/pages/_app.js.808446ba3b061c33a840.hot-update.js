webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Stack/Stack.js":
/*!***********************************!*\
  !*** ./components/Stack/Stack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: ", ";\n  grid-auto-columns: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var gaps = function gaps() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = {
    "0": "0",
    "4": "0.4rem",
    "8": "0.8rem",
    "16": "1rem",
    "24": "1.5rem",
    "32": "2rem",
    "64": "4rem",
    "128": "8rem",
    default: "0"
  };

  var finalTheme = _objectSpread({}, defaultTheme, theme);

  return {
    "0": "0",
    "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
    "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
    "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
    "24": "1.5rem",
    "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
    "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
    "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
    default: "0"
  };
};

var Stack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return gaps()[props.gapSize] || gaps().default;
});
/* harmony default export */ __webpack_exports__["default"] = (Stack);

/***/ })

})
//# sourceMappingURL=_app.js.808446ba3b061c33a840.hot-update.js.map