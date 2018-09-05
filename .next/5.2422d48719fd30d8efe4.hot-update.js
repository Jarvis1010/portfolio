webpackHotUpdate(5,{

/***/ "./components/MatchMedia/MatchMedia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withMatchMedia; });
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
        _this.setState(e);
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
      return this.children();
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
    children: function children() {
      return null;
    },
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
              matches: true
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
            var matches = this.state.matches;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MatchMedia, {
              query: query,
              onChange: this.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
              matches: matches
            }, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
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

/***/ })

})
//# sourceMappingURL=5.2422d48719fd30d8efe4.hot-update.js.map