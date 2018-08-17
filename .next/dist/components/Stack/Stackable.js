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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhY2svU3RhY2thYmxlLmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImxpZ2h0R3JleSIsIm1lZGl1bUdyZXkiLCJkYXJrR3JleSIsImJsYWNrIiwid2hpdGUiLCJ0eXBlIiwibGlnaHQiLCJjb2xvciIsIm1lZGl1bSIsImRhcmsiLCJkZWZhdWx0IiwiU3RhY2siLCJkaXYiLCJwcm9wcyIsIm1hcCIsIngiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7Ozs7O0FBRVAsSUFBTTtTQUNHLEVBQUEsQUFBRSxBQUFvQixnREFEbEIsQUFDSixBQUFpQyxBQUFPLGlDQUFTLEFBQ3hEO1VBQVEsRUFBQSxBQUFFLEFBQW9CLGlEQUZuQixBQUVILEFBQWtDLEFBQU8saUNBQVMsQUFDMUQ7UUFBTSxFQUFBLEFBQUUsQUFBb0IsK0NBSGpCLEFBR0wsQUFBZ0MsQUFBTyxpQ0FBUyxBQUN0RDtXQUFTLEVBQUEsQUFBRSxBQUFvQixnREFKakMsQUFBYSxBQUlGLEFBQWlDLEFBQU87QUFKdEMsQUFDWDs7QUFNRixJQUFNLG1DQUFBLEFBQWUscUJBR2pCLGlCQUFBO2dDQUNlLEtBQUssTUFBTCxBQUFXLFNBQVMsS0FBbkMsQUFBd0MsU0FBeEMsQUFDRyxJQUFJLGFBQUE7V0FBSyxFQUFBLEFBQUUsS0FBUCxBQUFLLEFBQU87QUFEbkIsR0FBQSxFQUFBLEFBRUcsS0FISCxBQUNBLEFBRVE7QUFOWixBQUFNLEFBU04sQ0FUYzs7a0JBU2QsQUFBZSIsImZpbGUiOiJTdGFja2FibGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==