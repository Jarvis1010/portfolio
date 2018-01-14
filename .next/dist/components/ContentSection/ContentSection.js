'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentSection = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/ContentSection/ContentSection.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n     background-color: #eee;\n    box-sizing: border-box;\n    color: #666;\n    padding: 40px;\n    border-bottom: 1px solid grey;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    text-align: center;\n'], ['\n     background-color: #eee;\n    box-sizing: border-box;\n    color: #666;\n    padding: 40px;\n    border-bottom: 1px solid grey;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    text-align: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    border: 0;\n    border-top: 3px solid;\n    text-align: center;\n    width: 60%;\n    margin-bottom: 30px;\n    &:after {\n        content: \'< / >\';\n        display: inline-block;\n        position: relative;\n        top: -15px;\n        padding: 0 3px;\n        background: #eee;\n        color: #666;\n        font-size: 18px;\n    }\n'], ['\n    border: 0;\n    border-top: 3px solid;\n    text-align: center;\n    width: 60%;\n    margin-bottom: 30px;\n    &:after {\n        content: \'< / >\';\n        display: inline-block;\n        position: relative;\n        top: -15px;\n        padding: 0 3px;\n        background: #eee;\n        color: #666;\n        font-size: 18px;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 30px;\n'], ['\n    font-size: 30px;\n']);

var Content = _styledComponents2.default.div(_templateObject);

var HR = _styledComponents2.default.hr(_templateObject2);

var Title = _styledComponents2.default.h2(_templateObject3);

var ContentSection = exports.ContentSection = function ContentSection(_ref) {
    var title = _ref.title,
        children = _ref.children;
    return _react2.default.createElement(Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement(Title, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, title), _react2.default.createElement(HR, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }), children);
};

exports.default = ContentSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudFNlY3Rpb24vQ29udGVudFNlY3Rpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDb250ZW50IiwiZGl2IiwiSFIiLCJociIsIlRpdGxlIiwiaDIiLCJDb250ZW50U2VjdGlvbiIsInRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7OztBQUVQLElBQU0sVUFBVSwyQkFBVixBQUFpQixJQUF2Qjs7QUFZQSxJQUFNLEtBQUssMkJBQUwsQUFBWSxHQUFsQjs7QUFrQkEsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckIsQUFJQTs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixxQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxnQkFBVixBQUFVOzJCQUNyQyxjQUFEOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQVE7QUFBUjtBQUFBLE9BREYsQUFDRSxBQUNBLHNDQUFBLEFBQUM7O3NCQUFEO3dCQUZGLEFBRUUsQUFDQztBQUREO0FBQUEsUUFIMEIsQUFDNUI7QUFESyxBQVFQOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRlbnRTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJ2aXMxMDAwL3BvcnRmb2xpby9wb3J0Zm9saW8yIn0=