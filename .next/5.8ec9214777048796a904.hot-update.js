webpackHotUpdate(5,{

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__ = __webpack_require__("./components/StickyNav/StickyNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Parallax_Parallax__ = __webpack_require__("./components/Parallax/Parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root__ = __webpack_require__("./components/Root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageWrapper__ = __webpack_require__("./components/PageWrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Footer = __WEBPACK_IMPORTED_MODULE_3_styled_components__["c" /* default */].footer(_templateObject, __WEBPACK_IMPORTED_MODULE_6__components_constants_styled_constants__["f" /* darkGrey */]);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Root__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PageWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Parallax_Parallax__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Front"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Parallax/Parallax.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  min-height: 10px;\n  padding: 30vw 0 5vw;\n  position: relative;\n  transform-style: inherit;\n  width: 100vw;\n  background: 50% 50% / cover;\n  &::after {\n    content: \"Back Layer\";\n    display: block;\n    background: 50% 50% / cover;\n    background-size: cover;\n    transform-origin: center center 0;\n    transform: translate(-1px) scale(2);\n    bottom: 0;\n    top: 0;\n    right: 0;\n    left: 0;\n    position: absolute;\n    background-color: lightblue;\n    z-index: -1;\n    min-height: 10px;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: -100px;\n"]);

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
//# sourceMappingURL=5.8ec9214777048796a904.hot-update.js.map