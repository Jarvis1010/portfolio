webpackHotUpdate(5,{

/***/ "./components/Parallax/Parallax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Parallax/Parallax.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  transform-style: inherit;\n  background: 50% 50% / cover;\n\n  &::before {\n    content: \"Back Layer\";\n    display: block;\n    background: 50% 50% / cover;\n    background-size: cover;\n    transform-origin: center center;\n    transform: translate(-1px) scale(2);\n    bottom: 0;\n    top: 0;\n    right: 0;\n    left: 0;\n    position: absolute;\n    background-color: lightblue;\n    background: url(https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg);\n    z-index: -1;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: dodgerblue;\n  color: white;\n  margin-top: -100px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ParralaxContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject);
var ParallaxBaseLayer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject2);

var Parallax = function Parallax(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ParralaxContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ParallaxBaseLayer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ })

})
//# sourceMappingURL=5.9f6763f36a8ac8c1f029.hot-update.js.map