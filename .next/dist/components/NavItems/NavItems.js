'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavItems = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display:flex;\n  list-style: none;\n  &>*{\n      padding:0 1em;\n  }\n  & a{\n    text-decoration: none;\n    color:inherit;\n    &:hover{\n        text-decoration: none;\n        color:#fff \n    }\n}\n  @media (max-width: 700px) {\n      align-items:center;\n      flex-flow:column;\n      &>*{\n          padding:1em;\n      }\n  }\n'], ['\n  display:flex;\n  list-style: none;\n  &>*{\n      padding:0 1em;\n  }\n  & a{\n    text-decoration: none;\n    color:inherit;\n    &:hover{\n        text-decoration: none;\n        color:#fff \n    }\n}\n  @media (max-width: 700px) {\n      align-items:center;\n      flex-flow:column;\n      &>*{\n          padding:1em;\n      }\n  }\n']);

var ItemWrapper = _styledComponents2.default.div(_templateObject);

var NavItems = exports.NavItems = function NavItems(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(ItemWrapper, null, children);
};

exports.default = NavItems;