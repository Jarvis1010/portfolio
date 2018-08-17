"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledConstants = require("./constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"], ["\n  background-color: rgb(247, 248, 248);\n  padding: 0;\n  max-width: 100%;\n  overflow: hidden;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n"], ["\n  background: ", ";\n  margin: 0 auto;\n  max-width: ", ";\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100vh;\n"]);

var Outer = _styledComponents2.default.div(_templateObject);

var Inner = _styledComponents2.default.div(_templateObject2, _styledConstants.white, _styledConstants.breakWidthMax);

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(Outer, null, _react2.default.createElement(Inner, null, children));
};