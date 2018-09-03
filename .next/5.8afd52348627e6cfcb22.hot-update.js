webpackHotUpdate(5,{

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__ = __webpack_require__("./components/StickyNav/StickyNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Parallax_Parallax__ = __webpack_require__("./components/Parallax/Parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MatchMedia_MatchMedia__ = __webpack_require__("./components/MatchMedia/MatchMedia.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Root__ = __webpack_require__("./components/Root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PageWrapper__ = __webpack_require__("./components/PageWrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  height: 100vh;\n  justify-items: center;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-self: center;\n  border: 1px solid white;\n  padding: 1em;\n  position: relative;\n  &::after {\n    content: \"Web Developer\";\n    font-size: 1em;\n    position: absolute;\n    bottom: 0;\n    display: block;\n    text-align: center;\n    margin: 0 auto -1rem auto;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  border: 1px solid ", ";\n  padding: 1em;\n  margin-bottom: 100px;\n  align-self: end;\n  text-align: center;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Footer = __WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */].footer(_templateObject, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["f" /* darkGrey */]);
var Landing = Object(__WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_4__components_Stack_Stack__["a" /* default */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */]);
var LandingTitle = __WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */].h1(_templateObject3);
var ScrollLink = __WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */].a(_templateObject4, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */], __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */]);
var backgroundImage = "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";

var Layout = function Layout(_ref) {
  var children = _ref.children,
      matches = _ref.matches;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Root__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__PageWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, matches && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Parallax_Parallax__["a" /* default */], {
    backgroundUrl: backgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Landing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LandingTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "Travis Waith-Mair (Site in Progress)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScrollLink, {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "V"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__components_MatchMedia_MatchMedia__["a" /* withMatchMedia */])("(min-width:".concat(__WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["b" /* breakWidth480 */], ")"))(Layout));

/***/ })

})
//# sourceMappingURL=5.8afd52348627e6cfcb22.hot-update.js.map