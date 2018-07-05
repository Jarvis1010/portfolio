'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectItemStyles = require('./ProjectItemStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectItem = exports.ProjectItem = function ProjectItem(_ref) {
  var src = _ref.src,
      href = _ref.href,
      alt = _ref.alt,
      desc = _ref.desc;
  return _react2.default.createElement(_ProjectItemStyles.ItemWrapper, null, _react2.default.createElement('figure', null, _react2.default.createElement(_ProjectItemStyles.ScreenShot, { src: src, alt: alt })), _react2.default.createElement(_ProjectItemStyles.ProjectLink, { href: href }, desc));
};

exports.default = ProjectItem;