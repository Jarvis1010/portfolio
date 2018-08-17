"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentSection = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background-color: #eee;\n  box-sizing: border-box;\n  color: #666;\n  padding: 40px;\n  border-bottom: 1px solid grey;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  text-align: center;\n"], ["\n  background-color: #eee;\n  box-sizing: border-box;\n  color: #666;\n  padding: 40px;\n  border-bottom: 1px solid grey;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  text-align: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  border: 0;\n  border-top: 3px solid;\n  text-align: center;\n  width: 60%;\n  margin-bottom: 30px;\n"], ["\n  border: 0;\n  border-top: 3px solid;\n  text-align: center;\n  width: 60%;\n  margin-bottom: 30px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 30px;\n"], ["\n  font-size: 30px;\n"]);

var Content = _styledComponents2.default.div(_templateObject);

var HR = _styledComponents2.default.hr(_templateObject2);

var Title = _styledComponents2.default.h2(_templateObject3);

var ContentSection = exports.ContentSection = function ContentSection(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(Content, null, _react2.default.createElement(Title, null, title), _react2.default.createElement(HR, null), children);
};

exports.default = ContentSection;