"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinalSection = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TitleBox = require("../TitleBox/TitleBox");

var _TitleBox2 = _interopRequireDefault(_TitleBox);

var _LinkList = require("../LinkList/LinkList");

var _LinkList2 = _interopRequireDefault(_LinkList);

var _PadBox = require("../PadBox/PadBox");

var _PadBox2 = _interopRequireDefault(_PadBox);

var _Grid = require("../Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinalSection = exports.FinalSection = function FinalSection(_ref) {
  var links = _ref.links;
  return _react2.default.createElement(_PadBox2.default, null, _react2.default.createElement(_Grid2.default, { minWidth: _styledConstants.breakWidth480 }, _react2.default.createElement(_TitleBox2.default, { title: "ABOUT THIS PAGE" }, _react2.default.createElement("p", null, "Made with love and patience by Justin Travis Mair")), _react2.default.createElement(_TitleBox2.default, { title: "AROUND THE WEB" }, _react2.default.createElement(_LinkList2.default, { links: links }))));
};

exports.default = FinalSection;