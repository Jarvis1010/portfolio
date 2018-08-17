"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n"], ["\n  width: 100%;\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-right: ", ";\n"]);

var allowedSpacings = {
  // fixed vals
  "0": "0",
  "4": _styledConstants.spacing4,
  "8": _styledConstants.spacing8,
  "16": _styledConstants.spacing16,
  "24": "1.5rem",
  "32": _styledConstants.spacing32,
  "64": _styledConstants.spacing64,
  "128": _styledConstants.spacing128,

  // percentage
  ".05": "5%",
  ".10": "10%",
  ".15": "15%",
  ".20": "20%"
};

var handlePaddingFor = function handlePaddingFor(pos) {
  return function (_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === undefined ? "32" : _ref$size,
        props = (0, _objectWithoutProperties3.default)(_ref, ["size"]);

    return props[pos] && allowedSpacings[props[pos]] || allowedSpacings[size];
  };
};

var PadBox = _styledComponents2.default.div(_templateObject, handlePaddingFor("bottom"), handlePaddingFor("left"), handlePaddingFor("top"), handlePaddingFor("right"));

exports.default = PadBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFkQm94L1BhZEJveC5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJzcGFjaW5nNCIsInNwYWNpbmc4Iiwic3BhY2luZzE2Iiwic3BhY2luZzMyIiwic3BhY2luZzY0Iiwic3BhY2luZzEyOCIsImFsbG93ZWRTcGFjaW5ncyIsImhhbmRsZVBhZGRpbmdGb3IiLCJzaXplIiwicHJvcHMiLCJwb3MiLCJQYWRCb3giLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0s7Ozs7OztBQUVQLElBQU07QUFFSjtPQUZzQixBQUVqQixBQUNMO0FBSHNCLEFBR2pCLEFBQ0w7QUFKc0IsQUFJakIsQUFDTDtBQUxzQixBQUtoQixBQUNOO1FBTnNCLEFBTWhCLEFBQ047QUFQc0IsQUFPaEIsQUFDTjtBQVJzQixBQVFoQixBQUNOO0FBVHNCLEFBU2YsQUFFUDs7QUFDQTtTQVpzQixBQVlmLEFBQ1A7U0Fic0IsQUFhZixBQUNQO1NBZHNCLEFBY2YsQUFDUDtTQWZGLEFBQXdCLEFBZWY7QUFmZSxBQUN0Qjs7QUFpQkYsSUFBTSxtQkFBbUIsU0FBbkIsQUFBbUIsc0JBQUE7U0FBTyxnQkFBQTt5QkFBQSxBQUFHO1FBQUgsQUFBRyxpQ0FBSCxBQUFVLE9BQVY7UUFBQSxBQUFtQixzREFBbkI7O1dBQzdCLE1BQUEsQUFBTSxRQUFRLGdCQUFnQixNQUEvQixBQUFlLEFBQWdCLEFBQU0sU0FBVSxnQkFEakIsQUFDaUIsQUFBZ0I7QUFEeEM7QUFBekI7O0FBR0EsSUFBTSxTQUFTLDJCQUFULEFBQWdCLHFCQUVGLGlCQUZkLEFBRWMsQUFBaUIsV0FDbkIsaUJBSFosQUFHWSxBQUFpQixTQUNsQixpQkFKWCxBQUlXLEFBQWlCLFFBQ2YsaUJBTG5CLEFBQU0sQUFLYSxBQUFpQixBQUdwQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJQYWRCb3guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==