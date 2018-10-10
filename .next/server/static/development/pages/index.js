module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutSection/AboutSection.js":
/*!*************************************************!*\
  !*** ./components/AboutSection/AboutSection.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Grid */ "./components/Grid/index.js");
/* harmony import */ var _Stack_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Stack/Stack */ "./components/Stack/Stack.js");
/* harmony import */ var _BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoxTitles/BoxTitle */ "./components/BoxTitles/BoxTitle.js");
/* harmony import */ var _PadBox_PadBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PadBox/PadBox */ "./components/PadBox/PadBox.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./components/constants/constants.js");
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 280px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

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









var AboutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject());
var SplitGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject2(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["spacing16"]);
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject3(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["spacing32"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["breakWidth840"]);
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject4(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["breakWidth480"]);
var Details = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject5(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["breakWidth480"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["spacing32"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["breakWidth840"]);
var ContactList = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject6(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["spacing16"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_7__["grey"]);
var ContactListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject7());
var Email = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.attrs({
  href: function href(props) {
    return "mailto:".concat(props.children);
  }
})(_templateObject8());
var Telephone = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.attrs({
  href: function href(props) {
    return "tel:".concat(props.children);
  }
})(_templateObject9());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject10());

var AboutSection = function AboutSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutWrapper, {
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_4__["SectionBoxTitle"], {
    inverse: true,
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Personal Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "0",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SplitGrid, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Professional Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["about"].description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactList, {
    size: "8",
    as: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Name:"), " Travis Waith-Mair"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Email, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, " travis.mair@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Telephone:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Telephone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, " (801) 200-7597")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Location:"), " Salt Lake City, Utah")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: "static/images/profile.png",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ }),

/***/ "./components/BoxTitles/BoxTitle.js":
/*!******************************************!*\
  !*** ./components/BoxTitles/BoxTitle.js ***!
  \******************************************/
/*! exports provided: BoxH1, SectionBoxTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxH1", function() { return BoxH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBoxTitle", function() { return SectionBoxTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var string_pixel_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! string-pixel-width */ "string-pixel-width");
/* harmony import */ var string_pixel_width__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(string_pixel_width__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/BoxTitles/BoxTitle.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  &::before,\n  &::after {\n    content: \"\";\n    position: absolute;\n    ", ": 0;\n    ", ": 1px solid\n      ", ";\n    /* width: ", "; */\n    width:calc(51% - ", ");\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  margin: auto;\n  text-align: center;\n  min-width: ", "px;\n  max-width: fit-content;\n  border: 1px solid ", ";\n  color: ", ";\n  padding: ", ";\n  position: relative;\n  font-size: ", ";\n  font-weight: bold;\n  font-family: ", ";\n  line-height: ", ";\n  letter-spacing: -0.03125rem;\n  ", ";\n\n  &::after {\n    content: ", ";\n    font-size: ", ";\n    font-weight: normal;\n    position: absolute;\n    width: fit-content;\n    ", ": 0;\n    left: 0;\n    right: 0;\n    display: block;\n    text-align: center;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    ", ": ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var elements = {
  h1: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize42"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize20"],
    margin: "-0.9rem"
  },
  h2: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize32"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize18"],
    margin: "-0.7rem"
  },
  h3: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize28"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize16"],
    margin: "-0.6rem"
  },
  h4: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize20"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize14"],
    margin: "-0.6rem"
  },
  h5: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize18"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize13"],
    margin: "-0.5rem"
  },
  h6: {
    main: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize14"],
    subtitle: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize11"],
    margin: "-0.4rem"
  }
};
var BoxHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject(), function (_ref) {
  var _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 1 : _ref$minWidth;
  return minWidth;
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["spacing16"], function (_ref2) {
  var _ref2$as = _ref2.as,
      as = _ref2$as === void 0 ? "h2" : _ref2$as;
  return elements[as].main;
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["serif"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["lineHeightTight"], function (props) {
  return props.top ? "border-top: none" : "border-bottom: none";
}, function (props) {
  return props.subtitle ? "\"".concat(props.subtitle, "\"") : " ";
}, function (_ref3) {
  var _ref3$as = _ref3.as,
      as = _ref3$as === void 0 ? "h2" : _ref3$as;
  return elements[as].subtitle;
}, function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "margin-top" : "margin-bottom";
}, function (_ref4) {
  var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "h2" : _ref4$as;
  return elements[as].margin;
});
var BottomBorder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "border-top" : "border-bottom";
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.width ? "".concat(props.width, "px") : "1rem";
}, function (props) {
  return "".concat(props.width, "px");
});

var BoxTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(BoxTitle, _Component);

  function BoxTitle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BoxTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BoxTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      bottomBorderlength: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateTextWidth", function () {
      var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var as = _this.props.as in elements ? _this.props.as : "h2";
      var FONT_MULTIPLE = parseFloat(elements[as].subtitle);
      var BASE_FONT_SIZE = 16;
      var fontSizeInPixels = BASE_FONT_SIZE * FONT_MULTIPLE;
      var leftAndRightPadding = fontSizeInPixels * 2;
      return txt.length > 0 ? string_pixel_width__WEBPACK_IMPORTED_MODULE_2___default()(txt, {
        font: "Times New Roman",
        size: fontSizeInPixels
      }) + leftAndRightPadding : 0;
    });

    return _this;
  }

  _createClass(BoxTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inverse = _this$props.inverse,
          top = _this$props.top,
          subtitle = _this$props.subtitle,
          props = _objectWithoutProperties(_this$props, ["children", "inverse", "top", "subtitle"]);

      var subTitleWidth = this.calculateTextWidth(subtitle);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxHeading, _extends({}, props, {
        minWidth: subTitleWidth,
        subtitle: subtitle,
        inverse: inverse,
        top: top,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBorder, {
        inverse: inverse,
        top: top,
        width: subTitleWidth / 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }));
    }
  }]);

  return BoxTitle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var BoxH1 = function BoxH1(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxTitle, _extends({}, props, {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), children);
};
var SectionBoxTitle = function SectionBoxTitle(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxTitle, _extends({}, props, {
    as: "h2",
    top: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), children);
};
/* harmony default export */ __webpack_exports__["default"] = (BoxTitle);

/***/ }),

/***/ "./components/Contact/Contact.js":
/*!***************************************!*\
  !*** ./components/Contact/Contact.js ***!
  \***************************************/
/*! exports provided: Contact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactList_ContactList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactList/ContactList */ "./components/ContactList/ContactList.js");
/* harmony import */ var _ContentSection_ContentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentSection/ContentSection */ "./components/ContentSection/ContentSection.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Contact/Contact.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 300px;\n  margin: 0 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var FlexItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject());
var FlexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Contact = function Contact(_ref) {
  var list = _ref.list,
      message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentSection_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactList_ContactList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    list: list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, message)));
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/ContactList/ContactList.js":
/*!***********************************************!*\
  !*** ./components/ContactList/ContactList.js ***!
  \***********************************************/
/*! exports provided: ContactList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactList", function() { return ContactList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ContactList/ContactList.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  border-bottom: 1px solid;\n  padding: 0.5em 1em;\n  &:last-child {\n    border-bottom: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  flex: 1 1 300px;\n  margin: 0 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject2());
var ContactList = function ContactList(_ref) {
  var list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, list && list.map(function (listitem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
      key: listitem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, listitem);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./components/ContentSection/ContentSection.js":
/*!*****************************************************!*\
  !*** ./components/ContentSection/ContentSection.js ***!
  \*****************************************************/
/*! exports provided: ContentSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return ContentSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ContentSection/ContentSection.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 40px;\n  border-bottom: 1px solid grey;\n  font-size: 14px;\n  line-height: 1.42857143;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ContentSection = function ContentSection(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (ContentSection);

/***/ }),

/***/ "./components/ExperienceSections/ExperienceSection.js":
/*!************************************************************!*\
  !*** ./components/ExperienceSections/ExperienceSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Split */ "./components/Split/index.js");
/* harmony import */ var _BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BoxTitles/BoxTitle */ "./components/BoxTitles/BoxTitle.js");
/* harmony import */ var _PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PadBox/PadBox */ "./components/PadBox/PadBox.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ExperienceSections/ExperienceSection.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n  min-height: 100vh;\n  display: grid;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import Grid from "../Grid";
// import Stack from "../Stack/Stack";



 // import { about } from "../constants/constants";
// import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

var ExperienceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject());

var Experience = function Experience() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExperienceWrapper, {
    id: "experience",
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_3__["SectionBoxTitle"], {
    inverse: true,
    subtitle: "What I have been doing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Work Experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "64",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Split__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fraction: "1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "dates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Duis consectetur veniam eiusmod amet aliquip incididunt nostrud laboris est."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./components/FinalSection/FinalSection.js":
/*!*************************************************!*\
  !*** ./components/FinalSection/FinalSection.js ***!
  \*************************************************/
/*! exports provided: FinalSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalSection", function() { return FinalSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TitleBox_TitleBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TitleBox/TitleBox */ "./components/TitleBox/TitleBox.js");
/* harmony import */ var _LinkList_LinkList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LinkList/LinkList */ "./components/LinkList/LinkList.js");
/* harmony import */ var _PadBox_PadBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PadBox/PadBox */ "./components/PadBox/PadBox.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Grid */ "./components/Grid/index.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/FinalSection/FinalSection.js";





var FinalSection = function FinalSection(_ref) {
  var links = _ref.links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PadBox_PadBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    minWidth: "320px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleBox_TitleBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ABOUT THIS PAGE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Made with love and patience by Justin Travis Waith-Mair")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleBox_TitleBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "AROUND THE WEB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkList_LinkList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    links: links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FinalSection);

/***/ }),

/***/ "./components/Grid/index.js":
/*!**********************************!*\
  !*** ./components/Grid/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
  "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
  "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
  "24": "1.5rem",
  "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
  "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
  "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
  default: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"]
};

var createColumns = function createColumns(_ref) {
  var columns = _ref.columns,
      minWidth = _ref.minWidth;
  return "repeat(".concat(columns ? columns : "auto-fit", ", \n   minmax(").concat(minWidth ? minWidth : "1px", ",1fr))");
};

var Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./components/Landing/Landing.js":
/*!***************************************!*\
  !*** ./components/Landing/Landing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MatchMedia_MatchMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MatchMedia/MatchMedia */ "./components/MatchMedia/MatchMedia.js");
/* harmony import */ var _Stack_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Stack/Stack */ "./components/Stack/Stack.js");
/* harmony import */ var _Parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Parallax/Parallax */ "./components/Parallax/Parallax.js");
/* harmony import */ var _BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BoxTitles/BoxTitle */ "./components/BoxTitles/BoxTitle.js");
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Landing/Landing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border: 2px solid ", ";\n  padding: 2rem;\n  margin-bottom: 200px;\n  align-self: end;\n  text-align: center;\n  position: relative;\n  background: rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  &::after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 33%;\n    top: 33%;\n    position: absolute;\n    border-left: 0.75rem solid transparent;\n    border-right: 0.75rem solid transparent;\n    border-top: 1.5rem solid white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  height: 100vh;\n  justify-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Landing = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["white"]);
var backgroundImage = "/static/images/background.jpeg";
var ScrollLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject2(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["white"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["white"]);

var LandingComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingComponent, _React$Component);

  function LandingComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LandingComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LandingComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scroll", function () {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    });

    return _this;
  }

  _createClass(LandingComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.matches) this.scroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.matches) this.scroll();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__["default"], {
        as: "header",
        backgroundUrl: backgroundImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Landing, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_5__["BoxH1"], {
        subtitle: "Web Developer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Travis Waith-Mair"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollLink, {
        "aria-label": "scoll navbar to top",
        href: "#top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })));
    }
  }]);

  return LandingComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_MatchMedia_MatchMedia__WEBPACK_IMPORTED_MODULE_2__["withMatchMedia"])("(max-width:".concat(_constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["breakWidth480"], ")"))(LandingComponent));

/***/ }),

/***/ "./components/LinkList/LinkList.js":
/*!*****************************************!*\
  !*** ./components/LinkList/LinkList.js ***!
  \*****************************************/
/*! exports provided: LinkList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkList", function() { return LinkList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkListStyles */ "./components/LinkList/LinkListStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/LinkList/LinkList.js";




function iconPicker(content) {
  switch (content) {
    case "github":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        });
      }

    case "twitter":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      }

    case "linkedin":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      }

    default:
      {
        return "";
      }
  }
}

var LinkList = function LinkList(_ref) {
  var links = _ref.links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_2__["ListOfLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, links && links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_2__["IconLink"], {
      key: link.href,
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, iconPicker(link.content));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (LinkList);

/***/ }),

/***/ "./components/LinkList/LinkListStyles.js":
/*!***********************************************!*\
  !*** ./components/LinkList/LinkListStyles.js ***!
  \***********************************************/
/*! exports provided: ListOfLinks, IconLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfLinks", function() { return ListOfLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLink", function() { return IconLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid;\n  border-radius: 50%;\n  padding: 0.4em 0.7em 0.7em 0.7em;\n  margin: 0 0.2em;\n  background: inherit;\n  &:hover {\n    text-decoration: none;\n    background: white;\n    color: grey;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ListOfLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var IconLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a(_templateObject2());

/***/ }),

/***/ "./components/MatchMedia/MatchMedia.js":
/*!*********************************************!*\
  !*** ./components/MatchMedia/MatchMedia.js ***!
  \*********************************************/
/*! exports provided: withMatchMedia, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMatchMedia", function() { return withMatchMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MatchMedia/MatchMedia.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-line

var MatchMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(MatchMedia, _Component);

  function MatchMedia() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MatchMedia);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MatchMedia)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      matches: _this.props.defaultMatches
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mql", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.update(e);
    });

    return _this;
  }

  _createClass(MatchMedia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mql.removeListener(this.handleChange);
      this.mql = null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(lastProps) {
      if (lastProps.media !== this.props.media) {
        this.init();
      }
    }
  }, {
    key: "init",
    value: function init() {
      if (window && window.matchMedia) {
        this.mql = window.matchMedia(this.props.media);
        this.mql.addListener(this.handleChange);
        this.update(this.mql);
      } else {
        var _this$props = this.props,
            media = _this$props.media,
            matches = _this$props.defaultMatches;
        this.update({
          media: media,
          matches: matches
        });
      }
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var matches = _ref.matches,
          media = _ref.media;
      this.setState({
        matches: matches,
        media: media
      });
      this.props.onChange({
        matches: matches,
        media: media
      });
    }
  }, {
    key: "render",
    value: function render() {
      var matches = this.state.matches;
      var _this$props2 = this.props,
          children = _this$props2.children,
          media = _this$props2.media;
      return children({
        matches: matches,
        media: media
      });
    }
  }]);

  return MatchMedia;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MatchMedia, "defaultProps", {
  media: "(min-width: 0px)",
  defaultMatches: true,
  onChange: function onChange() {
    return null;
  },
  children: function children() {
    return null;
  }
});

var withMatchMedia = function withMatchMedia(media) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            var _this2 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MatchMedia, {
              defaultMatches: false,
              media: media,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            }, function (_ref2) {
              var matches = _ref2.matches;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
                matches: matches
              }, _this2.props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                },
                __self: this
              }));
            });
          }
        }]);

        return _class;
      }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
    );
  };
};
/* harmony default export */ __webpack_exports__["default"] = (MatchMedia);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StickyNav_StickyNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyNav/StickyNav */ "./components/StickyNav/StickyNav.js");
/* harmony import */ var _components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing/Landing */ "./components/Landing/Landing.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Root */ "./components/Root.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageWrapper */ "./components/PageWrapper.js");
/* harmony import */ var _components_constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.footer(_templateObject(), _components_constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["darkGrey"]);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Root__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: {
      primaryColor: "#BD5751"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StickyNav_StickyNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/*! exports provided: NavWrapper, NavItem, NavSlider, NavCollapse, Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavWrapper", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSlider", function() { return NavSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapse", function() { return NavCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/NavBar/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  text-align: center;\n  text-decoration: none;\n  font-size:", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  background: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    display: inline;\n    margin:auto ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 50px;\n  display: flex;\n  @media (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n    order: 50;\n    background: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  height: auto;\n  margin: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  border: 0;\n  color: ", ";\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  flex-grow: 10;\n  margin-right: auto;\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  min-width: auto;\n  margin-left: ", ";\n  white-space: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  & a {\n    text-decoration: none;\n    color: ", ";\n  }\n  align-self: center;\n  margin: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  z-index: 6;\n  top: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject(), function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["grey20"];
}, function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
});
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject2(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize18"], function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["spacing8"]);
var BrandName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject3(), function (props) {
  return props.theme.fontFamily ? props.theme.fontFamily : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["sans"];
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize18"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["spacing8"]);
var BrandLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject4(), function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject5(), function (props) {
  return props.size ? props.size : "30px";
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["spacing8"]);

var Brand = function Brand(_ref) {
  var brandName = _ref.brandName,
      src = _ref.src,
      href = _ref.href;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrandLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, src && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: src,
    alt: "".concat(brandName ? brandName + " " : "", "logo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), brandName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrandName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, brandName)));
};

var NavSlider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["breakWidth480"], function (props) {
  return props.hidden ? "none" : "flex";
}, function (props) {
  return props.theme.secondaryColor ? props.theme.secondaryColor : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["grey30"];
});
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject7(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["fontSize18"], function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.theme.white ? props.theme.white : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : "inherit";
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["breakWidth480"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["spacing8"]);

var NavCollapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavCollapse, _React$Component);

  function NavCollapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavCollapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavCollapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hidden: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      return _this.setState(function (state) {
        return {
          hidden: !state.hidden
        };
      });
    });

    return _this;
  }

  _createClass(NavCollapse, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hamburger, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSlider, _extends({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), children));
    }
  }]);

  return NavCollapse;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Normalize.js":
/*!*********************************!*\
  !*** ./components/Normalize.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+27px');\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font: normal normal 400 ", "/", " ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    color: ", ";\n    margin: 0;\n  }\n\n  ::selection {\n      background: #d9f7fc;\n  }\n\n  normalize {\n    display: block;\n\n    & article,\n    & aside,\n    & details,\n    & figcaption,\n    & figure,\n    & footer,\n    & header,\n    & hgroup,\n    & main,\n    & menu,\n    & nav,\n    & section,\n    & summary {\n      display: block;\n    }\n\n    & audio,\n    & canvas,\n    & progress,\n    & video {\n      display: inline-block;\n      vertical-align: baseline;\n    }\n\n    & audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n\n    & [hidden],\n    & template {\n      display: none;\n    }\n\n    & a {\n      background-color: transparent;\n    }\n\n    & a:active,\n    & a:hover {\n      outline: 0;\n    }\n\n    & abbr[title] {\n      border-bottom: 1px dotted;\n    }\n\n    & b,\n    & strong {\n      font-weight: bold;\n    }\n\n    & dfn {\n      font-style: italic;\n    }\n\n    & h1 {\n      font-size: 2em;\n      margin: 0.67em 0;\n    }\n\n    & mark {\n      background: ", ";\n      color: ", ";\n    }\n\n    & small {\n      font-size: 80%;\n    }\n\n    & sub,\n    & sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n\n    & sup {\n      top: -0.5em;\n    }\n\n    & sub {\n      bottom: -0.25em;\n    }\n\n    & img {\n      border: 0;\n    }\n\n    & svg:not(:root) {\n      overflow: hidden;\n    }\n\n    & figure {\n      margin: 1em 40px;\n    }\n\n    & hr {\n      height: 0;\n    }\n\n    & pre {\n      overflow: auto;\n    }\n\n    & code,\n    & kbd,\n    & pre,\n    & samp {\n      font-family: monospace, monospace;\n      font-size: 1em;\n    }\n\n    & button,\n    & input,\n    & optgroup,\n    & select,\n    & textarea {\n      color: inherit;\n      font: inherit;\n      margin: 0;\n    }\n\n    & button {\n      overflow: visible;\n    }\n\n    & button,\n    & select {\n      text-transform: none;\n    }\n    button,\n    html input[type=\"button\"],\n    input[type=\"reset\"],\n    input[type=\"submit\"] {\n      -webkit-appearance: button;\n      cursor: pointer;\n    }\n\n    & button[disabled],\n    & html input[disabled] {\n      cursor: default;\n    }\n\n    & button::-moz-focus-inner,\n    & input::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n\n    & input {\n      line-height: normal;\n    }\n\n    & input[type=\"checkbox\"],\n    & input[type=\"radio\"] {\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    & input[type=\"number\"]::-webkit-inner-spin-button,\n    & input[type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n\n    & input[type=\"search\"] {\n      -webkit-appearance: textfield;\n      box-sizing: content-box;\n    }\n\n    & input[type=\"search\"]::-webkit-search-cancel-button,\n    & input[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n\n    & fieldset {\n      border: 1px solid ", ";\n      margin: 0 2px;\n      padding: 0.35em 0.625em 0.75em;\n    }\n\n    & legend {\n      border: 0;\n      padding: 0;\n    }\n\n    & textarea {\n      overflow: auto;\n    }\n\n    & optgroup {\n      font-weight: bold;\n    }\n\n    & table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    & td,\n    & th {\n      padding: 0;\n    }\n  }\n\n  & a {\n    color: ", ";\n    text-decoration: none;\n\n    &:hover {\n        color: ", "\n    }\n}\n\n  & h1, & h2, & h3, & h4, & h5, & h6 {\n      font-family: ", ";\n  }\n\n  & h1 {\n      font: normal normal normal ", "/", " ", ";\n      font-weight: 300;\n  }\n\n  & h2 {\n      font-size: ", ";\n      line-height: ", ";\n      font-weight: 100;\n  }\n\n  & h3, & h4, & h5, & h6 {\n      font-size: ", ";\n      font-weight: bold;\n  }\n\n  & h3 {\n      line-height: ", ";\n      letter-spacing: 0.00278em;\n  }\n\n  & h4, & h5, & h6 {\n      line-height: ", ";\n  }\n\n  & dt {\n      font-size: ", ";\n      font-style: italic;\n      font-weight: 400;\n      line-height: ", ";\n  }\n\n  & dd {\n      margin: 0;\n  }\n\n  & code {\n      font-family: ", ";\n      white-space: pre-wrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Normalize = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["fontSizeRoot"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["sans"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["text120"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["yellow10"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["black"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["grey15"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["colorLink"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["colorLinkHover"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["sans"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["fontSize42"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeightTight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["sans"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["fontSize28"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeightTight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["fontSize18"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeightTight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeightTight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["fontSize18"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["lineHeightTight"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["monospace"]);
/* harmony default export */ __webpack_exports__["default"] = (Normalize);

/***/ }),

/***/ "./components/PadBox/PadBox.js":
/*!*************************************!*\
  !*** ./components/PadBox/PadBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
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



var allowedSpacings = {
  // fixed vals
  "0": "0",
  "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
  "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
  "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
  "24": "1.5rem",
  "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
  "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
  "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
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

var PadBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), handlePaddingFor("bottom"), handlePaddingFor("left"), handlePaddingFor("top"), handlePaddingFor("right"));
/* harmony default export */ __webpack_exports__["default"] = (PadBox);

/***/ }),

/***/ "./components/PageWrapper.js":
/*!***********************************!*\
  !*** ./components/PageWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/PageWrapper.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  perspective: 2px;\n  transform-style: preserve-3d;\n  scroll-snap-type: y proximity;\n  overflow-y: auto;\n  height: 100vh;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  @media (max-width: ", ") {\n    scroll-padding-top: 64px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Outer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__["white"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__["breakWidthMax"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__["breakWidth480"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: ", ";\n  &:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    background-size: cover;\n    transform: translateZ(-1px) scale(1.5);\n    z-index: -1;\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Parallax = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.minHeight || "100vh";
}, _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], function (props) {
  return props.backgroundUrl && "background: url(".concat(props.backgroundUrl, ") no-repeat center center;");
});
/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ }),

/***/ "./components/Portfolio/Portfolio.js":
/*!*******************************************!*\
  !*** ./components/Portfolio/Portfolio.js ***!
  \*******************************************/
/*! exports provided: Portfolio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectList_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProjectList/ProjectList */ "./components/ProjectList/ProjectList.js");
/* harmony import */ var _ContentSection_ContentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentSection/ContentSection */ "./components/ContentSection/ContentSection.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Portfolio/Portfolio.js";



var Portfolio = function Portfolio(_ref) {
  var _ref$projectGroups = _ref.projectGroups,
      projectGroups = _ref$projectGroups === void 0 ? {} : _ref$projectGroups;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentSection_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, projectGroups && Object.keys(projectGroups).map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectList_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      title: key,
      projects: projectGroups[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/ProjectItem/ProjectItem.js":
/*!***********************************************!*\
  !*** ./components/ProjectItem/ProjectItem.js ***!
  \***********************************************/
/*! exports provided: ProjectItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItem", function() { return ProjectItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectItemStyles */ "./components/ProjectItem/ProjectItemStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ProjectItem/ProjectItem.js";


var ProjectItem = function ProjectItem(_ref) {
  var src = _ref.src,
      href = _ref.href,
      alt = _ref.alt,
      desc = _ref.desc;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectItemStyles__WEBPACK_IMPORTED_MODULE_1__["ItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectItemStyles__WEBPACK_IMPORTED_MODULE_1__["ScreenShot"], {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectItemStyles__WEBPACK_IMPORTED_MODULE_1__["ProjectLink"], {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, desc));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ }),

/***/ "./components/ProjectItem/ProjectItemStyles.js":
/*!*****************************************************!*\
  !*** ./components/ProjectItem/ProjectItemStyles.js ***!
  \*****************************************************/
/*! exports provided: ItemWrapper, ProjectLink, ScreenShot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectLink", function() { return ProjectLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenShot", function() { return ScreenShot; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 5px;\n  white-space: normal;\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n  text-decoration: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  color: #333;\n  background-color: #fff;\n  border: 1px solid #ccc;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  font-family: Helvetica, Arial, sans-serif;\n  flex: 0 1 380px;\n  margin: 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var ProjectLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a(_templateObject2());
var ScreenShot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject3());

/***/ }),

/***/ "./components/ProjectList/ProjectList.js":
/*!***********************************************!*\
  !*** ./components/ProjectList/ProjectList.js ***!
  \***********************************************/
/*! exports provided: ProjectList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectList", function() { return ProjectList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProjectItem/ProjectItem */ "./components/ProjectItem/ProjectItem.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ProjectList/ProjectList.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-width: 100%;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n  text-align: center;\n  justify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var ListHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2(_templateObject2());
var ProjectList = function ProjectList(_ref) {
  var _ref$projects = _ref.projects,
      projects = _ref$projects === void 0 ? [] : _ref$projects,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title), projects.map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: project.desc
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ }),

/***/ "./components/Root.js":
/*!****************************!*\
  !*** ./components/Root.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Translate */ "./components/Translate.js");
/* harmony import */ var _Normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Normalize */ "./components/Normalize.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Root.js";





var Root = function Root(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? {} : _ref$strings,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Translate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    strings: strings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Normalize__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./components/Split/index.js":
/*!***********************************!*\
  !*** ./components/Split/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
  "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
  "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
  "24": "1.5rem",
  "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
  "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
  "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
  default: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"]
};
var fractions = {
  "1/4": "25%",
  "1/3": "33.33%",
  "1/2": "50%",
  "2/3": "66.67%",
  "3/4": "75%",
  default: "50%"
};

var createColumns = function createColumns(_ref) {
  var fraction = _ref.fraction;
  return "".concat(fractions[fraction] ? fractions[fraction] : fractions.default, " 1fr");
};

var Split = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["default"] = (Split);

/***/ }),

/***/ "./components/Stack/Stack.js":
/*!***********************************!*\
  !*** ./components/Stack/Stack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: ", ";\n  grid-auto-columns: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing4"],
  "8": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing8"],
  "16": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing16"],
  "24": "1.5rem",
  "32": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing32"],
  "64": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing64"],
  "128": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["spacing128"],
  default: "0"
};
var Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["default"] = (Stack);

/***/ }),

/***/ "./components/Stack/Stackable.js":
/*!***************************************!*\
  !*** ./components/Stack/Stackable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var type = {
  light: {
    "background-color": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["white"],
    color: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["black"]
  },
  // eslint-disable-line no-use-before-define
  medium: {
    "background-color": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["mediumGrey"],
    color: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["black"]
  },
  // eslint-disable-line no-use-before-define
  dark: {
    "background-color": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["darkGrey"],
    color: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["white"]
  },
  // eslint-disable-line no-use-before-define
  transparent: {
    "background-color": "transparent",
    color: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["white"]
  },
  // eslint-disable-line no-use-before-define
  default: {
    "background-color": _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["white"],
    color: _constants_styled_constants__WEBPACK_IMPORTED_MODULE_1__["black"]
  }
};
var Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return Object.entries(type[props.type] || type.default).map(function (x) {
    return x.join(":");
  }).join(";");
});
/* harmony default export */ __webpack_exports__["default"] = (Stack);

/***/ }),

/***/ "./components/StickyNav/StickyNav.js":
/*!*******************************************!*\
  !*** ./components/StickyNav/StickyNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavBar */ "./components/NavBar/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/StickyNav/StickyNav.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  text-decoration: none;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["colorLinkHover"]);

var StickyNav = function StickyNav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavWrapper"], {
    id: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["Brand"], {
    brandName: "Travis Waith-Mair",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavSlider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    as: "button",
    onClick: function onClick() {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    },
    href: "javascript:void(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Experience")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    href: "/#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StickyNav);

/***/ }),

/***/ "./components/TitleBox/TitleBox.js":
/*!*****************************************!*\
  !*** ./components/TitleBox/TitleBox.js ***!
  \*****************************************/
/*! exports provided: TitleBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBox", function() { return TitleBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/TitleBox/TitleBox.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  flex: 1 1 400px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject2());
var TitleBox = function TitleBox(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), children);
};
/* harmony default export */ __webpack_exports__["default"] = (TitleBox);

/***/ }),

/***/ "./components/Translate.js":
/*!*********************************!*\
  !*** ./components/Translate.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/styled-constants */ "./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Translate.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Outer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__["white"], _constants_styled_constants__WEBPACK_IMPORTED_MODULE_2__["breakWidthMax"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Outer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./components/constants/constants.js":
/*!*******************************************!*\
  !*** ./components/constants/constants.js ***!
  \*******************************************/
/*! exports provided: about, list, desc, pageMeta, links, portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desc", function() { return desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageMeta", function() { return pageMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolio", function() { return portfolio; });
var about = {
  description: "My name is Travis Waith-Mair and I'm an excited and energetic Web Developer, currently working just outside of Salt Lake City, UT. Outside of my day job, I enjoy building and maintaining open source projects, freelance work, and hand out my kids at home.  I love Javascript and especially React.js.  Outside of web development, I love all things nerdy.  I often can be found debating Star Wars, super heroes, and most anything else nerdy.   I have learned to speak Thai, and some Spanish and Esperanto.  I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  languages: ["HTML", "CSS", "JavaScript", "ES6", "React.js", "Bootstrap", "MongoDB", "Angular.js", "Express", "Node"]
};
var list = ["J. Travis Waith-Mair", "travis.mair@gmail.com", "(801) 200 - 7597", "Salt Lake City, Utah"];
var desc = "If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.";
var pageMeta = {
  title: "Travis Waith-Mair's Personal website",
  tags: [{
    name: "description",
    content: "Personal Website"
  }, {
    property: "og:type",
    content: "article"
  }, {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }]
};
var links = [{
  href: "https://github.com/Jarvis1010",
  content: "github"
}, {
  href: "https://twitter.com/want2code",
  content: "twitter"
}, {
  href: "https://www.linkedin.com/in/travis-mair/",
  content: "linkedin"
}];
var portfolio = {
  "Open Source Projects": [{
    href: "https://www.npmjs.com/package/react-copy-code",
    src: "static/images/copycode.png",
    alt: "Screenshot of react-copy-code",
    desc: "react-copy-code"
  }, {
    href: "https://www.npmjs.com/package/react-clean-form",
    src: "static/images/inator.png",
    alt: "Screenshot of react-clean-form",
    desc: "react-clean-form"
  }, {
    href: "https://play.google.com/store/apps/details?id=com.sanktajlibroj",
    src: "static/images/mormono.png",
    alt: "Screenshot of Esperanto Book of Mormon",
    desc: "React Native App of Scriptures in Esperanto"
  }]
};

/***/ }),

/***/ "./components/constants/styled-constants.js":
/*!**************************************************!*\
  !*** ./components/constants/styled-constants.js ***!
  \**************************************************/
/*! exports provided: colorFacebook, colorInstagram, colorTwitter, colorPinterest, colorYoutube, colorOdnok, colorVk, yellow10, yellow20, yellow30, yellow40, yellow, lightGrey, mediumGrey, darkGrey, grey3, grey5, grey10, grey15, grey20, grey30, grey40, grey60, grey, text120, black, white, colorError, colorSuccess, colorWarn, colorLink30, colorLink, colorLinkHover, sans, serif, monospace, fontSizeRoot, fontSize11, fontSize13, fontSize14, fontSize16, fontSize18, fontSize20, fontSize28, fontSize32, fontSize42, lineHeightTight, lineHeight, capitalize, uppercase, spacing4, spacing8, spacing16, spacing32, spacing64, spacing128, breakWidth400, breakWidth480, breakWidth600, breakWidth840, breakWidth960, breakWidth1280, breakWidth1440, breakWidth1600, breakWidthMax, breakWidthGutterShift, gutter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFacebook", function() { return colorFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorInstagram", function() { return colorInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorTwitter", function() { return colorTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPinterest", function() { return colorPinterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorYoutube", function() { return colorYoutube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorOdnok", function() { return colorOdnok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorVk", function() { return colorVk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow10", function() { return yellow10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow20", function() { return yellow20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow30", function() { return yellow30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow40", function() { return yellow40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGrey", function() { return lightGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumGrey", function() { return mediumGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkGrey", function() { return darkGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey3", function() { return grey3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey5", function() { return grey5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey10", function() { return grey10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey15", function() { return grey15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey20", function() { return grey20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey30", function() { return grey30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey40", function() { return grey40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey60", function() { return grey60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text120", function() { return text120; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorError", function() { return colorError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorSuccess", function() { return colorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorWarn", function() { return colorWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLink30", function() { return colorLink30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLink", function() { return colorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorLinkHover", function() { return colorLinkHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sans", function() { return sans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serif", function() { return serif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monospace", function() { return monospace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeRoot", function() { return fontSizeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize11", function() { return fontSize11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize13", function() { return fontSize13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize14", function() { return fontSize14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize16", function() { return fontSize16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize18", function() { return fontSize18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize20", function() { return fontSize20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize28", function() { return fontSize28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize32", function() { return fontSize32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize42", function() { return fontSize42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeightTight", function() { return lineHeightTight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing4", function() { return spacing4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing8", function() { return spacing8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing16", function() { return spacing16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing32", function() { return spacing32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing64", function() { return spacing64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing128", function() { return spacing128; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth400", function() { return breakWidth400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth480", function() { return breakWidth480; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth600", function() { return breakWidth600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth840", function() { return breakWidth840; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth960", function() { return breakWidth960; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth1280", function() { return breakWidth1280; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth1440", function() { return breakWidth1440; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidth1600", function() { return breakWidth1600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidthMax", function() { return breakWidthMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWidthGutterShift", function() { return breakWidthGutterShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gutter", function() { return gutter; });
/* -- OTHER COMPANY BRANDS -- */
var colorFacebook = "#3b5998";
var colorInstagram = "#3c5a96";
var colorTwitter = "#00b6f1";
var colorPinterest = "#cb2027";
var colorYoutube = "#cd201f";
var colorOdnok = "#ed812b";
var colorVk = "#45668e";
/* Yellows */

var yellow10 = "#ffb81c"; // citrine

var yellow20 = "#f68d2e"; // amber

var yellow30 = "#d45311"; // topaz

var yellow40 = "#674730"; // bronzite

var yellow = yellow30;
/* -- Greys  -- */

var lightGrey = "#f9f9f9";
var mediumGrey = "#e9e9e9";
var darkGrey = "#808080";
var grey3 = "#eff0f0"; // onyx10

var grey5 = "#e0e2e2"; // onyx20

var grey10 = "#d0d3d3"; //quartz

var grey15 = "#bdc0c0"; // onyx40

var grey20 = "#a9adad"; // granite

var grey30 = "#878a8c"; // slate

var grey40 = "#53575b"; // onyx

var grey60 = "#3a3d40"; // onyx110

var grey = grey30;
var text120 = "#212225"; // onyxtext

var black = "#0d0f10";
var white = "#fff";
/* Util Colors */

var colorError = "orange"; // TODO:red10;

var colorSuccess = "#a3d287";
var colorWarn = "#ffd072";
var colorLink30 = "#177c9c"; // blue 600

var colorLink = colorLink30;
var colorLinkHover = colorLink; // TODO:blue20;
//normal 16px/1.4em

var sans = "Montserrat, Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", Arial, sans-serif;";
var serif = "\"Slabo 27px\", \"Palatino\", \"Palatino Linotype\", \"Georgia\", \"Times New Roman\", serif";
var monospace = "\"Courier New\", Courier, monospace";
/* effectively 16px (16px * 100% = 16px) but respects users' special needs */

var fontSizeRoot = "100%";
/* desired px / 16px (root size) = rem */

var fontSize11 = "0.6875rem";
var fontSize13 = "0.8125rem";
var fontSize14 = "0.875rem";
var fontSize16 = "1rem";
var fontSize18 = "1.125rem";
var fontSize20 = "1.25rem";
var fontSize28 = "1.75rem";
var fontSize32 = "2rem";
var fontSize42 = "2.625rem";
var lineHeightTight = 1.2;
var lineHeight = 1.4;
/* text_transform variables (may not internationalize so variablelize) */

var capitalize = "capitalize";
var uppercase = "uppercase";
/* Spacing Variables  */

var spacing4 = "0.25rem";
/* 4px */

var spacing8 = "0.5rem";
/* 8px */

var spacing16 = "1rem";
/* 16px */

var spacing32 = "2rem";
/* 32px */

var spacing64 = "4rem";
/* 64px */

var spacing128 = "8rem";
/* 128px */

/* -- MATERIAL BREAKPOINTS -- */

var breakWidth400 = "400px";
var breakWidth480 = "480px";
var breakWidth600 = "600px";
var breakWidth840 = "840px";
var breakWidth960 = "960px";
var breakWidth1280 = "1280px";
var breakWidth1440 = "1440px";
var breakWidth1600 = "1600px";
var breakWidthMax = breakWidth1600;
/*
According to material design, the gutter width should be:
	16px (1em) when the smallest width of the devices is < 600
	24px (1.5em) otherwise
*/

var breakWidthGutterShift = breakWidth600;
var gutter = "var(--gutter, 1.5rem)";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_AboutSection_AboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutSection/AboutSection */ "./components/AboutSection/AboutSection.js");
/* harmony import */ var _components_ExperienceSections_ExperienceSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceSections/ExperienceSection */ "./components/ExperienceSections/ExperienceSection.js");
/* harmony import */ var _components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portfolio/Portfolio */ "./components/Portfolio/Portfolio.js");
/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact/Contact */ "./components/Contact/Contact.js");
/* harmony import */ var _components_FinalSection_FinalSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FinalSection/FinalSection */ "./components/FinalSection/FinalSection.js");
/* harmony import */ var _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/constants/constants */ "./components/constants/constants.js");
/* harmony import */ var _components_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Stack/Stack */ "./components/Stack/Stack.js");
/* harmony import */ var _components_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BoxTitles/BoxTitle */ "./components/BoxTitles/BoxTitle.js");
/* harmony import */ var _components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Stack/Stackable */ "./components/Stack/Stackable.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js";













/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pageMeta"].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutSection_AboutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExperienceSections_ExperienceSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "dark",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_10__["SectionBoxTitle"], {
    subtitle: "My Stuff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    projectGroups: _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__["portfolio"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "medium",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_10__["SectionBoxTitle"], {
    inverse: true,
    subtitle: "Talk To Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    list: _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__["list"],
    message: _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__["desc"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stack_Stackable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FinalSection_FinalSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    links: _components_constants_constants__WEBPACK_IMPORTED_MODULE_8__["links"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "string-pixel-width":
/*!*************************************!*\
  !*** external "string-pixel-width" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-pixel-width");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map