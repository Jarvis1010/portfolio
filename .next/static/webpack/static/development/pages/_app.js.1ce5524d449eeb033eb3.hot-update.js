webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: ", ";\n  &:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    background-size: cover;\n    transform: translateZ(-1px) scale(1.5);\n    z-index: -1;\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Parallax = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.minHeight || "100vh";
}, function (props) {
  return props.theme.darkGrey || "grey";
}, function (props) {
  return props.backgroundUrl && "background: url(".concat(props.backgroundUrl, ") no-repeat center center;");
});
/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ })

})
//# sourceMappingURL=_app.js.1ce5524d449eeb033eb3.hot-update.js.map