'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBarStyles = require('./NavBarStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/NavBar/NavBar.js';


var NavBar = function NavBar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      img = _ref.img,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '' : _ref$href,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children', 'img', 'href']);

  return _react2.default.createElement(_NavBarStyles.NavWrapper, (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), img && _react2.default.createElement(_NavBarStyles.IconAnchor, { disabled: href === '', href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_NavBarStyles.Icon, { src: img, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), children);
};

exports.NavBar = NavBar;
exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdldyYXBwZXIiLCJJY29uIiwiSWNvbkFuY2hvciIsIk5hdkJhciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaW1nIiwiaHJlZiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZLEFBQU0sQUFBa0I7Ozs7Ozs7QUFFdEMsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO01BQUgsQUFBYyxnQkFBZCxBQUFjO01BQWQsQUFBd0IsV0FBeEIsQUFBd0I7dUJBQXhCLEFBQTZCO01BQTdCLEFBQTZCLGlDQUE3QixBQUFvQyxLQUFwQztNQUFBLEFBQTJDLHNGQUEzQzs7eUJBQ3BCLEFBQUMsbUVBQUQsQUFBZ0I7O2dCQUFoQjtrQkFBQSxBQUNHO0FBREg7QUFBQSxJQUFBLHlCQUVJLEFBQUMsMENBQVcsVUFBVSxTQUF0QixBQUErQixJQUFJLE1BQW5DLEFBQXlDO2dCQUF6QztrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLG9DQUFLLEtBQU4sQUFBVztnQkFBWDtrQkFITixBQUVJLEFBQ0UsQUFFSDtBQUZHO09BSmMsQUFDcEI7QUFESzs7UUFVUDtrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFydmlzMTAwMC9wb3J0Zm9saW8vcG9ydGZvbGlvMiJ9