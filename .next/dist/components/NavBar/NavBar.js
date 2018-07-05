'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBarStyles = require('./NavBarStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      img = _ref.img,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '' : _ref$href,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children', 'img', 'href']);

  return _react2.default.createElement(_NavBarStyles.NavWrapper, props, img && _react2.default.createElement(_NavBarStyles.IconAnchor, { disabled: href === '', href: href }, _react2.default.createElement(_NavBarStyles.Icon, { src: img })), children);
};

exports.NavBar = NavBar;
exports.default = NavBar;