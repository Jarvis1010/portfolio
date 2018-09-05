webpackHotUpdate(5,{

/***/ "./components/BoxTitles/BoxTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxH1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/BoxTitles/BoxTitle.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-self: center;\n  border: 1px solid ", ";\n  color: ", ";\n  padding: 1em;\n  position: relative;\n  font-size: ", ";\n  font-weight: bold;\n  line-height: ", ";\n  letter-spacing: -0.03125rem;\n  border-bottom: none;\n\n  &::after {\n    content: ", ";\n    font-size: ", ";\n    font-weight: normal;\n    position: absolute;\n    width: fit-content;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: block;\n    text-align: center;\n    margin: 0 auto\n      ", "\n      auto;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n\n  &::before,\n  &::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    border-bottom: 1px solid white;\n    width: ", ";\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n            ", ";\n          "]);

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
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["m" /* fontSize42 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["l" /* fontSize32 */],
    margin: "-1rem"
  },
  h2: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["l" /* fontSize32 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["k" /* fontSize28 */],
    margin: "-0.9rem"
  },
  h3: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["k" /* fontSize28 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["j" /* fontSize20 */],
    margin: "-0.7rem"
  },
  h4: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["j" /* fontSize20 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["i" /* fontSize18 */],
    margin: "-0.6rem"
  },
  h5: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["i" /* fontSize18 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["h" /* fontSize14 */],
    margin: "-0.5rem"
  },
  h6: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["h" /* fontSize14 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["g" /* fontSize13 */],
    margin: "-0.4rem"
  }
};
var baseCss = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* css */])(_templateObject, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["E" /* white */], __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["E" /* white */], function (_ref) {
  var element = _ref.element;
  return element in elements ? elements[element].main : elements.h2.main;
}, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["t" /* lineHeightTight */], function (props) {
  return props.subtitle ? "\"".concat(props.subtitle, "\"") : " ";
}, function (_ref2) {
  var element = _ref2.element;
  return element in elements ? elements[element].subtitle : elements.h2.subtitle;
}, function (_ref3) {
  var element = _ref3.element;
  return element in elements ? elements[element].margin : elements.h2.margin;
});
var BottomBorder = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].div(_templateObject2, function (props) {
  return props.width ? "".concat(props.width, "px") : "1rem";
});

var BoxTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(BoxTitle, _Component);

  function BoxTitle() {
    var _ref4;

    var _temp, _this;

    _classCallCheck(this, BoxTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref4 = BoxTitle.__proto__ || Object.getPrototypeOf(BoxTitle)).call.apply(_ref4, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        bottomBorderlength: undefined
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "node", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "handleRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(node) {
        if (node && !_this.node) {
          _this.node = node;

          var _node$getBoundingClie = node.getBoundingClientRect(),
              parentWidth = _node$getBoundingClie.width;

          var _window$getComputedSt = window.getComputedStyle(node, "::after"),
              fontSize = _window$getComputedSt.fontSize,
              calculatedWidth = _window$getComputedSt.width;

          var afterWidth = calculatedWidth === "fit-content" ? 0 : calculatedWidth.slice(0, calculatedWidth.length - 2);
          var buffer = afterWidth === 0 ? 0 : parseFloat(fontSize);
          var bottomBorderlength = (parentWidth - afterWidth) / 2 - buffer;

          _this.setState({
            bottomBorderlength: bottomBorderlength
          });
        }
      }
    }), _temp));
  }

  _createClass(BoxTitle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          element = _props.element,
          props = _objectWithoutProperties(_props, ["children", "element"]);

      var StyledElement = element in elements ? __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */][element](_templateObject3, baseCss) : __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].h2(_templateObject3, baseCss);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledElement, _extends({}, props, {
        innerRef: this.handleRef,
        element: element,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BottomBorder, {
        width: this.state.bottomBorderlength,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }));
    }
  }]);

  return BoxTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var BoxH1 = function BoxH1(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BoxTitle, _extends({}, props, {
    element: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }), children);
};
/* unused harmony default export */ var _unused_webpack_default_export = (BoxTitle);

/***/ })

})
//# sourceMappingURL=5.d99436d7d9b679b82326.hot-update.js.map