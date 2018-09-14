webpackHotUpdate(5,{

/***/ "./components/ProjectList/ProjectList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProjectList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectItem_ProjectItem__ = __webpack_require__("./components/ProjectItem/ProjectItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/ProjectList/ProjectList.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n  text-align: center;\n  justify-content: space-around;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  min-width: 100%;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.1;\n"]);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ListWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].div(_templateObject);
var ListHeader = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].h2(_templateObject2);
var ProjectList = function ProjectList(_ref) {
  var _ref$projects = _ref.projects,
      projects = _ref$projects === void 0 ? [] : _ref$projects,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, title), projects.map(function (project) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ProjectItem_ProjectItem__["a" /* default */], _extends({
      key: project.desc
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }));
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectList);

/***/ })

})
//# sourceMappingURL=5.8e99a3ee8f38d5969311.hot-update.js.map