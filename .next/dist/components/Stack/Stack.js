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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhY2svU3RhY2suanMiXSwibmFtZXMiOlsic3R5bGVkIiwic3BhY2luZzQiLCJzcGFjaW5nOCIsInNwYWNpbmcxNiIsInNwYWNpbmczMiIsInNwYWNpbmc2NCIsInNwYWNpbmcxMjgiLCJnYXBzIiwiZGVmYXVsdCIsIlN0YWNrIiwiZGl2IiwicHJvcHMiLCJnYXBTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0s7Ozs7OztBQUVQLElBQU07T0FBTyxBQUNOLEFBQ0w7QUFGVyxBQUVOLEFBQ0w7QUFIVyxBQUdOLEFBQ0w7QUFKVyxBQUlMLEFBQ047UUFMVyxBQUtMLEFBQ047QUFOVyxBQU1MLEFBQ047QUFQVyxBQU9MLEFBQ047QUFSVyxBQVFKLEFBQ1A7V0FURixBQUFhLEFBU0Y7QUFURSxBQUNYOztBQVdGLElBQU0sbUNBQUEsQUFBZSxxQkFFUCxpQkFBQTtTQUFTLEtBQUssTUFBTCxBQUFXLFlBQVksS0FBaEMsQUFBcUM7QUFGbkQsQUFBTSxBQU1OLENBTmM7O2tCQU1kLEFBQWUiLCJmaWxlIjoiU3RhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==