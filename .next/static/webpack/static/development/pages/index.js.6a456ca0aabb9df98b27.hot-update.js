webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AboutSection/AboutSection.js":
/*!*************************************************!*\
  !*** ./components/AboutSection/AboutSection.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Grid */ "./components/Grid/index.js");
/* harmony import */ var _Stack_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Stack/Stack */ "./components/Stack/Stack.js");
/* harmony import */ var _PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PadBox/PadBox */ "./components/PadBox/PadBox.js");
/* harmony import */ var _BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BoxTitles/BoxTitle */ "./components/BoxTitles/BoxTitle.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./components/constants/constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 280px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n  & > li:not(:last-child):after {\n    content: \"\";\n    display: block;\n    padding: ", ";\n    border-bottom: 1px solid ", ";\n    top: 0;\n    position: absolute;\n    width: 90%;\n    height: 100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  justify-items: center;\n  justify-self: center;\n  padding: ", ";\n  margin: 0;\n  width: 100%;\n  @media (min-width: ", ") {\n    box-shadow: -11px 14px 34px 6px rgba(128, 128, 128, 1);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  line-height: 2rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  justify-self: center;\n  padding: ", ";\n  @media (min-width: ", ") {\n    box-shadow: -11px 14px 34px 6px rgba(128, 128, 128, 1);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  justify-content: space-around;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n  min-height: 100vh;\n  display: grid;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var AboutWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject());
var SplitGrid = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject2(), function (props) {
  return props.theme.spacing16 || "1rem";
});
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject3(), function (props) {
  return props.theme.spacing32 || "2rem";
}, function (props) {
  return props.theme.breakWidth840 || "840px";
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject4(), function (props) {
  return props.theme.breakWidth480 || "480px";
});
var Details = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject5(), function (props) {
  return props.theme.breakWidth480 || "480px";
}, function (props) {
  return props.theme.spacing32 || "2rem";
}, function (props) {
  return props.theme.breakWidth840 || "840px";
});
var ContactList = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject6(), function (props) {
  return props.theme.spacing16 || "1rem";
}, function (props) {
  return props.theme.grey || "grey";
});
var ContactListItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject7());

var Email = function Email(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, props, {
    href: "mailto:".concat(props.children.trim()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
};

var Telephone = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.attrs(function (props) {
  return {
    href: "tel:".concat(props.children)
  };
})(_templateObject8());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject9());

var AboutSection = function AboutSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutWrapper, {
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_5__["SectionBoxTitle"], {
    inverse: true,
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Personal Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "0",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SplitGrid, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Professional Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["about"].description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactList, {
    size: "8",
    as: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Travis Waith-Mair")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Email, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, " travis.mair@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Telephone:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Telephone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, " (801) 200-7597")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Location:"), " Salt Lake City, Utah")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: "static/images/profile.png",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=index.js.6a456ca0aabb9df98b27.hot-update.js.map