'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fa = require('react-icons/lib/fa');

var _LinkListStyles = require('./LinkListStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function iconPicker(content) {
  switch (content) {
    case 'github':
      {
        return _react2.default.createElement(_fa.FaGithub, null);
      }
    case 'twitter':
      {
        return _react2.default.createElement(_fa.FaTwitter, null);
      }
    case 'linkedin':
      {
        return _react2.default.createElement(_fa.FaLinkedin, null);
      }
    default:
      {
        return '';
      }
  }
}

var LinkList = exports.LinkList = function LinkList(_ref) {
  var links = _ref.links;
  return _react2.default.createElement(_LinkListStyles.ListOfLinks, null, links && links.map(function (link) {
    return _react2.default.createElement(_LinkListStyles.IconLink, { key: link.href, href: link.href }, iconPicker(link.content));
  }));
};

exports.default = LinkList;