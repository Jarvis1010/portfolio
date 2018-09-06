webpackHotUpdate(5,{

/***/ "./components/BoxTitles/BoxTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionBoxTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_pixel_width__ = __webpack_require__("./node_modules/string-pixel-width/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_string_pixel_width___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_string_pixel_width__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/BoxTitles/BoxTitle.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-self: center;\n  margin: auto;\n  text-align: center;\n  min-width: ", ";\n  max-width: fit-content;\n  border: 1px solid ", ";\n  color: ", ";\n  padding: ", ";\n  position: relative;\n  font-size: ", ";\n  font-weight: bold;\n  line-height: ", ";\n  letter-spacing: -0.03125rem;\n  ", ";\n\n  &::after {\n    content: ", ";\n    font-size: ", ";\n    font-weight: normal;\n    position: absolute;\n    width: fit-content;\n    ", ": 0;\n    left: 0;\n    right: 0;\n    display: block;\n    text-align: center;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    ", ": ", ";\n  }\n"]),
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
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["n" /* fontSize42 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["l" /* fontSize28 */],
    margin: "-0.9rem"
  },
  h2: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["m" /* fontSize32 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize20 */],
    margin: "-0.7rem"
  },
  h3: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["l" /* fontSize28 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["j" /* fontSize18 */],
    margin: "-0.6rem"
  },
  h4: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize20 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["i" /* fontSize16 */],
    margin: "-0.6rem"
  },
  h5: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["j" /* fontSize18 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["h" /* fontSize14 */],
    margin: "-0.5rem"
  },
  h6: {
    main: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["h" /* fontSize14 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["g" /* fontSize13 */],
    margin: "-0.4rem"
  }
};
var BoxHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].h2(_templateObject, function (_ref) {
  var _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 1 : _ref$minWidth;
  return minWidth;
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* white */];
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* white */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["z" /* spacing16 */], function (_ref2) {
  var _ref2$as = _ref2.as,
      as = _ref2$as === void 0 ? "h2" : _ref2$as;
  return elements[as].main;
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["u" /* lineHeightTight */], function (props) {
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
var BottomBorder = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].div(_templateObject2, function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "border-top" : "border-bottom";
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* white */];
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
        return txt.length > 0 ? __WEBPACK_IMPORTED_MODULE_2_string_pixel_width___default()(txt, {
          font: "Arial",
          size: fontSizeInPixels
        }) + fontSizeInPixels : 0;
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
          lineNumber: 106
        }
      }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BottomBorder, {
        inverse: inverse,
        top: top,
        width: subTitleWidth / 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
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
      lineNumber: 121
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
      lineNumber: 127
    }
  }), children);
};
/* unused harmony default export */ var _unused_webpack_default_export = (BoxTitle);

/***/ })

})
//# sourceMappingURL=5.c1d1f2d2a4253d81366e.hot-update.js.map