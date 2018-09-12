webpackHotUpdate(5,{

/***/ "./components/NavBar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavSlider; });
/* unused harmony export NavCollapse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/NavBar/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: ", ";\n  opacity: 0.7;\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  z-index: 6;\n  top: 0;\n"]),
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





var NavWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].nav(_templateObject, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["s" /* grey20 */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
});
var NavItem = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].span(_templateObject2, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);
var BrandName = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].h2(_templateObject3, function (props) {
  return props.theme.fontFamily ? props.theme.fontFamily : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["y" /* sans */];
}, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["F" /* spacing8 */]);
var BrandLink = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a(_templateObject4, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
}, function (props) {
  return props.theme.white ? props.theme.white : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["H" /* white */];
});
var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].img(_templateObject5, function (props) {
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
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BrandLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, src && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    src: src,
    alt: "".concat(brandName ? brandName + " " : "", "logo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }), brandName && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BrandName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, brandName)));
};

var NavSlider = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].div(_templateObject6, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["b" /* breakWidth480 */], function (props) {
  return props.hidden ? "none" : "flex";
}, function (props) {
  return props.theme.secondaryColor ? props.theme.secondaryColor : __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["t" /* grey30 */];
});
var Hamburger = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].button(_templateObject7, __WEBPACK_IMPORTED_MODULE_3__constants_styled_constants__["k" /* fontSize18 */], function (props) {
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
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hamburger, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "\u2630"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavSlider, _extends({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), children));
    }
  }]);

  return NavCollapse;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.b38c950388a9c785edcc.hot-update.js.map