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

/***/ })

})
//# sourceMappingURL=5.a30e61c23b86e9f8e05c.hot-update.js.map