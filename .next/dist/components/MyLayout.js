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

var _styledConstants = require("../components/constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"], ["\n  margin: 0;\n  text-align: center;\n  color: white;\n  background-color: ", ";\n"]);

var Footer = _styledComponents2.default.footer(_templateObject, _styledConstants.darkGrey);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_Root2.default, null, _react2.default.createElement(_PageWrapper2.default, null, _react2.default.createElement(_StickyNav2.default, null), _react2.default.createElement("main", null, children), _react2.default.createElement(Footer, null, "JTWM \xA9 2018. All Rights Reserved")));
};

exports.default = Layout;