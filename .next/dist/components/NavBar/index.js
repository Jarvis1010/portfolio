"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Brand = exports.NavCollapse = exports.NavSlider = exports.NavItem = exports.NavWrapper = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background: ", ";\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  top: 0;\n"], ["\n  background: ", ";\n  min-height: 50px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  color: ", ";\n  position: sticky;\n  top: 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  & a {\n    text-decoration: none;\n    color: ", ";\n  }\n  align-self: center;\n  margin: ", ";\n"], ["\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  & a {\n    text-decoration: none;\n    color: ", ";\n  }\n  align-self: center;\n  margin: ", ";\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  font-family: ", ";\n  font-size: ", ";\n  min-width: auto;\n  margin-left: ", ";\n  white-space: nowrap;\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  min-width: auto;\n  margin-left: ", ";\n  white-space: nowrap;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  align-items: center;\n  border: 0;\n  color: ", ";\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  flex-grow: 10;\n  margin-right: auto;\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  color: ", ";\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  flex-grow: 10;\n  margin-right: auto;\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: ", ";\n  height: auto;\n  margin: ", ";\n"], ["\n  max-width: ", ";\n  height: auto;\n  margin: ", ";\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  min-height: 50px;\n  display: flex;\n  @media (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n    order: 50;\n    background: ", ";\n  }\n"], ["\n  min-height: 50px;\n  display: flex;\n  @media (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n    order: 50;\n    background: ", ";\n  }\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  display: none;\n  text-align: center;\n  text-decoration: none;\n  font-size:", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  background: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    display: inline;\n    margin:auto ", ";\n"], ["\n  display: none;\n  text-align: center;\n  text-decoration: none;\n  font-size:", ";\n  color: ", ";\n  border: 1px solid ", ";\n  cursor: pointer;\n  background: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    display: inline;\n    margin:auto ", ";\n"]);

var NavWrapper = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : _styledConstants.grey20;
}, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
});

var NavItem = _styledComponents2.default.span(_templateObject2, _styledConstants.fontSize18, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
}, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
}, _styledConstants.spacing8);

var BrandName = _styledComponents2.default.h2(_templateObject3, function (props) {
  return props.theme.fontFamily ? props.theme.fontFamily : _styledConstants.sans;
}, _styledConstants.fontSize18, _styledConstants.spacing8);

var BrandLink = _styledComponents2.default.a(_templateObject4, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
}, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
});

var Logo = _styledComponents2.default.img(_templateObject5, function (props) {
  return props.size ? props.size : "30px";
}, _styledConstants.spacing8);

var Brand = function Brand(_ref) {
  var brandName = _ref.brandName,
      src = _ref.src,
      href = _ref.href;
  return _react2.default.createElement(_link2.default, { href: href }, _react2.default.createElement(BrandLink, null, src && _react2.default.createElement(Logo, { src: src, alt: (brandName ? brandName + " " : "") + "logo" }), brandName && _react2.default.createElement(BrandName, null, brandName)));
};

var NavSlider = _styledComponents2.default.div(_templateObject6, _styledConstants.breakWidth480, function (props) {
  return props.hidden ? "none" : "flex";
}, function (props) {
  return props.theme.secondaryColor ? props.theme.secondaryColor : _styledConstants.grey30;
});

var Hamburger = _styledComponents2.default.button(_templateObject7, _styledConstants.fontSize18, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
}, function (props) {
  return props.theme.white ? props.theme.white : _styledConstants.white;
}, function (props) {
  return props.theme.primaryColor ? props.theme.primaryColor : "inherit";
}, _styledConstants.breakWidth480, _styledConstants.spacing8);

var NavCollapse = function (_React$Component) {
  (0, _inherits3.default)(NavCollapse, _React$Component);

  function NavCollapse() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NavCollapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = NavCollapse.__proto__ || (0, _getPrototypeOf2.default)(NavCollapse)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { hidden: true }, _this.handleClick = function () {
      return _this.setState(function (state) {
        return { hidden: !state.hidden };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NavCollapse, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(Hamburger, { onClick: this.handleClick }, "\u2630"), _react2.default.createElement(NavSlider, this.state, children));
    }
  }]);

  return NavCollapse;
}(_react2.default.Component);

exports.NavWrapper = NavWrapper;
exports.NavItem = NavItem;
exports.NavSlider = NavSlider;
exports.NavCollapse = NavCollapse;
exports.Brand = Brand;