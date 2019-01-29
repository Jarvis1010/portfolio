webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StickyNav_StickyNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyNav/StickyNav */ "./components/StickyNav/StickyNav.js");
/* harmony import */ var _components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing/Landing */ "./components/Landing/Landing.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageWrapper */ "./components/PageWrapper.js");
/* harmony import */ var _components_constants_styled_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer(_templateObject(), function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.darkGrey || "#565656";
});

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _objectSpread({
      primaryColor: "#BD5751"
    }, _components_constants_styled_constants__WEBPACK_IMPORTED_MODULE_5__),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StickyNav_StickyNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.9430655d03eca82b82b0.hot-update.js.map