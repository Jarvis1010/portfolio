"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: grid;\n  grid-gap: ", ";\n  grid-auto-columns: 100%;\n"], ["\n  display: grid;\n  grid-gap: ", ";\n  grid-auto-columns: 100%;\n"]);

var gaps = {
  "0": "0",
  "4": _styledConstants.spacing4,
  "8": _styledConstants.spacing8,
  "16": _styledConstants.spacing16,
  "24": "1.5rem",
  "32": _styledConstants.spacing32,
  "64": _styledConstants.spacing64,
  "128": _styledConstants.spacing128,
  default: "0"
};

var Stack = _styledComponents2.default.div(_templateObject, function (props) {
  return gaps[props.gapSize] || gaps.default;
});

exports.default = Stack;