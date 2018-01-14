'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactList = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/ContactList/ContactList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 24px;\n    flex: 1 1 300px;\n    margin: 0 1em;\n'], ['\n  list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 24px;\n    flex: 1 1 300px;\n    margin: 0 1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n        border-bottom: 1px solid;\n        padding: 0.5em 1em;\n        &:last-child {\n            border-bottom: none;\n        }\n'], ['\n  margin: 0;\n        border-bottom: 1px solid;\n        padding: 0.5em 1em;\n        &:last-child {\n            border-bottom: none;\n        }\n']);

var ListWrapper = _styledComponents2.default.ul(_templateObject);

var ListItem = _styledComponents2.default.li(_templateObject2);

var ContactList = exports.ContactList = function ContactList(_ref) {
  var list = _ref.list;
  return _react2.default.createElement(ListWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, list && list.map(function (listitem) {
    return _react2.default.createElement(ListItem, { key: listitem, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, listitem);
  }));
};

exports.default = ContactList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFjdExpc3QvQ29udGFjdExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJMaXN0V3JhcHBlciIsInVsIiwiTGlzdEl0ZW0iLCJsaSIsIkNvbnRhY3RMaXN0IiwibGlzdCIsIm1hcCIsImxpc3RpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU0sY0FBYywyQkFBZCxBQUFxQixHQUEzQjs7QUFTQSxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsR0FBeEIsQUFTQTs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxrQkFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUMzQixjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLGVBRUksQUFBSyxJQUFJLG9CQUFBOzJCQUFhLGNBQUQsWUFBVSxLQUFWLEFBQWU7a0JBQWY7b0JBQUEsQUFBMEI7QUFBMUI7S0FBQSxFQUFaLEFBQVk7QUFIQSxBQUN6QixBQUVJLEdBQUE7QUFIQyxBQU9QOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRhY3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJ2aXMxMDAwL3BvcnRmb2xpby9wb3J0Zm9saW8yIn0=