webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LinkList/LinkList.js":
/*!*****************************************!*\
  !*** ./components/LinkList/LinkList.js ***!
  \*****************************************/
/*! exports provided: LinkList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkList", function() { return LinkList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _LinkListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkListStyles */ "./components/LinkList/LinkListStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/LinkList/LinkList.js";




function iconPicker(content) {
  switch (content) {
    case "github":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        });
      }

    case "twitter":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      }

    case "linkedin":
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      }

    default:
      {
        return "";
      }
  }
}

var LinkList = function LinkList(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_2__["ListOfLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_2__["IconLink"], {
      key: link.href,
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, iconPicker(link.content));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (LinkList);

/***/ })

})
//# sourceMappingURL=index.js.2db79584a6829b26ba8b.hot-update.js.map