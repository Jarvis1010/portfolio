"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require("../components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _AboutSection = require("../components/AboutSection/AboutSection");

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _Portfolio = require("../components/Portfolio/Portfolio");

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = require("../components/Contact/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _FinalSection = require("../components/FinalSection/FinalSection");

var _FinalSection2 = _interopRequireDefault(_FinalSection);

var _constants = require("../constants");

var _Stack = require("../components/Stack/Stack");

var _Stack2 = _interopRequireDefault(_Stack);

var _Stackable = require("../components/Stack/Stackable");

var _Stackable2 = _interopRequireDefault(_Stackable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_Stack2.default, null, _react2.default.createElement(_Stackable2.default, { type: "light", id: "about" }, _react2.default.createElement(_AboutSection2.default, _constants.about)), _react2.default.createElement(_Stackable2.default, { id: "portfolio" }, _react2.default.createElement(_Portfolio2.default, { projectGroups: _constants.portfolio })), _react2.default.createElement(_Stackable2.default, { type: "dark", id: "contact" }, _react2.default.createElement(_Contact2.default, { list: _constants.list, message: _constants.desc })), _react2.default.createElement(_Stackable2.default, null, _react2.default.createElement(_FinalSection2.default, { links: _constants.links }))));
};