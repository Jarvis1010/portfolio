'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Description = exports.HR = exports.ProfilePic = exports.AboutWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display:flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 40px;\n    background: #aaaaaa;\n    color:white;\n    font-family: Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    text-align: right;\n    & h3 {\n        font-size: 18px;\n        margin: 10px 0;\n    }\n'], ['\n    display:flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 40px;\n    background: #aaaaaa;\n    color:white;\n    font-family: Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    text-align: right;\n    & h3 {\n        font-size: 18px;\n        margin: 10px 0;\n    }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    flex:1 1 300px;\n\n    & img{\n        display: block;\n        max-width: 100%;\n        height: auto;\n        border-radius:100%;\n        margin:auto;\n    }\n'], ['\n    flex:1 1 300px;\n\n    & img{\n        display: block;\n        max-width: 100%;\n        height: auto;\n        border-radius:100%;\n        margin:auto;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    border: 0;\n        border-top: 3px solid;\n        &:after{\n            content: \'< / >\';\n            display: inline-block;\n            position: relative;\n            top: -15px;\n            padding: 0 3px;\n            background: #aaa;\n            color: white;\n            font-size: 18px;\n        }\n'], ['\n    border: 0;\n        border-top: 3px solid;\n        &:after{\n            content: \'< / >\';\n            display: inline-block;\n            position: relative;\n            top: -15px;\n            padding: 0 3px;\n            background: #aaa;\n            color: white;\n            font-size: 18px;\n        }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    flex:1 1 300px;\n'], ['\n    flex:1 1 300px;\n']);

var AboutWrapper = exports.AboutWrapper = _styledComponents2.default.div(_templateObject);

var ProfilePic = exports.ProfilePic = _styledComponents2.default.figure(_templateObject2);

var HR = exports.HR = _styledComponents2.default.hr(_templateObject3);

var Description = exports.Description = _styledComponents2.default.section(_templateObject4);