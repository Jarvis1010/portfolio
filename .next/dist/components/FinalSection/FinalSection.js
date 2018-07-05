'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinalSection = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TitleBox = require('../TitleBox/TitleBox');

var _TitleBox2 = _interopRequireDefault(_TitleBox);

var _LinkList = require('../LinkList/LinkList');

var _LinkList2 = _interopRequireDefault(_LinkList);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    flex-flow: row wrap;\n    background-color: #aaa;\n    color: white;\n    font-family: Helvetica, Arial, sans-serif;\n    padding: 40px;\n'], ['\n    display: flex;\n    flex-flow: row wrap;\n    background-color: #aaa;\n    color: white;\n    font-family: Helvetica, Arial, sans-serif;\n    padding: 40px;\n']);

var SectionWrapper = _styledComponents2.default.div(_templateObject);

var FinalSection = exports.FinalSection = function FinalSection(_ref) {
  var className = _ref.className,
      links = _ref.links;
  return _react2.default.createElement(SectionWrapper, null, _react2.default.createElement(_TitleBox2.default, { title: 'ABOUT THIS PAGE' }, _react2.default.createElement('p', null, 'Made with love and patience by Justin Travis Mair')), _react2.default.createElement(_TitleBox2.default, { title: 'AROUND THE WEB' }, _react2.default.createElement(_LinkList2.default, { links: links })));
};

exports.default = FinalSection;