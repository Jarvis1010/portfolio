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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n   margin-top: 30px;\n   padding: 1em 0;\n   background-color: #808080;\n'], ['\n   margin-top: 30px;\n   padding: 1em 0;\n   background-color: #808080;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n   margin-top: 0;\n    text-align: center;\n    color: white;\n    background-color: #222;\n'], ['\n   margin-top: 0;\n    text-align: center;\n    color: white;\n    background-color: #222;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n'], ['\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n']);

var AppWrapper = _styledComponents2.default.div(_templateObject);

var Footer = _styledComponents2.default.footer(_templateObject2);

var MainWrapper = _styledComponents2.default.main(_templateObject3);

var Layout = function Layout(_ref) {
  var children = _ref.children,
      url = _ref.url;
  return _react2.default.createElement(AppWrapper, null, _react2.default.createElement(_SiteHeader2.default, null), _react2.default.createElement(MainWrapper, null, children), _react2.default.createElement(Footer, null, 'JTM \xA9 2016. All Rights Reserved'));
};

exports.default = Layout;