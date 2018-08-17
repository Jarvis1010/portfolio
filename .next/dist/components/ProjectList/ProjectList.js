'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectList = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectItem = require('../ProjectItem/ProjectItem');

var _ProjectItem2 = _interopRequireDefault(_ProjectItem);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n display: flex;\n    flex-flow: row wrap;\n    text-align: center;\n    justify-content: space-around;\n'], ['\n display: flex;\n    flex-flow: row wrap;\n    text-align: center;\n    justify-content: space-around;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\nmin-width: 100%;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        line-height: 1.1;\n'], ['\nmin-width: 100%;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        line-height: 1.1;\n']);

var ListWrapper = _styledComponents2.default.div(_templateObject);

var ListHeader = _styledComponents2.default.h2(_templateObject2);

var ProjectList = exports.ProjectList = function ProjectList(_ref) {
  var className = _ref.className,
      _ref$projects = _ref.projects,
      projects = _ref$projects === undefined ? [] : _ref$projects,
      title = _ref.title;
  return _react2.default.createElement(ListWrapper, null, title && _react2.default.createElement(ListHeader, null, title), projects.map(function (project) {
    return _react2.default.createElement(_ProjectItem2.default, (0, _extends3.default)({ key: project.desc }, project));
  }));
};

exports.default = ProjectList;