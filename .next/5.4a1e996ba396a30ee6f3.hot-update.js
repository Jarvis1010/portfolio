webpackHotUpdate(5,{

/***/ "./components/Parallax/Parallax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Parallax/Parallax.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  /* The height needs to be set to a fixed value for the effect to work.\n   * 100vh is the full height of the viewport. */\n  height: 100vh;\n  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */\n  overflow-x: hidden;\n  /* Enable scrolling on the page. */\n  overflow-y: auto;\n  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/\n  perspective: 2px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: dodgerblue;\n  color: white;\n  margin-top: -100px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 //http://placekitten.com/200/300
// .section {
//     /* Needed for children to be absolutely positioned relative to the parent. */
//     position: relative;
//     /* The height of the container. Must be set, but it doesn't really matter what the value is. */
//     height: 100vh;
//     /* For text formatting. */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     text-shadow: 0 0 5px #000;
//   }
//   .parallax::after {
//     /* Display and position the pseudo-element */
//     content: " ";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     /* Move the pseudo-element back away from the camera,
//      * then scale it back up to fill the viewport.
//      * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
//     transform: translateZ(-1px) scale(1.5);
//     /* Force the background image to fill the whole element. */
//     background-size: 100%;
//     /* Keep the image from overlapping sibling elements. */
//     z-index: -1;
//   }
//   /* The styling for the static div. */
//   .static {
//     background: red;
//   }
//   /* Sets the actual background images to adorable kitties. This part is crucial. */
//   .bg1::after {
//     background-image: url('https://placekitten.com/g/900/700');
//   }
//   .bg2::after {
//     background-image: url('https://placekitten.com/g/800/600');
//   }

var ParralaxContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject);
var ParallaxBaseLayer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject2);

var Parallax = function Parallax(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ParralaxContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ParallaxBaseLayer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Parallax);
/* <section class="section parallax bg1">
<h1>Such Adorableness</hi>
</section>
<section class="section static">
<h1>Boring</h1>
</section>
<section class="section parallax bg2">
<h1>SO FWUFFY AWWW</hi>
</section>   */

/***/ })

})
//# sourceMappingURL=5.4a1e996ba396a30ee6f3.hot-update.js.map