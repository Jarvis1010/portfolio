webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var string_pixel_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! string-pixel-width */ "./node_modules/string-pixel-width/lib/index.js");
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
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  &::before,\n  &::after {\n    content: \"\";\n    position: absolute;\n    ", ": 0;\n    ", ": 1px solid\n      ", ";\n\n    width: calc(51% - ", ");\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"]);

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

var getMargin = function getMargin(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? "h2" : _ref$as;
  return elements[as].margin;
};

var getMainSize = function getMainSize(_ref2) {
  var _ref2$as = _ref2.as,
      as = _ref2$as === void 0 ? "h2" : _ref2$as;
  return elements[as].margin;
};

var topOrBottom = function topOrBottom(props) {
  return props.top ? "margin-top" : "margin-bottom";
};

var BoxHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject(), function (_ref3) {
  var _ref3$minWidth = _ref3.minWidth,
      minWidth = _ref3$minWidth === void 0 ? 1 : _ref3$minWidth;
  return minWidth;
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
}, function (props) {
  return props.theme.spacing16 || "1rem";
}, getMainSize, function (props) {
  return props.theme.serif || "serif";
}, function (props) {
  return props.theme.lineHeightTight || "1rem";
}, function (props) {
  return props.top ? "border-top: none" : "border-bottom: none";
}, function (props) {
  return props.subtitle ? "\"".concat(props.subtitle, "\"") : " ";
}, function (_ref4) {
  var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "h2" : _ref4$as;
  return elements[as].subtitle;
}, function (props) {
  return props.top ? "top" : "bottom";
}, topOrBottom, getMargin);
var BottomBorder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "border-top" : "border-bottom";
}, function (props) {
  return props.inverse ? _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["black"] : _constants_styled_constants__WEBPACK_IMPORTED_MODULE_3__["white"];
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
          lineNumber: 111
        },
        __self: this
      }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBorder, {
        inverse: inverse,
        top: top,
        width: subTitleWidth / 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
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
      lineNumber: 126
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
      lineNumber: 132
    },
    __self: this
  }), children);
};
/* harmony default export */ __webpack_exports__["default"] = (BoxTitle);

/***/ })

})
//# sourceMappingURL=index.js.a4991b9b244cd3969802.hot-update.js.map