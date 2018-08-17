'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactList = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 24px;\n    flex: 1 1 300px;\n    margin: 0 1em;\n'], ['\n  list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 24px;\n    flex: 1 1 300px;\n    margin: 0 1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n        border-bottom: 1px solid;\n        padding: 0.5em 1em;\n        &:last-child {\n            border-bottom: none;\n        }\n'], ['\n  margin: 0;\n        border-bottom: 1px solid;\n        padding: 0.5em 1em;\n        &:last-child {\n            border-bottom: none;\n        }\n']);

var ListWrapper = _styledComponents2.default.ul(_templateObject);

var ListItem = _styledComponents2.default.li(_templateObject2);

var ContactList = exports.ContactList = function ContactList(_ref) {
  var list = _ref.list;
  return _react2.default.createElement(ListWrapper, null, list && list.map(function (listitem) {
    return _react2.default.createElement(ListItem, { key: listitem }, listitem);
  }));
};

exports.default = ContactList;