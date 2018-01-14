'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectList = require('../ProjectList/ProjectList');

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _ContentSection = require('../ContentSection/ContentSection');

var _ContentSection2 = _interopRequireDefault(_ContentSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/Portfolio/Portfolio.js';
var Portfolio = exports.Portfolio = function Portfolio(_ref) {
  var className = _ref.className,
      _ref$projectGroups = _ref.projectGroups,
      projectGroups = _ref$projectGroups === undefined ? {} : _ref$projectGroups;
  return _react2.default.createElement(_ContentSection2.default, { title: 'Portfolio', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, projectGroups && (0, _keys2.default)(projectGroups).map(function (key) {
    return _react2.default.createElement(_ProjectList2.default, { key: key, title: key, projects: projectGroups[key], __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  }));
};

exports.default = Portfolio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9ydGZvbGlvL1BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2plY3RMaXN0IiwiQ29udGVudFNlY3Rpb24iLCJQb3J0Zm9saW8iLCJjbGFzc05hbWUiLCJwcm9qZWN0R3JvdXBzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0IsQUFFM0I7Ozs7Ozs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxnQkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztnQ0FBSCxBQUFjO01BQWQsQUFBYyxtREFBZCxBQUE4QixLQUE5Qjt5QkFDdkIsQUFBQywwQ0FBZSxPQUFoQixBQUFzQjtnQkFBdEI7a0JBQUEsQUFDRztBQURIO0dBQUEsdUNBRUksQUFBWSxlQUFaLEFBQTJCLElBQUksZUFBQTsyQkFDN0IsQUFBQyx1Q0FBWSxLQUFiLEFBQWtCLEtBQUssT0FBdkIsQUFBOEIsS0FBSyxVQUFVLGNBQTdDLEFBQTZDLEFBQWM7a0JBQTNEO29CQUQ2QixBQUM3QjtBQUFBO0tBQUE7QUFKaUIsQUFDdkIsQUFFSSxHQUFBO0FBSEMsQUFTUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb3J0Zm9saW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcnZpczEwMDAvcG9ydGZvbGlvL3BvcnRmb2xpbzIifQ==