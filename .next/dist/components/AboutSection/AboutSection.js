'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutSection = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AboutStyles = require('./AboutStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var profile = '/static/components/AboutSection/portfolio.jpg';

var AboutSection = exports.AboutSection = function AboutSection(_ref) {
  var src = _ref.src,
      description = _ref.description,
      title = _ref.title,
      languages = _ref.languages;
  return _react2.default.createElement(_AboutStyles.AboutWrapper, null, _react2.default.createElement(_AboutStyles.Description, null, description && _react2.default.createElement('p', null, description), languages && _react2.default.createElement('h3', null, 'Programming Languages'), languages && _react2.default.createElement('p', null, languages.join(', ')), description && title && _react2.default.createElement(_AboutStyles.HR, null), title && _react2.default.createElement('h1', null, title)), _react2.default.createElement(_AboutStyles.ProfilePic, null, _react2.default.createElement('img', { src: profile, alt: 'Profile Photo' })));
};

exports.default = AboutSection;