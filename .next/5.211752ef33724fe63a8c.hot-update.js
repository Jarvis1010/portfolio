webpackHotUpdate(5,{

/***/ "./components/MatchMedia/MatchMedia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withMatchMedia */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MatchMedia.__proto__ || Object.getPrototypeOf(MatchMedia)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "mql", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.props.onChange(e);
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
        this.mql = window.matchMedia(this.props.query);
        this.mql.addListener(this.handleChange);
        this.handleChange(this.mql);
      } else {
        var matches = this.props.defaultMatches;
        this.handleChange({
          matches: matches
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MatchMedia;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(MatchMedia, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    query: "(min-width: 0px)",
    defaultMatches: true,
    onChange: function onChange() {
      return null;
    }
  }
});
var withMatchMedia = function withMatchMedia(query) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2() {
          var _ref2;

          var _temp2, _this2;

          _classCallCheck(this, _class2);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_ref2 = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this2), "state", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: {
              matches: false
            }
          }), Object.defineProperty(_assertThisInitialized(_this2), "handleChange", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function value(_ref3) {
              var matches = _ref3.matches;

              _this2.setState({
                matches: matches
              });
            }
          }), _temp2));
        }

        _createClass(_class2, [{
          key: "render",
          value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MatchMedia, {
              query: query,
              onChange: this.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
              matches: this.state.matches
            }, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            })));
          }
        }]);

        return _class2;
      }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)
    );
  };
};
/* unused harmony default export */ var _unused_webpack_default_export = (MatchMedia);

/***/ }),

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
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  border: 1px solid ", ";\n  padding: 1em;\n  margin-bottom: 100px;\n  align-self: end;\n  text-align: center;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Footer = __WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */].footer(_templateObject, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["f" /* darkGrey */]);
var Landing = Object(__WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_4__components_Stack_Stack__["a" /* default */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */]);
var ScrollLink = __WEBPACK_IMPORTED_MODULE_5_styled_components__["c" /* default */].a(_templateObject3, __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */], __WEBPACK_IMPORTED_MODULE_8__components_constants_styled_constants__["A" /* white */]);
var backgroundImage = "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Root__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__PageWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Parallax_Parallax__["a" /* default */], {
    backgroundUrl: backgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Landing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    style: {
      alignSelf: "center",
      border: "1px solid white",
      padding: "1em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Travis Waith-Mair (Site in Progress)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScrollLink, {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "V"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StickyNav_StickyNav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ })

})
//# sourceMappingURL=5.211752ef33724fe63a8c.hot-update.js.map