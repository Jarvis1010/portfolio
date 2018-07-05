'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _NavBar = require('../NavBar/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NavCollapse = require('../NavCollapse/NavCollapse');

var _NavCollapse2 = _interopRequireDefault(_NavCollapse);

var _NavItems = require('../NavItems/NavItems');

var _NavItems2 = _interopRequireDefault(_NavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_NavBar2.default, { inverse: true }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Travis Mair')), _react2.default.createElement(_NavCollapse2.default, null, _react2.default.createElement('div', null), _react2.default.createElement(_NavItems2.default, null, _react2.default.createElement('a', { href: '/#about' }, 'About'), _react2.default.createElement('a', { href: '/#portfolio' }, 'Portfolio'), _react2.default.createElement('a', { href: '/#contact' }, 'Contact'))));
};