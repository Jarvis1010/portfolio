webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Landing/Landing.js":
/*!***************************************!*\
  !*** ./components/Landing/Landing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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








var Landing = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Stack_Stack__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject(), function (props) {
  return props.theme.white || "white";
});
var backgroundImage = "/static/images/background.jpeg";
var ScrollLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject2(), function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.white || "white";
});

var Scroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scroller, _React$Component);

  function Scroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Scroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Scroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scroll", function () {
      document.querySelector("#inner").scrollTop = window.innerHeight;
    });

    return _this;
  }

  _createClass(Scroller, [{
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
      return this.props.children;
    }
  }]);

  return Scroller;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var LandingComponent = function LandingComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Scroller, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "header",
    backgroundUrl: backgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Landing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxTitles_BoxTitle__WEBPACK_IMPORTED_MODULE_5__["BoxH1"], {
    subtitle: "Web Developer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Travis Waith-Mair"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollLink, {
    "aria-label": "scoll navbar to top",
    href: "#top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_MatchMedia_MatchMedia__WEBPACK_IMPORTED_MODULE_2__["withMatchMedia"])("(max-width:".concat(_constants_styled_constants__WEBPACK_IMPORTED_MODULE_6__["breakWidth480"], ")"))(LandingComponent));

/***/ })

})
//# sourceMappingURL=_app.js.11d3c2826c59fb9b998e.hot-update.js.map