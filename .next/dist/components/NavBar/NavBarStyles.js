'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconAnchor = exports.Icon = exports.NavWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    box-sizing: border-box;\n    overflow: hidden;\n    position:fixed;\n    font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;\n    line-height: 1.42857143;\n    left:0;\n    right:0;\n    padding:1em;\n    display:flex;\n    font-size:14px;\n    background-color:', ';\n    z-index: 1000;\n    flex:1;\n    color:', ';\n  \n    & a{\n        text-decoration: none;\n        color:inherit;\n        &:hover{\n            text-decoration: none;\n        }\n    }\n    @media (max-width: 600px) {\n        justify-content: space-between;\n    }\n\n    ', '\n'], ['\n    box-sizing: border-box;\n    overflow: hidden;\n    position:fixed;\n    font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;\n    line-height: 1.42857143;\n    left:0;\n    right:0;\n    padding:1em;\n    display:flex;\n    font-size:14px;\n    background-color:', ';\n    z-index: 1000;\n    flex:1;\n    color:', ';\n  \n    & a{\n        text-decoration: none;\n        color:inherit;\n        &:hover{\n            text-decoration: none;\n        }\n    }\n    @media (max-width: 600px) {\n        justify-content: space-between;\n    }\n\n    ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width:auto;\n    max-height:22px;\n'], ['\n    width:auto;\n    max-height:22px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n'], ['\n    ', '\n']);

var NavWrapper = exports.NavWrapper = _styledComponents2.default.nav(_templateObject, function (props) {
    return props.inverse ? '#222' : '#eaeaea';
}, function (props) {
    return props.inverse ? '#9d9d9d' : '#777';
}, function (props) {
    return props.bottom ? 'bottom:0;' : 'top:0;';
});

var Icon = exports.Icon = _styledComponents2.default.img(_templateObject2);

var IconAnchor = exports.IconAnchor = _styledComponents2.default.a(_templateObject3, function (props) {
    return props.disabled && 'pointer-events:none;';
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyL05hdkJhclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk5hdldyYXBwZXIiLCJuYXYiLCJwcm9wcyIsImludmVyc2UiLCJib3R0b20iLCJJY29uIiwiaW1nIiwiSWNvbkFuY2hvciIsImEiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7Ozs7O0FBQU8sSUFBTSw2REFBQSxBQUFvQixxQkFXVixpQkFBQTtXQUFVLE1BQUEsQUFBTSxVQUFOLEFBQWdCLFNBQTFCLEFBQW1DO0FBWDdDLENBQWEsRUFjZCxpQkFBQTtXQUFVLE1BQUEsQUFBTSxVQUFOLEFBQWdCLFlBQTFCLEFBQXNDO0FBZHJDLEdBMkJQLGlCQUFBO1dBQVUsTUFBQSxBQUFNLFNBQU4sQUFBZSxjQUF6QixBQUF1QztBQTNCdEMsQUFBTSxBQThCYjs7QUFBTyxJQUFNLHNCQUFPLDJCQUFQLEFBQWMsSUFBcEIsQUFLUDs7QUFBTyxJQUFNLDZEQUFBLEFBQW9CLG9CQUMzQixpQkFBQTtXQUFTLE1BQUEsQUFBTSxZQUFmLEFBQTJCO0FBRDFCLEFBQU0sQ0FBYSIsImZpbGUiOiJOYXZCYXJTdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==