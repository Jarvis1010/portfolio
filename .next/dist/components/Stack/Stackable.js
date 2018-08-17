"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  width: 100%;\n  ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  ", ";\n"]);

var type = {
  light: { "background-color": _styledConstants.lightGrey, color: _styledConstants.black }, // eslint-disable-line no-use-before-define
  medium: { "background-color": _styledConstants.mediumGrey, color: _styledConstants.black }, // eslint-disable-line no-use-before-define
  dark: { "background-color": _styledConstants.darkGrey, color: _styledConstants.white }, // eslint-disable-line no-use-before-define
  default: { "background-color": _styledConstants.lightGrey, color: _styledConstants.black }
};

var Stack = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _entries2.default)(type[props.type] || type.default).map(function (x) {
    return x.join(":");
  }).join(";");
});

exports.default = Stack;