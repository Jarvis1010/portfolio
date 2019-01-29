webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/StickyNav/StickyNav.js":
/*!*******************************************!*\
  !*** ./components/StickyNav/StickyNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavBar */ "./components/NavBar/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/StickyNav/StickyNav.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  text-decoration: none;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), function (props) {
  return props.theme.colorLinkHover || "blue";
});

var NavButton = function NavButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({}, props, {
    as: "button",
    onClick: function onClick() {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    },
    href: "javascript:void(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

var StickyNav = function StickyNav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavWrapper"], {
    id: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["Brand"], {
    brandName: "Travis Waith-Mair",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavSlider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavButton, {
    onClick: function onClick() {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    },
    href: "javascript:void(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Experience")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StickyNav);

/***/ })

})
//# sourceMappingURL=_app.js.c638451d4b7b9dddf6e4.hot-update.js.map