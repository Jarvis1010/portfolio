'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectList = require('../ProjectList/ProjectList');

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _ContentSection = require('../ContentSection/ContentSection');

var _ContentSection2 = _interopRequireDefault(_ContentSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portfolio = exports.Portfolio = function Portfolio(_ref) {
  var className = _ref.className,
      _ref$projectGroups = _ref.projectGroups,
      projectGroups = _ref$projectGroups === undefined ? {} : _ref$projectGroups;
  return _react2.default.createElement(_ContentSection2.default, { title: 'Portfolio' }, projectGroups && (0, _keys2.default)(projectGroups).map(function (key) {
    return _react2.default.createElement(_ProjectList2.default, { key: key, title: key, projects: projectGroups[key] });
  }));
};

exports.default = Portfolio;