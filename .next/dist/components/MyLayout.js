"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SiteHeader = require("./SiteHeader/SiteHeader");

var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Root = require("./Root");

var _Root2 = _interopRequireDefault(_Root);

var _PageWrapper = require("./PageWrapper");

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: #222;\n"], ["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: #222;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n"], ["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n"]);

var Footer = _styledComponents2.default.footer(_templateObject);

var MainWrapper = _styledComponents2.default.main(_templateObject2);

var Layout = function Layout(_ref) {
  var _ref$strings = _ref.strings,
      strings = _ref$strings === undefined ? {} : _ref$strings,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme,
      children = _ref.children;
  return _react2.default.createElement(_Root2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_PageWrapper2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_SiteHeader2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(MainWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, children), _react2.default.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiU2l0ZUhlYWRlciIsInN0eWxlZCIsIlJvb3QiLCJQYWdlV3JhcHBlciIsIkZvb3RlciIsImZvb3RlciIsIk1haW5XcmFwcGVyIiwibWFpbiIsIkxheW91dCIsInN0cmluZ3MiLCJ0aGVtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWlCOzs7Ozs7Ozs7OztBQUV4QixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsT0FBdEI7O0FBT0EsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLEtBQTNCOztBQVFBLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTswQkFBQSxBQUFHO01BQUgsQUFBRyx1Q0FBSCxBQUFhLEtBQWI7d0JBQUEsQUFBaUI7TUFBakIsQUFBaUIsbUNBQWpCLEFBQXlCLEtBQXpCO01BQUEsQUFBNkIsZ0JBQTdCLEFBQTZCO3lCQUMxQyxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0MsY0FBRDs7Z0JBQUE7a0JBQUEsQUFBYztBQUFkO0FBQUEsS0FGRixBQUVFLEFBQ0EsMkJBQUMsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBTFMsQUFDYixBQUNFLEFBR0U7QUFMTixBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik15TGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXMtbWFpci9wb3J0Zm9saW8vcG9ydGZvbGlvIn0=