webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Grid/index.js":
/*!**********************************!*\
  !*** ./components/Grid/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
  "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
  "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
  "24": "1.5rem",
  "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
  "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
  "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
  default: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"]
};

var createColumns = function createColumns(_ref) {
  var columns = _ref.columns,
      minWidth = _ref.minWidth;
  return "repeat(".concat(columns || "auto-fit", ", \n   minmax(").concat(minWidth || "1px", ",1fr))");
};

var Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=index.js.a45ca6d4a54927892267.hot-update.js.map