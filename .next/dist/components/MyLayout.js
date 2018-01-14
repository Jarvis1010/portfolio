'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SiteHeader = require('./SiteHeader/SiteHeader');

var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/MyLayout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n   margin-top: 30px;\n   padding: 1em 0;\n   background-color: #808080;\n'], ['\n   margin-top: 30px;\n   padding: 1em 0;\n   background-color: #808080;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n   margin-top: 0;\n    text-align: center;\n    color: white;\n    background-color: #222;\n'], ['\n   margin-top: 0;\n    text-align: center;\n    color: white;\n    background-color: #222;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n'], ['\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n']);

var AppWrapper = _styledComponents2.default.div(_templateObject);

var Footer = _styledComponents2.default.footer(_templateObject2);

var MainWrapper = _styledComponents2.default.main(_templateObject3);

var Layout = function Layout(_ref) {
  var children = _ref.children,
      url = _ref.url;
  return _react2.default.createElement(AppWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_SiteHeader2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(MainWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, children), _react2.default.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'JTM \xA9 2016. All Rights Reserved'));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiU2l0ZUhlYWRlciIsInN0eWxlZCIsIkFwcFdyYXBwZXIiLCJkaXYiLCJGb290ZXIiLCJmb290ZXIiLCJNYWluV3JhcHBlciIsIm1haW4iLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87Ozs7Ozs7Ozs7OztBQUVQLElBQU0sYUFBYSwyQkFBYixBQUFvQixJQUExQjs7QUFNQSxJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsT0FBdEI7O0FBT0EsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLEtBQTNCOztBQU1BLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsV0FBYixBQUFhO3lCQUN6QixjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0MsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FGRixBQUVFLEFBR0EsMkJBQUMsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBTlcsQUFDYixBQUtFO0FBTkosQUFVQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFydmlzMTAwMC9wb3J0Zm9saW8vcG9ydGZvbGlvMiJ9