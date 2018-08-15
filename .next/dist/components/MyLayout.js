"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _StickyNav = require("./StickyNav/StickyNav");

var _StickyNav2 = _interopRequireDefault(_StickyNav);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Root = require("./Root");

var _Root2 = _interopRequireDefault(_Root);

var _PageWrapper = require("./PageWrapper");

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/MyLayout.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: #222;\n"], ["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: #222;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);

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
      lineNumber: 20
    }
  }, _react2.default.createElement(_PageWrapper2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_StickyNav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(MainWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, children), _react2.default.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "JTWM \xA9 2018. All Rights Reserved")));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiU3RpY2t5TmF2Iiwic3R5bGVkIiwiUm9vdCIsIlBhZ2VXcmFwcGVyIiwiRm9vdGVyIiwiZm9vdGVyIiwiTWFpbldyYXBwZXIiLCJtYWluIiwiTGF5b3V0Iiwic3RyaW5ncyIsInRoZW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxTQUFTLDJCQUFULEFBQWdCLE9BQXRCOztBQU9BLElBQU0sY0FBYywyQkFBZCxBQUFxQixLQUEzQjs7QUFNQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7MEJBQUEsQUFBRztNQUFILEFBQUcsdUNBQUgsQUFBYSxLQUFiO3dCQUFBLEFBQWlCO01BQWpCLEFBQWlCLG1DQUFqQixBQUF5QixLQUF6QjtNQUFBLEFBQTZCLGdCQUE3QixBQUE2Qjt5QkFDMUMsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQWM7QUFBZDtBQUFBLEtBRkYsQUFFRSxBQUNBLDJCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUxTLEFBQ2IsQUFDRSxBQUdFO0FBTE4sQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzLW1haXIvcG9ydGZvbGlvL3BvcnRmb2xpbyJ9