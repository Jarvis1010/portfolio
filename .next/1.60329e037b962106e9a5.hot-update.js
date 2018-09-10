webpackHotUpdate(1,{

/***/ "./components/constants/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pageMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return portfolio; });
var about = {
  description: "My name is Travis Waith-Mair and I am a I'm an excited and ambitious Web Developer, currently working just outside of Salt Lake City, UT. Outside of my day job, I building and maintaining open source projects, freelance work, and hand out my kids at home.  I love Javascript and especially React.js.  Outside of web development, I love all things nerdy.  I often can be found debating Star Wars, super heroes, and most anything else nerdy.   I have learned to speak Thai, and some Spanish and Esperanto.  I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and driven to learn and understand new technologies, implement fundamental design principles, and write reliable, well-tested, reusable code.",
  languages: ["HTML", "CSS", "JavaScript", "ES6", "React.js", "Bootstrap", "MongoDB", "Angular.js", "Express", "Node"]
};
var list = ["J. Travis Waith-Mair", "travis.mair@gmail.com", "(801) 200 - 7597", "Salt Lake City, Utah"];
var desc = "If you want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, random questions about the universe and the meaning of life... just feel free to drop me a line anytime.";
var pageMeta = {
  title: "Travis Waith-Mair's Personal website",
  tags: [{
    name: "description",
    content: "Portfolio"
  }, {
    property: "og:type",
    content: "article"
  }]
};
var links = [{
  href: "https://github.com/Jarvis1010",
  content: "github"
}, {
  href: "https://twitter.com/want2code",
  content: "twitter"
}, {
  href: "https://www.linkedin.com/in/travis-mair/",
  content: "linkedin"
}];
var portfolio = {
  "Open Source Projects": [{
    href: "https://www.npmjs.com/package/react-copy-code",
    src: "static/images/copycode.png",
    alt: "Screenshot of react-copy-code",
    desc: "react-copy-code"
  }, {
    href: "https://www.npmjs.com/package/react-clean-form",
    src: "static/images/inator.png",
    alt: "Screenshot of react-clean-form",
    desc: "react-clean-form"
  }, {
    href: "https://play.google.com/store/apps/details?id=com.sanktajlibroj",
    src: "static/images/mormono.png",
    alt: "Screenshot of Esperanto Book of Mormon",
    desc: "React Native App of Scriptures in Esperanto"
  }]
};

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_constants_constants__ = __webpack_require__("./components/constants/constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/_document.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var sheet = new __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ServerStyleSheet */]();
      var main = sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }));
      var styleTags = sheet.getStyleElement();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_3__components_constants_constants__["e" /* pageMeta */].title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), styleTags), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "root",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, main), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.60329e037b962106e9a5.hot-update.js.map