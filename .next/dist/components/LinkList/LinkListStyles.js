'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconLink = exports.ListOfLinks = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: inline-block;\n    font-size: 25px;\n'], ['\n    display: inline-block;\n    font-size: 25px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    color: inherit;\n        text-decoration: none;\n        border: 1px solid;\n        border-radius: 50%;\n        padding: 0.4em 0.7em 0.7em 0.7em;\n        margin: 0 0.2em;\n        background: inherit;\n        &:hover {\n            text-decoration: none;\n            background: white;\n            color: grey;\n        }\n'], ['\n    color: inherit;\n        text-decoration: none;\n        border: 1px solid;\n        border-radius: 50%;\n        padding: 0.4em 0.7em 0.7em 0.7em;\n        margin: 0 0.2em;\n        background: inherit;\n        &:hover {\n            text-decoration: none;\n            background: white;\n            color: grey;\n        }\n']);

var ListOfLinks = exports.ListOfLinks = _styledComponents2.default.div(_templateObject);

var IconLink = exports.IconLink = _styledComponents2.default.a(_templateObject2);