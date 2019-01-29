webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stack/Stack.js":
/*!***********************************!*\
  !*** ./components/Stack/Stack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
    spacing4: "0.4rem",
    spacing8: "0.8rem",
    spacing16: "1rem",
    spacing32: "2rem",
    spacing64: "4rem",
    spacing128: "8rem"
  };

  var finalTheme = _objectSpread({}, defaultTheme, theme);

  return {
    "0": "0",
    "4": finalTheme.spacing4,
    "8": finalTheme.spacing8,
    "16": finalTheme.spacing16,
    "24": "1.5rem",
    "32": finalTheme.spacing32,
    "64": finalTheme.spacing64,
    "128": finalTheme.spacing128,
    default: "0"
  };
};

var Stack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return gaps(props.theme)[props.gapSize] || gaps(props.theme).default;
});
/* harmony default export */ __webpack_exports__["default"] = (Stack);

/***/ })

})
//# sourceMappingURL=index.js.59201e8b2a9adb42376f.hot-update.js.map