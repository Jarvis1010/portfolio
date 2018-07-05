'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContactList = require('../ContactList/ContactList');

var _ContactList2 = _interopRequireDefault(_ContactList);

var _ContentSection = require('../ContentSection/ContentSection');

var _ContentSection2 = _interopRequireDefault(_ContentSection);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n flex: 1 1 300px;\n    margin: 0 1em;\n'], ['\n flex: 1 1 300px;\n    margin: 0 1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display:flex;\n'], ['\n  display:flex;\n']);

var FlexItem = _styledComponents2.default.p(_templateObject);

var FlexWrapper = _styledComponents2.default.div(_templateObject2);

var Contact = exports.Contact = function Contact(_ref) {
  var className = _ref.className,
      list = _ref.list,
      message = _ref.message;
  return _react2.default.createElement(_ContentSection2.default, { title: 'Contact' }, _react2.default.createElement(FlexWrapper, null, _react2.default.createElement(_ContactList2.default, { list: list }), _react2.default.createElement(FlexItem, null, message)));
};

exports.default = Contact;