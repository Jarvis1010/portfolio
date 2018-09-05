webpackHotUpdate(5,{

/***/ "./components/BoxTitles/BoxTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionBoxTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/BoxTitles/BoxTitle.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  align-self: center;\n  text-align: center;\n  text-transform: uppercase;\n  border: 1px solid ", ";\n  color: ", ";\n  padding: ", ";\n  position: relative;\n  font-size: ", ";\n  font-weight: bold;\n  line-height: ", ";\n  letter-spacing: -0.03125rem;\n  ", ";\n\n  &::after {\n    content: ", ";\n    font-size: ", ";\n    font-weight: normal;\n    position: absolute;\n    text-transform: uppercase;\n    width: fit-content;\n    ", ": 0;\n    left: 0;\n    right: 0;\n    display: block;\n    text-align: center;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    ", ": ", ";\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  &::before,\n  &::after {\n    content: \"\";\n    position: absolute;\n    ", ": 0;\n    ", ": 1px solid\n      ", ";\n    width: ", ";\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"]),
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
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["n" /* fontSize42 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["l" /* fontSize28 */],
    margin: "-0.9rem"
  },
  h2: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["m" /* fontSize32 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["k" /* fontSize20 */],
    margin: "-0.7rem"
  },
  h3: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["l" /* fontSize28 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["j" /* fontSize18 */],
    margin: "-0.6rem"
  },
  h4: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["k" /* fontSize20 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["i" /* fontSize16 */],
    margin: "-0.6rem"
  },
  h5: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["j" /* fontSize18 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["h" /* fontSize14 */],
    margin: "-0.5rem"
  },
  h6: {
    main: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["h" /* fontSize14 */],
    subtitle: __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["g" /* fontSize13 */],
    margin: "-0.4rem"
  }
};
var baseCss = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* css */])(_templateObject, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["F" /* white */];
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["F" /* white */];
}, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["z" /* spacing16 */], function (_ref) {
  var element = _ref.element;
  return element in elements ? elements[element].main : elements.h2.main;
}, __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["u" /* lineHeightTight */], function (props) {
  return props.top ? "border-top: none" : "border-bottom: none";
}, function (props) {
  return props.subtitle ? "\"".concat(props.subtitle, "\"") : " ";
}, function (_ref2) {
  var element = _ref2.element;
  return element in elements ? elements[element].subtitle : elements.h2.subtitle;
}, function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "margin-top" : "margin-bottom";
}, function (_ref3) {
  var element = _ref3.element;
  return element in elements ? elements[element].margin : elements.h2.margin;
});
var BottomBorder = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].div(_templateObject2, function (props) {
  return props.top ? "top" : "bottom";
}, function (props) {
  return props.top ? "border-top" : "border-bottom";
}, function (props) {
  return props.inverse ? __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["a" /* black */] : __WEBPACK_IMPORTED_MODULE_2__constants_styled_constants__["F" /* white */];
}, function (props) {
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
          inverse = _props.inverse,
          top = _props.top,
          props = _objectWithoutProperties(_props, ["children", "element", "inverse", "top"]);

      var StyledElement = element in elements ? __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */][element](_templateObject3, baseCss) : __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].h2(_templateObject3, baseCss);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledElement, _extends({}, props, {
        inverse: inverse,
        top: top,
        innerRef: this.handleRef,
        element: element,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BottomBorder, {
        inverse: inverse,
        top: top,
        width: this.state.bottomBorderlength,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
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
      lineNumber: 141
    }
  }), children);
};
var SectionBoxTitle = function SectionBoxTitle(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BoxTitle, _extends({}, props, {
    element: "h2",
    top: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }), children);
};
/* unused harmony default export */ var _unused_webpack_default_export = (BoxTitle);

/***/ }),

/***/ "./components/Landing/Landing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MatchMedia_MatchMedia__ = __webpack_require__("./components/MatchMedia/MatchMedia.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Parallax_Parallax__ = __webpack_require__("./components/Parallax/Parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Landing/Landing.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  height: 100vh;\n  justify-items: center;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  border: 2px solid ", ";\n  padding: 2rem;\n  margin-bottom: 200px;\n  align-self: end;\n  text-align: center;\n  position: relative;\n  background: rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  &::after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    left: 33%;\n    top: 33%;\n    position: absolute;\n    border-left: 0.75rem solid transparent;\n    border-right: 0.75rem solid transparent;\n    border-top: 1.5rem solid white;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Landing = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Stack_Stack__["a" /* default */])(_templateObject, __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["F" /* white */]);
var backgroundImage = "https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=2519&q=80";
var ScrollLink = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a(_templateObject2, __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["F" /* white */], __WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["F" /* white */]);

var LandingComponent = function LandingComponent(_ref) {
  var matches = _ref.matches;
  return matches ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Parallax_Parallax__["a" /* default */], {
    backgroundUrl: backgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Landing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__BoxTitles_BoxTitle__["a" /* BoxH1 */], {
    subtitle: "Web Developer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Travis Waith-Mair"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ScrollLink, {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))) : null;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__MatchMedia_MatchMedia__["a" /* withMatchMedia */])("(min-width:".concat(__WEBPACK_IMPORTED_MODULE_6__constants_styled_constants__["b" /* breakWidth480 */], ")"))(LandingComponent));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__ = __webpack_require__("./components/AboutSection/AboutSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Portfolio_Portfolio__ = __webpack_require__("./components/Portfolio/Portfolio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Contact_Contact__ = __webpack_require__("./components/Contact/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FinalSection_FinalSection__ = __webpack_require__("./components/FinalSection/FinalSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Stack_Stackable__ = __webpack_require__("./components/Stack/Stackable.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Stack_Stack__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Stack_Stackable__["a" /* default */], {
    type: "light",
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Personal Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__["a" /* default */], _extends({}, __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* about */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Stack_Stackable__["a" /* default */], {
    type: "medium",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Portfolio_Portfolio__["a" /* default */], {
    projectGroups: __WEBPACK_IMPORTED_MODULE_6__constants__["e" /* portfolio */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Stack_Stackable__["a" /* default */], {
    type: "dark",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Contact_Contact__["a" /* default */], {
    list: __WEBPACK_IMPORTED_MODULE_6__constants__["d" /* list */],
    message: __WEBPACK_IMPORTED_MODULE_6__constants__["b" /* desc */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Stack_Stackable__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_FinalSection_FinalSection__["a" /* default */], {
    links: __WEBPACK_IMPORTED_MODULE_6__constants__["c" /* links */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b934fd85b3feda5f7433.hot-update.js.map