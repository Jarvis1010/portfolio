webpackHotUpdate(5,{

/***/ "./components/PadBox/PadBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var allowedSpacings = {
  // fixed vals
  "0": "0",
  "4": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing4 */],
  "8": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["E" /* spacing8 */],
  "16": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["A" /* spacing16 */],
  "24": "1.5rem",
  "32": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing32 */],
  "64": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["D" /* spacing64 */],
  "128": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["z" /* spacing128 */],
  // percentage
  ".05": "5%",
  ".10": "10%",
  ".15": "15%",
  ".20": "20%"
};

var handlePaddingFor = function handlePaddingFor(pos) {
  return function (_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? "32" : _ref$size,
        props = _objectWithoutProperties(_ref, ["size"]);

    return props[pos] && allowedSpacings[props[pos]] || allowedSpacings[size];
  };
};

var PadBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */].div(_templateObject, handlePaddingFor("bottom"), handlePaddingFor("left"), handlePaddingFor("top"), handlePaddingFor("right"));
/* harmony default export */ __webpack_exports__["a"] = (PadBox);

/***/ })

})
//# sourceMappingURL=5.3b09e899a93c5316111f.hot-update.js.map