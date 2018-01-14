'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectList = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectItem = require('../ProjectItem/ProjectItem');

var _ProjectItem2 = _interopRequireDefault(_ProjectItem);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/ProjectList/ProjectList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n display: flex;\n    flex-flow: row wrap;\n    text-align: center;\n    justify-content: space-around;\n'], ['\n display: flex;\n    flex-flow: row wrap;\n    text-align: center;\n    justify-content: space-around;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\nmin-width: 100%;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        line-height: 1.1;\n'], ['\nmin-width: 100%;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        line-height: 1.1;\n']);

var ListWrapper = _styledComponents2.default.div(_templateObject);

var ListHeader = _styledComponents2.default.h2(_templateObject2);

var ProjectList = exports.ProjectList = function ProjectList(_ref) {
  var className = _ref.className,
      _ref$projects = _ref.projects,
      projects = _ref$projects === undefined ? [] : _ref$projects,
      title = _ref.title;
  return _react2.default.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title && _react2.default.createElement(ListHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, title), projects.map(function (project) {
    return _react2.default.createElement(_ProjectItem2.default, (0, _extends3.default)({ key: project.desc }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }));
  }));
};

exports.default = ProjectList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdExpc3QvUHJvamVjdExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9qZWN0SXRlbSIsInN0eWxlZCIsIkxpc3RXcmFwcGVyIiwiZGl2IiwiTGlzdEhlYWRlciIsImgyIiwiUHJvamVjdExpc3QiLCJjbGFzc05hbWUiLCJwcm9qZWN0cyIsInRpdGxlIiwibWFwIiwicHJvamVjdCIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU87Ozs7Ozs7Ozs7O0FBRVAsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLElBQTNCOztBQU9BLElBQU0sYUFBYSwyQkFBYixBQUFvQixHQUExQixBQVFBOztBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLGtCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHOzJCQUFILEFBQWM7TUFBZCxBQUFjLHlDQUFkLEFBQXlCLEtBQXpCO01BQUEsQUFBNkIsYUFBN0IsQUFBNkI7eUJBQ3JELGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsMkJBQ2EsY0FBRDs7Z0JBQUE7a0JBQUEsQUFBYTtBQUFiO0FBQUEsR0FBQSxFQURaLEFBQ1ksQUFDVCxpQkFBQSxBQUFTLElBQUksbUJBQUE7MkJBQVcsQUFBQyw4REFBWSxLQUFLLFFBQWxCLEFBQTBCLFFBQTFCLEFBQW9DOztrQkFBcEM7b0JBQVgsQUFBVztBQUFBO0FBQUEsTUFBQTtBQUhGLEFBQ3pCLEFBRUc7QUFIRSxBQU9QOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByb2plY3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJ2aXMxMDAwL3BvcnRmb2xpby9wb3J0Zm9saW8yIn0=