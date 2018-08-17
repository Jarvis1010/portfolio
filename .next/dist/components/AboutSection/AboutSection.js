"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutSection = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Grid = require("../Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _PadBox = require("../PadBox/PadBox");

var _PadBox2 = _interopRequireDefault(_PadBox);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  max-height: ", ";\n"], ["\n  max-height: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n"], ["\n  text-align: right;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  border: 0;\n  border-top: 3px solid;\n"], ["\n  border: 0;\n  border-top: 3px solid;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin-left: auto;\n  max-width: ", ";\n"], ["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin-left: auto;\n  max-width: ", ";\n"]);

var profile = "/static/components/AboutSection/portfolio.jpg";

var ProfilePic = _Grid2.default.withComponent("figure").extend(_templateObject, _styledConstants.breakWidth480);

var Description = _styledComponents2.default.div(_templateObject2);

var HR = _styledComponents2.default.hr(_templateObject3);

var Image = _styledComponents2.default.img(_templateObject4, _styledConstants.breakWidth480);

var AboutSection = exports.AboutSection = function AboutSection(_ref) {
  var _ref$description = _ref.description,
      description = _ref$description === undefined ? "" : _ref$description,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      _ref$languages = _ref.languages,
      languages = _ref$languages === undefined ? [] : _ref$languages;
  return _react2.default.createElement(_PadBox2.default, { size: "64" }, _react2.default.createElement(_Grid2.default, { minWidth: "400px" }, _react2.default.createElement(Description, null, _react2.default.createElement("p", null, description), _react2.default.createElement("h3", null, "Programming Languages"), _react2.default.createElement("p", null, languages.join(", ")), _react2.default.createElement(HR, null), _react2.default.createElement("h1", null, title)), _react2.default.createElement(ProfilePic, null, _react2.default.createElement(Image, { src: profile, alt: "Profile Photo" }))));
};

exports.default = AboutSection;