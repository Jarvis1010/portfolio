webpackHotUpdate(5,{

/***/ "./components/AboutSection/AboutSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid__ = __webpack_require__("./components/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__ = __webpack_require__("./components/PadBox/PadBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__("./components/constants/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__ = __webpack_require__("./components/constants/styled-constants.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  scroll-snap-align: start;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: ", ";\n  justify-content: space-around;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  justify-self: center;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  line-height: 2rem;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: ", ";\n  justify-items: center;\n  margin: 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  list-style: none;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n  & > li:not(:last-child):after {\n    content: \"\";\n    display: block;\n    padding: ", ";\n    border-bottom: 1px solid ", ";\n    top: 0;\n    position: absolute;\n    width: 100%;\n  }\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral([""]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin: auto;\n  max-width: 280px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var AboutWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */])(_templateObject);
var SplitGrid = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["B" /* spacing16 */]);
var Profile = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].section(_templateObject3);
var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].p(_templateObject4, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var Details = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Grid__["a" /* default */])(_templateObject5, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["b" /* breakWidth480 */]);
var ContactList = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Stack_Stack__["a" /* default */])(_templateObject6, __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["B" /* spacing16 */], __WEBPACK_IMPORTED_MODULE_7__constants_styled_constants__["q" /* grey */]);
var ContactListItem = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */])(_templateObject7);
var Email = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a.attrs({
  href: function href(props) {
    return "mailto:".concat(props.children);
  }
})(_templateObject8);
var Telephone = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].a.attrs({
  href: function href(props) {
    return "tel:".concat(props.children);
  }
})(_templateObject8);
var Image = __WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */].img(_templateObject9);

var AboutSection = function AboutSection() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AboutWrapper, {
    size: "8",
    top: "64",
    bottom: "32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "All about me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Personal Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PadBox_PadBox__["a" /* default */], {
    size: "0",
    top: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SplitGrid, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Professional Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* about */].description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Details, {
    minWidth: "280px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactList, {
    size: "8",
    as: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "Name:"), " Travis Waith-Mair"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, "Email:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Email, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, " travis.mair@gmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "Telephone:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Telephone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, " (801) 200-7597")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactListItem, {
    size: "8",
    as: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Location:"), " Salt Lake City, Utah")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
    src: "static/images/profile.png",
    alt: "Profile Photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (AboutSection);

/***/ }),

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__ = __webpack_require__("./components/AboutSection/AboutSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ExperienceSections_ExperienceSection__ = __webpack_require__("./components/ExperienceSections/ExperienceSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Portfolio_Portfolio__ = __webpack_require__("./components/Portfolio/Portfolio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Contact_Contact__ = __webpack_require__("./components/Contact/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FinalSection_FinalSection__ = __webpack_require__("./components/FinalSection/FinalSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__ = __webpack_require__("./components/constants/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__ = __webpack_require__("./components/Stack/Stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__ = __webpack_require__("./components/BoxTitles/BoxTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__ = __webpack_require__("./components/Stack/Stackable.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js";











/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AboutSection_AboutSection__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ExperienceSections_ExperienceSection__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "dark",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    subtitle: "My Stuff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Portfolio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Portfolio_Portfolio__["a" /* default */], {
    projectGroups: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["f" /* portfolio */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    type: "medium",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Stack_Stack__["a" /* default */], {
    style: {
      paddingTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BoxTitles_BoxTitle__["b" /* SectionBoxTitle */], {
    inverse: true,
    subtitle: "Talk To Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Contact Information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Contact_Contact__["a" /* default */], {
    list: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["d" /* list */],
    message: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["b" /* desc */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Stack_Stackable__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_FinalSection_FinalSection__["a" /* default */], {
    links: __WEBPACK_IMPORTED_MODULE_7__components_constants_constants__["c" /* links */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
//# sourceMappingURL=5.60329e037b962106e9a5.hot-update.js.map