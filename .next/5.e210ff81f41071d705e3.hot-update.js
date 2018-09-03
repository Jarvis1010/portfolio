webpackHotUpdate(5,{

/***/ "./components/Parallax/Parallax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  min-height: ", ";\n  &:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: grey;\n    background-size: cover;\n    transform: translateZ(-1px) scale(1.5);\n    z-index: -1;\n\n    ", ";\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Parallax = __WEBPACK_IMPORTED_MODULE_0_styled_components__["c" /* default */].div(_templateObject, function (props) {
  return props.minHeight || "100vh";
}, function (props) {
  return props.backgroundUrl && "background: url(".concat(props.backgroundUrl, ") no-repeat center center;");
});
/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ })

})
//# sourceMappingURL=5.e210ff81f41071d705e3.hot-update.js.map