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
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/visually-hidden */ "./node_modules/@reach/visually-hidden/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _LinkListStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkListStyles */ "./components/LinkList/LinkListStyles.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/LinkList/LinkList.js";



 // function iconPicker(content) {
//   switch (content) {
//     case "github": {
//       return <FaGithub />;
//     }
//     case "twitter": {
//       return <FaTwitter />;
//     }
//     case "linkedin": {
//       return <FaLinkedin />;
//     }
//     default: {
//       return "";
//     }
//   }
// }

var iconPicker = {
  github: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }),
  twitter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }),
  linkedin: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })
};
var LinkList = function LinkList(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_3__["ListOfLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkListStyles__WEBPACK_IMPORTED_MODULE_3__["IconLink"], {
      key: link.href,
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, link.content), iconPicker[link.content]);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (LinkList);

/***/ })

})
//# sourceMappingURL=index.js.8b2b911ef421850432f9.hot-update.js.map