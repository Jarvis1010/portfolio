'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _AboutSection = require('../components/AboutSection/AboutSection');

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _Portfolio = require('../components/Portfolio/Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = require('../components/Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _FinalSection = require('../components/FinalSection/FinalSection');

var _FinalSection2 = _interopRequireDefault(_FinalSection);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 900px;\n  margin: 0;\n'], ['\n  max-width: 900px;\n  margin: 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 0 1 400px;\n'], ['\n  flex: 0 1 400px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n   width: 100%;\n  margin: 0;\n'], ['\n   width: 100%;\n  margin: 0;\n']);

var ContentSection = _styledComponents2.default.section(_templateObject);

var About = ContentSection.extend(_templateObject2);

var Final = _styledComponents2.default.section(_templateObject3);

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, props, _react2.default.createElement(About, { id: 'about' }, _react2.default.createElement(_AboutSection2.default, _constants.about)), _react2.default.createElement(ContentSection, { id: 'portfolio' }, _react2.default.createElement(_Portfolio2.default, { projectGroups: _constants.portfolio })), _react2.default.createElement(ContentSection, { id: 'contact' }, _react2.default.createElement(_Contact2.default, { list: _constants.list, message: _constants.desc })), _react2.default.createElement(Final, null, _react2.default.createElement(_FinalSection2.default, { links: _constants.links })));
};