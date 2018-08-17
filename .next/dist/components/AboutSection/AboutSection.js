"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutSection = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Grid = require("../Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _PadBox = require("../PadBox/PadBox");

var _PadBox2 = _interopRequireDefault(_PadBox);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/AboutSection/AboutSection.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  max-height: ", ";\n"], ["\n  max-height: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n"], ["\n  text-align: right;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  border: 0;\n  border-top: 3px solid;\n"], ["\n  border: 0;\n  border-top: 3px solid;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin-left: auto;\n  max-width: ", ";\n"], ["\n  height: auto;\n  width: 100%;\n  border-radius: 50%;\n  margin-left: auto;\n  max-width: ", ";\n"]);

var profile = "/static/components/AboutSection/portfolio.jpg";

var ProfilePic = _Grid2.default.withComponent("figure").extend(_templateObject, _styledConstants.breakWidth480);

var Description = _styledComponents2.default.div(_templateObject2);

var HR = _styledComponents2.default.hr(_templateObject3);

var Image = _styledComponents2.default.img(_templateObject4, _styledConstants.breakWidth480);

var AboutSection = exports.AboutSection = function AboutSection(_ref) {
  var _ref$description = _ref.description,
      description = _ref$description === undefined ? "" : _ref$description,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      _ref$languages = _ref.languages,
      languages = _ref$languages === undefined ? [] : _ref$languages;
  return _react2.default.createElement(_PadBox2.default, { size: "64", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_Grid2.default, { minWidth: "400px", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, description), _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Programming Languages"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, languages.join(", ")), _react2.default.createElement(HR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, title)), _react2.default.createElement(ProfilePic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(Image, { src: profile, alt: "Profile Photo", __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }))));
};

exports.default = AboutSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWJvdXRTZWN0aW9uL0Fib3V0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkdyaWQiLCJQYWRCb3giLCJicmVha1dpZHRoNDgwIiwiUHJvZmlsZVBpYyIsIndpdGhDb21wb25lbnQiLCJleHRlbmQiLCJEZXNjcmlwdGlvbiIsImRpdiIsIkhSIiwiaHIiLCJJbWFnZSIsImltZyIsIkFib3V0U2VjdGlvbiIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJsYW5ndWFnZXMiLCJqb2luIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFxQjs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNLGFBQWEsZUFBQSxBQUFLLGNBQUwsQUFBbUIsVUFBaEMsQUFBMEMsT0FBaEQsQUFBTSxBQUNVOztBQUdoQixJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBSUEsSUFBTSxLQUFLLDJCQUFMLEFBQVksR0FBbEI7O0FBS0EsSUFBTSxRQUFRLDJCQUFSLEFBQWUsSUFBckIsQUFBTSxBQUtTLEFBR2Y7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsbUJBQUE7OEJBQUEsQUFDMUI7TUFEMEIsQUFDMUIsK0NBRDBCLEFBQ1osS0FEWTt3QkFBQSxBQUUxQjtNQUYwQixBQUUxQixtQ0FGMEIsQUFFbEIsS0FGa0I7NEJBQUEsQUFHMUI7TUFIMEIsQUFHMUIsMkNBSDBCLEFBR2QsS0FIYzt5QkFLMUIsQUFBQyxrQ0FBTyxNQUFSLEFBQWE7Z0JBQWI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxVQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsS0FERixBQUNFLEFBQ0EsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLDBDQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLGVBQUksQUFBVSxLQUhoQixBQUdFLEFBQUksQUFBZSxBQUNuQixzQ0FBQSxBQUFDOztnQkFBRDtrQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBTkosQUFDRSxBQUtFLEFBRUYseUJBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQyxTQUFNLEtBQVAsQUFBWSxTQUFTLEtBQXJCLEFBQXlCO2dCQUF6QjtrQkFmb0IsQUFLMUIsQUFDRSxBQVFFLEFBQ0U7QUFBQTs7QUFmRCxBQXFCUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJBYm91dFNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==