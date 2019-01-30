webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PadBox/PadBox.js":
/*!*************************************!*\
  !*** ./components/PadBox/PadBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var allowedSpacings = function allowedSpacings() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = {
    spacing4: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
    spacing8: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
    spacing16: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
    spacing32: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
    spacing64: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
    spacing128: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"]
  };

  var finalTheme = _objectSpread({}, defaultTheme, theme);

  return {
    // fixed vals
    "0": "0",
    "4": finalTheme.spacing4,
    "8": finalTheme.spacing8,
    "16": finalTheme.spacing16,
    "24": "1.5rem",
    "32": finalTheme.spacing32,
    "64": finalTheme.spacing64,
    "128": finalTheme.spacing128,
    // percentage
    ".05": "5%",
    ".10": "10%",
    ".15": "15%",
    ".20": "20%"
  };
};

var handlePaddingFor = function handlePaddingFor(pos) {
  return function (_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? "32" : _ref$size,
        props = _objectWithoutProperties(_ref, ["size"]);

    return props[pos] && allowedSpacings()[props[pos]] || allowedSpacings()[size];
  };
};

var PadBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), handlePaddingFor("bottom"), handlePaddingFor("left"), handlePaddingFor("top"), handlePaddingFor("right"));
/* harmony default export */ __webpack_exports__["default"] = (PadBox);

/***/ })

})
//# sourceMappingURL=index.js.4d114b474b3d4d9a5d95.hot-update.js.map