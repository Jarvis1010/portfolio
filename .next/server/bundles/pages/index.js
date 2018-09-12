module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutSection/AboutSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid__ = __webpack_require__("./components/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__("./components/constants/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: ", ";\n  justify-content: space-around;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  justify-self: center;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  line-height: 2rem;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  justify-items: center;\n  margin: 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  list-style: none;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n  & > li:not(:last-child):after {\n    content: \"\";\n    display: block;\n    padding: ", ";\n    border-bottom: 1px solid ", ";\n    top: 0;\n    position: absolute;\n    width: 100%;\n  }\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral([""]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 280px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var AboutWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */])(_templateObject);
var SplitGrid = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["B" /* spacing16 */]);
var Profile = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.section(_templateObject3);
var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject4, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var Details = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject5, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var ContactList = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3__Stack_Stack__["a" /* default */])(_templateObject6, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["B" /* spacing16 */], __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["q" /* grey */]);
var ContactListItem = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */])(_templateObject7);
var Email = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.attrs({
  href: function href(props) {
    return "mailto:".concat(props.children);
  }
})(_templateObject8);
var Telephone = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.attrs({
  href: function href(props) {
    return "tel:".concat(props.children);
  }
})(_templateObject8);
var Image = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject9);

var AboutSection = function AboutSection() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AboutWrapper, {
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Personal Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */], {
    size: "0",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SplitGrid, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Professional Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* about */].description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Details, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactList, {
    size: "8",
    as: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "Name:"), " Travis Waith-Mair"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, "Email:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Email, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, " travis.mair@gmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "Telephone:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Telephone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, " (801) 200-7597")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Location:"), " Salt Lake City, Utah")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    src: "static/images/profile.png",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (AboutSection);

/***/ }),

/***/ "./components/BoxTitles/BoxTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionBoxTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_pixel_width__ = __webpack_require__("string-pixel-width");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_pixel_width___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_string_pixel_width__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/BoxTitles/BoxTitle.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-self: center;\n  margin: auto;\n  text-align: center;\n  min-width: ", "px;\n  max-width: fit-content;\n  border: 1px solid ", ";\n  color: ", ";\n  padding: ", ";\n  position: relative;\n  font-size: ", ";\n  font-weight: bold;\n  font-family: ", ";\n  line-height: ", ";\n  letter-spacing: -0.03125rem;\n  ", ";\n\n  &::after {\n    content: ", ";\n    font-size: ", ";\n    font-weight: normal;\n    position: absolute;\n    width: fit-content;\n    ", ": 0;\n    left: 0;\n    right: 0;\n    display: block;\n    text-align: center;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    ", ": ", ";\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  &::before,\n  &::after {\n    content: \"\";\n    position: absolute;\n    ", ": 0;\n    ", ": 1px solid\n      ", ";\n    /* width: ", "; */\n    width:calc(51% - ", ");\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var elements = {
  h1: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["o" /* fontSize42 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["l" /* fontSize20 */],
    margin: "-0.9rem"
  },
  h2: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["n" /* fontSize32 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */],
    margin: "-0.7rem"
  },
  h3: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["m" /* fontSize28 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["j" /* fontSize16 */],
    margin: "-0.6rem"
  },
  h4: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["l" /* fontSize20 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["i" /* fontSize14 */],
    margin: "-0.6rem"
  },
  h5: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["h" /* fontSize13 */],
    margin: "-0.5rem"
  },
  h6: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["i" /* fontSize14 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["g" /* fontSize11 */],
    margin: "-0.4rem"
  }
};
var BoxHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h2(_templateObject, function (_ref) {
  var _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 1 : _ref$minWidth;
  return minWidth;
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["B" /* spacing16 */], function (_ref2) {
  var _ref2$as = _ref2.as,
      as = _ref2$as === void 0 ? "h2" : _ref2$as;
  return elements[as].main;
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["z" /* serif */], __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["v" /* lineHeightTight */], function (props) {
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
var BottomBorder = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2, function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "border-top" : "border-bottom";
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
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
    var _ref5;

    var _temp, _this;

    _classCallCheck(this, BoxTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref5 = BoxTitle.__proto__ || Object.getPrototypeOf(BoxTitle)).call.apply(_ref5, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        bottomBorderlength: undefined
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "calculateTextWidth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var as = _this.props.as in elements ? _this.props.as : "h2";
        var FONT_MULTIPLE = parseFloat(elements[as].subtitle);
        var BASE_FONT_SIZE = 16;
        var fontSizeInPixels = BASE_FONT_SIZE * FONT_MULTIPLE;
        var leftAndRightPadding = fontSizeInPixels * 2;
        return txt.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_string_pixel_width___default()(txt, {
          font: "Times New Roman",
          size: fontSizeInPixels
        }) + leftAndRightPadding : 0;
      }
    }), _temp));
  }

  _createClass(BoxTitle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          inverse = _props.inverse,
          top = _props.top,
          subtitle = _props.subtitle,
          props = _objectWithoutProperties(_props, ["children", "inverse", "top", "subtitle"]);

      var subTitleWidth = this.calculateTextWidth(subtitle);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BoxHeading, _extends({}, props, {
        minWidth: subTitleWidth,
        subtitle: subtitle,
        inverse: inverse,
        top: top,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BottomBorder, {
        inverse: inverse,
        top: top,
        width: subTitleWidth / 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }));
    }
  }]);

  return BoxTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var BoxH1 = function BoxH1(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BoxTitle, _extends({}, props, {
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }), children);
};
var SectionBoxTitle = function SectionBoxTitle(_ref7) {
  var children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BoxTitle, _extends({}, props, {
    as: "h2",
    top: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }), children);
};
/* unused harmony default export */ var _unused_webpack_default_export = (BoxTitle);

/***/ }),

/***/ "./components/Contact/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Contact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContactList_ContactList__ = __webpack_require__("./components/ContactList/ContactList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentSection_ContentSection__ = __webpack_require__("./components/ContentSection/ContentSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Contact/Contact.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  flex: 1 1 300px;\n  margin: 0 1em;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var FlexItem = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.p(_templateObject);
var FlexWrapper = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div(_templateObject2);
var Contact = function Contact(_ref) {
  var list = _ref.list,
      message = _ref.message;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ContentSection_ContentSection__["a" /* default */], {
    title: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ContactList_ContactList__["a" /* default */], {
    list: list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, message)));
};
/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./components/ContactList/ContactList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContactList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ContactList/ContactList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  flex: 1 1 300px;\n  margin: 0 1em;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  border-bottom: 1px solid;\n  padding: 0.5em 1em;\n  &:last-child {\n    border-bottom: none;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ListWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.ul(_templateObject);
var ListItem = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.li(_templateObject2);
var ContactList = function ContactList(_ref) {
  var list = _ref.list;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, list && list.map(function (listitem) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListItem, {
      key: listitem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, listitem);
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (ContactList);

/***/ }),

/***/ "./components/ContentSection/ContentSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentSection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ContentSection/ContentSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  padding: 40px;\n  border-bottom: 1px solid grey;\n  font-size: 14px;\n  line-height: 1.42857143;\n  text-align: center;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Content = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var ContentSection = function ContentSection(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["a"] = (ContentSection);

/***/ }),

/***/ "./components/ExperienceSections/ExperienceSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ExperienceSections/ExperienceSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import Grid from "../Grid";
// import Stack from "../Stack/Stack";


 // import { about } from "../constants/constants";
// import { spacing16, grey, breakWidth480 } from "../constants/styled-constants";

var ExperienceWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__["a" /* default */])(_templateObject);

var Experience = function Experience() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExperienceWrapper, {
    id: "experience",
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "What I have been doing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Work Experience"));
};

/* harmony default export */ __webpack_exports__["a"] = (Experience);

/***/ }),

/***/ "./components/FinalSection/FinalSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FinalSection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TitleBox_TitleBox__ = __webpack_require__("./components/TitleBox/TitleBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LinkList_LinkList__ = __webpack_require__("./components/LinkList/LinkList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Grid__ = __webpack_require__("./components/Grid/index.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/FinalSection/FinalSection.js";





var FinalSection = function FinalSection(_ref) {
  var links = _ref.links;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PadBox_PadBox__["a" /* default */], {
    size: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Grid__["a" /* default */], {
    minWidth: "320px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__TitleBox_TitleBox__["a" /* default */], {
    title: "ABOUT THIS PAGE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Made with love and patience by Justin Travis Waith-Mair")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__TitleBox_TitleBox__["a" /* default */], {
    title: "AROUND THE WEB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LinkList_LinkList__["a" /* default */], {
    links: links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (FinalSection);

/***/ }),

/***/ "./components/Grid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["D" /* spacing4 */],
  "8": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["F" /* spacing8 */],
  "16": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing16 */],
  "24": "1.5rem",
  "32": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing32 */],
  "64": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["E" /* spacing64 */],
  "128": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["A" /* spacing128 */],
  default: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing16 */]
};

var createColumns = function createColumns(_ref) {
  var columns = _ref.columns,
      minWidth = _ref.minWidth;
  return "repeat(".concat(columns ? columns : "auto-fit", ", \n   minmax(").concat(minWidth ? minWidth : "1px", ",1fr))");
};

var Grid = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "./components/Landing/Landing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MatchMedia_MatchMedia__ = __webpack_require__("./components/MatchMedia/MatchMedia.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Parallax_Parallax__ = __webpack_require__("./components/Parallax/Parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Landing/Landing.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  height: 100vh;\n  justify-items: center;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  border: 2px solid ", ";\n  padding: 2rem;\n  margin-bottom: 200px;\n  align-self: end;\n  text-align: center;\n  position: relative;\n  background: rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  &::after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 33%;\n    top: 33%;\n    position: absolute;\n    border-left: 0.75rem solid transparent;\n    border-right: 0.75rem solid transparent;\n    border-top: 1.5rem solid white;\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Landing = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3__Stack_Stack__["a" /* default */])(_templateObject, __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["H" /* white */]);
var backgroundImage = "/static/images/background.jpeg";
var ScrollLink = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a(_templateObject2, __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["H" /* white */], __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["H" /* white */]);

var LandingComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingComponent, _React$Component);

  function LandingComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LandingComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LandingComponent.__proto__ || Object.getPrototypeOf(LandingComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "scroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        document.querySelector("#inner").scrollTop = window.innerHeight;
      }
    }), _temp));
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Parallax_Parallax__["a" /* default */], {
        backgroundUrl: backgroundImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Landing, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__BoxTitles_BoxTitle__["a" /* BoxH1 */], {
        subtitle: "Web Developer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Travis Waith-Mair"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScrollLink, {
        href: "#top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })));
    }
  }]);

  return LandingComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__MatchMedia_MatchMedia__["a" /* withMatchMedia */])("(max-width:".concat(__WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["b" /* breakWidth480 */], ")"))(LandingComponent));

/***/ }),

/***/ "./components/LinkList/LinkList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LinkList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa__ = __webpack_require__("react-icons/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LinkListStyles__ = __webpack_require__("./components/LinkList/LinkListStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/LinkList/LinkList.js";




function iconPicker(content) {
  switch (content) {
    case "github":
      {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__["FaGithub"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        });
      }

    case "twitter":
      {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__["FaTwitter"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        });
      }

    case "linkedin":
      {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__["FaLinkedin"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LinkListStyles__["b" /* ListOfLinks */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, links && links.map(function (link) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__LinkListStyles__["a" /* IconLink */], {
      key: link.href,
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, iconPicker(link.content));
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (LinkList);

/***/ }),

/***/ "./components/LinkList/LinkListStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListOfLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: inline-block;\n    font-size: 25px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    color: inherit;\n        text-decoration: none;\n        border: 1px solid;\n        border-radius: 50%;\n        padding: 0.4em 0.7em 0.7em 0.7em;\n        margin: 0 0.2em;\n        background: inherit;\n        &:hover {\n            text-decoration: none;\n            background: white;\n            color: grey;\n        }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ListOfLinks = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
var IconLink = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject2);

/***/ }),

/***/ "./components/MatchMedia/MatchMedia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withMatchMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MatchMedia/MatchMedia.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // eslint-disable-line

var MatchMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(MatchMedia, _Component);

  function MatchMedia() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MatchMedia);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MatchMedia.__proto__ || Object.getPrototypeOf(MatchMedia)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        matches: _this.props.defaultMatches
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "mql", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.update(e);
      }
    }), _temp));
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
        var _props = this.props,
            media = _props.media,
            matches = _props.defaultMatches;
        this.update({
          media: media,
          matches: matches
        });
      }
    }
  }, {
    key: "update",
    value: function update(_ref2) {
      var matches = _ref2.matches,
          media = _ref2.media;
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
      var _props2 = this.props,
          children = _props2.children,
          media = _props2.media;
      return children({
        matches: matches,
        media: media
      });
    }
  }]);

  return MatchMedia;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(MatchMedia, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    media: "(min-width: 0px)",
    defaultMatches: true,
    onChange: function onChange() {
      return null;
    },
    children: function children() {
      return null;
    }
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

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MatchMedia, {
              defaultMatches: false,
              media: media,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            }, function (_ref3) {
              var matches = _ref3.matches;
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
                matches: matches
              }, _this2.props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              }));
            });
          }
        }]);

        return _class;
      }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)
    );
  };
};
/* unused harmony default export */ var _unused_webpack_default_export = (MatchMedia);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__ = __webpack_require__("./components/StickyNav/StickyNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Landing_Landing__ = __webpack_require__("./components/Landing/Landing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root__ = __webpack_require__("./components/Root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageWrapper__ = __webpack_require__("./components/PageWrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Footer = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.footer(_templateObject, __WEBPACK_IMPORTED_MODULE_6__components_constants_styled_constants__["f" /* darkGrey */]);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Root__["a" /* default */], {
    theme: {
      primaryColor: "#cd7d7a"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PageWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Landing_Landing__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__["a" /* default */], {
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

/***/ "./components/NavBar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavSlider; });
/* unused harmony export NavCollapse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/NavBar/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: ", ";\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  z-index: 6;\n  top: 0;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  & a {\n    text-decoration: none;\n    color: ", ";\n  }\n  align-self: center;\n  margin: ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  min-width: auto;\n  margin-left: ", ";\n  white-space: nowrap;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-items: center;\n  border: 0;\n  color: ", ";\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  flex-grow: 10;\n  margin-right: auto;\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  height: auto;\n  margin: ", ";\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  min-height: 50px;\n  display: flex;\n  @media (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n    order: 50;\n    background: ", ";\n  }\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: none;\n  text-align: center;\n  text-decoration: none;\n  font-size:", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  background: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    display: inline;\n    margin:auto ", ";\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NavWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.nav(_templateObject, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["s" /* grey20 */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
});
var NavItem = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span(_templateObject2, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);
var BrandName = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h2(_templateObject3, function (props) {
  return props.theme.fontFamily ? props.theme.fontFamily : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["y" /* sans */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);
var BrandLink = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a(_templateObject4, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
});
var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject5, function (props) {
  return props.size ? props.size : "30px";
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);

var Brand = function Brand(_ref) {
  var brandName = _ref.brandName,
      src = _ref.src,
      href = _ref.href;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BrandLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, src && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    src: src,
    alt: "".concat(brandName ? brandName + " " : "", "logo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }), brandName && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BrandName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, brandName)));
};

var NavSlider = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject6, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["b" /* breakWidth480 */], function (props) {
  return props.hidden ? "none" : "flex";
}, function (props) {
  return props.theme.secondaryColor ? props.theme.secondaryColor : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["t" /* grey30 */];
});
var Hamburger = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.button(_templateObject7, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : "inherit";
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["b" /* breakWidth480 */], __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);

var NavCollapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavCollapse, _React$Component);

  function NavCollapse() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, NavCollapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = NavCollapse.__proto__ || Object.getPrototypeOf(NavCollapse)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        hidden: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState(function (state) {
          return {
            hidden: !state.hidden
          };
        });
      }
    }), _temp));
  }

  _createClass(NavCollapse, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hamburger, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "\u2630"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavSlider, _extends({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), children));
    }
  }]);

  return NavCollapse;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Normalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+27px');\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font: normal normal 400 ", "/", " ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    color: ", ";\n    margin: 0;\n  }\n\n  ::selection {\n      background: #d9f7fc;\n  }\n\n  normalize {\n    display: block;\n\n    & article,\n    & aside,\n    & details,\n    & figcaption,\n    & figure,\n    & footer,\n    & header,\n    & hgroup,\n    & main,\n    & menu,\n    & nav,\n    & section,\n    & summary {\n      display: block;\n    }\n\n    & audio,\n    & canvas,\n    & progress,\n    & video {\n      display: inline-block;\n      vertical-align: baseline;\n    }\n\n    & audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n\n    & [hidden],\n    & template {\n      display: none;\n    }\n\n    & a {\n      background-color: transparent;\n    }\n\n    & a:active,\n    & a:hover {\n      outline: 0;\n    }\n\n    & abbr[title] {\n      border-bottom: 1px dotted;\n    }\n\n    & b,\n    & strong {\n      font-weight: bold;\n    }\n\n    & dfn {\n      font-style: italic;\n    }\n\n    & h1 {\n      font-size: 2em;\n      margin: 0.67em 0;\n    }\n\n    & mark {\n      background: ", ";\n      color: ", ";\n    }\n\n    & small {\n      font-size: 80%;\n    }\n\n    & sub,\n    & sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n\n    & sup {\n      top: -0.5em;\n    }\n\n    & sub {\n      bottom: -0.25em;\n    }\n\n    & img {\n      border: 0;\n    }\n\n    & svg:not(:root) {\n      overflow: hidden;\n    }\n\n    & figure {\n      margin: 1em 40px;\n    }\n\n    & hr {\n      height: 0;\n    }\n\n    & pre {\n      overflow: auto;\n    }\n\n    & code,\n    & kbd,\n    & pre,\n    & samp {\n      font-family: monospace, monospace;\n      font-size: 1em;\n    }\n\n    & button,\n    & input,\n    & optgroup,\n    & select,\n    & textarea {\n      color: inherit;\n      font: inherit;\n      margin: 0;\n    }\n\n    & button {\n      overflow: visible;\n    }\n\n    & button,\n    & select {\n      text-transform: none;\n    }\n    button,\n    html input[type=\"button\"],\n    input[type=\"reset\"],\n    input[type=\"submit\"] {\n      -webkit-appearance: button;\n      cursor: pointer;\n    }\n\n    & button[disabled],\n    & html input[disabled] {\n      cursor: default;\n    }\n\n    & button::-moz-focus-inner,\n    & input::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n\n    & input {\n      line-height: normal;\n    }\n\n    & input[type=\"checkbox\"],\n    & input[type=\"radio\"] {\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    & input[type=\"number\"]::-webkit-inner-spin-button,\n    & input[type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n\n    & input[type=\"search\"] {\n      -webkit-appearance: textfield;\n      box-sizing: content-box;\n    }\n\n    & input[type=\"search\"]::-webkit-search-cancel-button,\n    & input[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n\n    & fieldset {\n      border: 1px solid ", ";\n      margin: 0 2px;\n      padding: 0.35em 0.625em 0.75em;\n    }\n\n    & legend {\n      border: 0;\n      padding: 0;\n    }\n\n    & textarea {\n      overflow: auto;\n    }\n\n    & optgroup {\n      font-weight: bold;\n    }\n\n    & table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    & td,\n    & th {\n      padding: 0;\n    }\n  }\n\n  & a {\n    color: ", ";\n    text-decoration: none;\n\n    &:hover {\n        color: ", "\n    }\n}\n\n  & h1, & h2, & h3, & h4, & h5, & h6 {\n      font-family: ", ";\n  }\n\n  & h1 {\n      font: normal normal normal ", "/", " ", ";\n      font-weight: 300;\n  }\n\n  & h2 {\n      font-size: ", ";\n      line-height: ", ";\n      font-weight: 100;\n  }\n\n  & h3, & h4, & h5, & h6 {\n      font-size: ", ";\n      font-weight: bold;\n  }\n\n  & h3 {\n      line-height: ", ";\n      letter-spacing: 0.00278em;\n  }\n\n  & h4, & h5, & h6 {\n      line-height: ", ";\n  }\n\n  & dt {\n      font-size: ", ";\n      font-style: italic;\n      font-weight: 400;\n      line-height: ", ";\n  }\n\n  & dd {\n      margin: 0;\n  }\n\n  & code {\n      font-family: ", ";\n      white-space: pre-wrap;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Normalize = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["createGlobalStyle"])(_templateObject, __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["p" /* fontSizeRoot */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["u" /* lineHeight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["y" /* sans */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["G" /* text120 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["I" /* yellow10 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["r" /* grey15 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["d" /* colorLink */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["e" /* colorLinkHover */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["y" /* sans */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["o" /* fontSize42 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["v" /* lineHeightTight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["y" /* sans */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["m" /* fontSize28 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["v" /* lineHeightTight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["k" /* fontSize18 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["v" /* lineHeightTight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["v" /* lineHeightTight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["k" /* fontSize18 */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["v" /* lineHeightTight */], __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["x" /* monospace */]);
/* harmony default export */ __webpack_exports__["a"] = (Normalize);

/***/ }),

/***/ "./components/PadBox/PadBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var allowedSpacings = {
  // fixed vals
  "0": "0",
  "4": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["D" /* spacing4 */],
  "8": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["F" /* spacing8 */],
  "16": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing16 */],
  "24": "1.5rem",
  "32": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing32 */],
  "64": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["E" /* spacing64 */],
  "128": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["A" /* spacing128 */],
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

var PadBox = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, handlePaddingFor("bottom"), handlePaddingFor("left"), handlePaddingFor("top"), handlePaddingFor("right"));
/* harmony default export */ __webpack_exports__["a"] = (PadBox);

/***/ }),

/***/ "./components/PageWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/PageWrapper.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  perspective: 2px;\n  transform-style: preserve-3d;\n  scroll-snap-type: y proximity;\n  overflow-y: auto;\n  height: 100vh;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  @media (max-width: ", ") {\n    scroll-padding-top: 64px;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Outer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Inner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["H" /* white */], __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["c" /* breakWidthMax */], __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["b" /* breakWidth480 */]);
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Outer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inner, {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, children));
});

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  min-height: ", ";\n  &:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: grey;\n    background-size: cover;\n    transform: translateZ(-1px) scale(1.5);\n    z-index: -1;\n    ", ";\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Parallax = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, function (props) {
  return props.minHeight || "100vh";
}, function (props) {
  return props.backgroundUrl && "background: url(".concat(props.backgroundUrl, ") no-repeat center center;");
});
/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ }),

/***/ "./components/Portfolio/Portfolio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portfolio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectList_ProjectList__ = __webpack_require__("./components/ProjectList/ProjectList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentSection_ContentSection__ = __webpack_require__("./components/ContentSection/ContentSection.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Portfolio/Portfolio.js";



var Portfolio = function Portfolio(_ref) {
  var className = _ref.className,
      _ref$projectGroups = _ref.projectGroups,
      projectGroups = _ref$projectGroups === void 0 ? {} : _ref$projectGroups;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ContentSection_ContentSection__["a" /* default */], {
    title: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, projectGroups && Object.keys(projectGroups).map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectList_ProjectList__["a" /* default */], {
      key: key,
      title: key,
      projects: projectGroups[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Portfolio);

/***/ }),

/***/ "./components/ProjectItem/ProjectItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProjectItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectItemStyles__ = __webpack_require__("./components/ProjectItem/ProjectItemStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ProjectItem/ProjectItem.js";


var ProjectItem = function ProjectItem(_ref) {
  var src = _ref.src,
      href = _ref.href,
      alt = _ref.alt,
      desc = _ref.desc;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectItemStyles__["a" /* ItemWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectItemStyles__["c" /* ScreenShot */], {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectItemStyles__["b" /* ProjectLink */], {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, desc));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectItem);

/***/ }),

/***/ "./components/ProjectItem/ProjectItemStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ScreenShot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  font-family: Helvetica, Arial, sans-serif;\n  flex: 0 1 380px;\n  margin: 1em;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 5px;\n  white-space: normal;\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n  text-decoration: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  color: #333;\n  background-color: #fff;\n  border: 1px solid #ccc;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ItemWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
var ProjectLink = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject2);
var ScreenShot = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.img(_templateObject3);

/***/ }),

/***/ "./components/ProjectList/ProjectList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProjectList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectItem_ProjectItem__ = __webpack_require__("./components/ProjectItem/ProjectItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ProjectList/ProjectList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n display: flex;\n    flex-flow: row wrap;\n    text-align: center;\n    justify-content: space-around;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\nmin-width: 100%;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        line-height: 1.1;\n"]);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ListWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
var ListHeader = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h2(_templateObject2);
var ProjectList = function ProjectList(_ref) {
  var className = _ref.className,
      _ref$projects = _ref.projects,
      projects = _ref$projects === void 0 ? [] : _ref$projects,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, title), projects.map(function (project) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectItem_ProjectItem__["a" /* default */], _extends({
      key: project.desc
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }));
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectList);

/***/ }),

/***/ "./components/Root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Translate__ = __webpack_require__("./components/Translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Normalize__ = __webpack_require__("./components/Normalize.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Root.js";





var Root = function Root(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$strings = _ref.strings,
      strings = _ref$strings === void 0 ? {} : _ref$strings,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Translate__["a" /* default */], {
    strings: strings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Normalize__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_components__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),

/***/ "./components/Stack/Stack.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: ", ";\n  grid-auto-columns: 100%;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var gaps = {
  "0": "0",
  "4": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["D" /* spacing4 */],
  "8": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["F" /* spacing8 */],
  "16": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["B" /* spacing16 */],
  "24": "1.5rem",
  "32": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["C" /* spacing32 */],
  "64": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["E" /* spacing64 */],
  "128": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["A" /* spacing128 */],
  default: "0"
};
var Stack = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, function (props) {
  return gaps[props.gapSize] || gaps.default;
});
/* harmony default export */ __webpack_exports__["a"] = (Stack);

/***/ }),

/***/ "./components/Stack/Stackable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var type = {
  light: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  },
  // eslint-disable-line no-use-before-define
  medium: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["w" /* mediumGrey */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  },
  // eslint-disable-line no-use-before-define
  dark: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["f" /* darkGrey */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */]
  },
  // eslint-disable-line no-use-before-define
  transparent: {
    "background-color": "transparent",
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */]
  },
  // eslint-disable-line no-use-before-define
  default: {
    "background-color": __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["H" /* white */],
    color: __WEBPACK_IMPORTED_MODULE_1__constants_styled_constants__["a" /* black */]
  }
};
var Stack = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, function (props) {
  return Object.entries(type[props.type] || type.default).map(function (x) {
    return x.join(":");
  }).join(";");
});
/* harmony default export */ __webpack_exports__["a"] = (Stack);

/***/ }),

/***/ "./components/StickyNav/StickyNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavBar__ = __webpack_require__("./components/NavBar/index.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/StickyNav/StickyNav.js";



var StickyNav = function StickyNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["d" /* NavWrapper */], {
    id: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["a" /* Brand */], {
    brandName: "Travis Waith-Mair",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["c" /* NavSlider */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["b" /* NavItem */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    onClick: function onClick() {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    },
    href: "javascript:void(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["b" /* NavItem */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/#experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Experience")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["b" /* NavItem */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NavBar__["b" /* NavItem */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["a"] = (StickyNav);

/***/ }),

/***/ "./components/TitleBox/TitleBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TitleBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/TitleBox/TitleBox.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  flex: 1 1 400px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-size: 30px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Box = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h2(_templateObject2);
var TitleBox = function TitleBox(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, title), children);
};
/* harmony default export */ __webpack_exports__["a"] = (TitleBox);

/***/ }),

/***/ "./components/Translate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Translate.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Outer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Inner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["H" /* white */], __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["c" /* breakWidthMax */]);
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Outer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, children));
});

/***/ }),

/***/ "./components/constants/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pageMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return portfolio; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colorFacebook */
/* unused harmony export colorInstagram */
/* unused harmony export colorTwitter */
/* unused harmony export colorPinterest */
/* unused harmony export colorYoutube */
/* unused harmony export colorOdnok */
/* unused harmony export colorVk */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return yellow10; });
/* unused harmony export yellow20 */
/* unused harmony export yellow30 */
/* unused harmony export yellow40 */
/* unused harmony export yellow */
/* unused harmony export lightGrey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mediumGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return darkGrey; });
/* unused harmony export grey3 */
/* unused harmony export grey5 */
/* unused harmony export grey10 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return grey15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return grey20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return grey30; });
/* unused harmony export grey40 */
/* unused harmony export grey60 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return text120; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return white; });
/* unused harmony export colorError */
/* unused harmony export colorSuccess */
/* unused harmony export colorWarn */
/* unused harmony export colorLink30 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return colorLinkHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return sans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return serif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return monospace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return fontSizeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fontSize11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fontSize13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fontSize14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fontSize16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fontSize18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return fontSize20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return fontSize28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return fontSize32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return fontSize42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return lineHeightTight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return lineHeight; });
/* unused harmony export capitalize */
/* unused harmony export uppercase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return spacing4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return spacing8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return spacing16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return spacing32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return spacing64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return spacing128; });
/* unused harmony export breakWidth400 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return breakWidth480; });
/* unused harmony export breakWidth600 */
/* unused harmony export breakWidth840 */
/* unused harmony export breakWidth960 */
/* unused harmony export breakWidth1280 */
/* unused harmony export breakWidth1440 */
/* unused harmony export breakWidth1600 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return breakWidthMax; });
/* unused harmony export breakWidthGutterShift */
/* unused harmony export gutter */
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
var white = "#fafafa";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__ = __webpack_require__("./components/AboutSection/AboutSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ExperienceSections_ExperienceSection__ = __webpack_require__("./components/ExperienceSections/ExperienceSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Portfolio_Portfolio__ = __webpack_require__("./components/Portfolio/Portfolio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Contact_Contact__ = __webpack_require__("./components/Contact/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FinalSection_FinalSection__ = __webpack_require__("./components/FinalSection/FinalSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__ = __webpack_require__("./components/constants/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__ = __webpack_require__("./components/Stack/Stackable.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js";











/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ExperienceSections_ExperienceSection__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "dark",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    subtitle: "My Stuff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Portfolio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Portfolio_Portfolio__["a" /* default */], {
    projectGroups: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["f" /* portfolio */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "medium",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "Talk To Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Contact Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Contact_Contact__["a" /* default */], {
    list: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["d" /* list */],
    message: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["b" /* desc */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_FinalSection_FinalSection__["a" /* default */], {
    links: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["c" /* links */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }))));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "string-pixel-width":
/***/ (function(module, exports) {

module.exports = require("string-pixel-width");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map