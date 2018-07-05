'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TitleBoxStyles = require('./TitleBoxStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleBox = exports.TitleBox = function TitleBox(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(_TitleBoxStyles.Box, null, _react2.default.createElement(_TitleBoxStyles.Title, null, title), children);
};

exports.default = TitleBox;