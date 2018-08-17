"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBox = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 18px;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  flex: 1 1 400px;\n"], ["\n  font-size: 18px;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  flex: 1 1 400px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 30px;\n"], ["\n  font-size: 30px;\n"]);

var Box = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

var TitleBox = exports.TitleBox = function TitleBox(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(Box, null, _react2.default.createElement(Title, null, title), children);
};

exports.default = TitleBox;