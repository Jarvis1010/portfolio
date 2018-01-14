'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutSection = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AboutStyles = require('./AboutStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/AboutSection/AboutSection.js';

var profile = '/static/components/AboutSection/portfolio.jpg';

var AboutSection = exports.AboutSection = function AboutSection(_ref) {
  var src = _ref.src,
      description = _ref.description,
      title = _ref.title,
      languages = _ref.languages;
  return _react2.default.createElement(_AboutStyles.AboutWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_AboutStyles.Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, description && _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, description), languages && _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Programming Languages'), languages && _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, languages.join(', ')), description && title && _react2.default.createElement(_AboutStyles.HR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), title && _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, title)), _react2.default.createElement(_AboutStyles.ProfilePic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('img', { src: profile, alt: 'Profile Photo', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })));
};

exports.default = AboutSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWJvdXRTZWN0aW9uL0Fib3V0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhSIiwiQWJvdXRXcmFwcGVyIiwiUHJvZmlsZVBpYyIsIkRlc2NyaXB0aW9uIiwiQWJvdXRTZWN0aW9uIiwic3JjIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImxhbmd1YWdlcyIsImpvaW4iLCJwcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBSSxBQUFjLEFBQVksQUFBbUIsQUFFMUQ7Ozs7Ozs7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsbUJBQUE7TUFBQSxBQUFHLFdBQUgsQUFBRztNQUFILEFBQVEsbUJBQVIsQUFBUTtNQUFSLEFBQXFCLGFBQXJCLEFBQXFCO01BQXJCLEFBQTRCLGlCQUE1QixBQUE0Qjt5QkFDdEQsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxvQ0FDa0IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsR0FBQSxFQURsQixBQUNrQixBQUNmLDJDQUFhLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBLEVBRmhCLEFBRWdCLEFBQ2IsdURBQWEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsR0FBQSxZQUFJLEFBQVUsS0FIOUIsQUFHZ0IsQUFBSSxBQUFlLEFBQ2hDLHVCQUFBLEFBQWUseUJBQVMsQUFBQzs7Z0JBQUQ7a0JBSjNCLEFBSTJCLEFBQ3hCO0FBRHdCO0FBQUEsR0FBQSw0QkFDZixjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxHQUFBLEVBTmQsQUFDRSxBQUtZLEFBRVoseUJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsNENBQ08sS0FBTCxBQUFVLFNBQVMsS0FBbkIsQUFBdUI7Z0JBQXZCO2tCQVZzQixBQUMxQixBQVFFLEFBQ0U7QUFBQTs7QUFWQyxBQWVQOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFib3V0U2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFydmlzMTAwMC9wb3J0Zm9saW8vcG9ydGZvbGlvMiJ9