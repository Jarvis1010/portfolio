webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/*! exports provided: NavWrapper, NavItem, NavSlider, NavCollapse, Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavWrapper", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSlider", function() { return NavSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapse", function() { return NavCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/NavBar/index.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  text-align: center;\n  text-decoration: none;\n  font-size: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  background: ", ";\n\n  @media screen and (max-width: ", ") {\n    display: inline;\n    margin: auto ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 50px;\n  display: flex;\n  flex-flow: row wrap;\n\n  @media (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n    order: 50;\n    background: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  height: auto;\n  margin: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  border: 0;\n  color: ", ";\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  flex-grow: 10;\n  margin-right: auto;\n\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  min-width: auto;\n  margin-left: ", ";\n  white-space: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  & a {\n    text-decoration: none;\n    color: ", ";\n  }\n  align-self: center;\n  margin: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  z-index: 6;\n  top: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject(), function (props) {
  return props.theme.primaryColor || "grey";
}, function (props) {
  return props.theme.white || "white";
});
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2(), function (props) {
  return props.theme.fontSize18 || "18px";
}, function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.spacing8 || "1rem";
});
var BrandName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3(), function (props) {
  return props.theme.fontFamily || "sans";
}, function (props) {
  return props.theme.fontSize18 || "18px";
}, function (props) {
  return props.theme.spacing8 || "1rem";
});
var BrandLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject4(), function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.white || "white";
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject5(), function (props) {
  return props.size || "30px";
}, function (props) {
  return props.theme.spacing8 || "1rem";
});

var Brand = function Brand(_ref) {
  var brandName = _ref.brandName,
      src = _ref.src,
      href = _ref.href;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrandLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, src && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: src,
    alt: "".concat(brandName ? brandName + " " : "", "logo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), brandName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrandName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, brandName)));
};

var NavSlider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6(), function (props) {
  return props.theme.breakWidth480 || "480px";
}, function (props) {
  return props.hidden ? "none" : "flex";
}, function (props) {
  return props.theme.secondaryColor || "grey";
});
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject7(), function (props) {
  return props.theme.fontSize18 || "18px";
}, function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.white || "white";
}, function (props) {
  return props.theme.primaryColor || "inherit";
}, function (props) {
  return props.theme.breakWidth480 || "480px";
}, function (props) {
  return props.theme.spacing8 || "1rem";
});

var Toggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hidden: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateState", function (val) {
      return _this.setState({
        hidden: val
      });
    });

    return _this;
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      return this.props.children([this.state.hidden, this.updateState]);
    }
  }]);

  return Toggle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var NavCollapse = function NavCollapse(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toggle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        hidden = _ref4[0],
        updateHidden = _ref4[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hamburger, {
      onClick: function onClick() {
        return updateHidden(!hidden);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSlider, {
      hidden: hidden,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, children));
  });
};



/***/ })

})
//# sourceMappingURL=_app.js.389e7fba73a93b8614e1.hot-update.js.map