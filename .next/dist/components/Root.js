"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _Translate = require("./Translate");

var _Translate2 = _interopRequireDefault(_Translate);

var _Normalize = require("./Normalize");

var _Normalize2 = _interopRequireDefault(_Normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme,
      _ref$strings = _ref.strings,
      strings = _ref$strings === undefined ? {} : _ref$strings,
      props = (0, _objectWithoutProperties3.default)(_ref, ["theme", "strings"]);

  return _react2.default.createElement(_Translate2.default, { strings: strings }, _react2.default.createElement(_styledComponents.ThemeProvider, { theme: theme }, _react2.default.createElement(_Normalize2.default, props)));
};

exports.default = Root;