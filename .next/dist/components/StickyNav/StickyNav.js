"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _NavBar = require("../NavBar");

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navs = [{ nav: "About", href: "/#about" }, { nav: "Portfolio", href: "/#portfolio" }, { nav: "Contact", href: "/#contact" }];

exports.default = function () {
  return _react2.default.createElement(_NavBar.NavWrapper, null, _react2.default.createElement(_NavBar.Brand, { brandName: "Travis Waith-Mair", href: "/" }), _react2.default.createElement(_NavBar.NavSlider, null, navs.map(function (_ref, i) {
    var nav = _ref.nav,
        href = _ref.href;
    return _react2.default.createElement(_NavBar.NavItem, { key: i }, _react2.default.createElement(_link2.default, { href: href }, _react2.default.createElement("a", null, nav)));
  })));
};