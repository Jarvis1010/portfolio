"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require("../components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _AboutSection = require("../components/AboutSection/AboutSection");

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _Portfolio = require("../components/Portfolio/Portfolio");

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = require("../components/Contact/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _FinalSection = require("../components/FinalSection/FinalSection");

var _FinalSection2 = _interopRequireDefault(_FinalSection);

var _constants = require("../constants");

var _Stack = require("../components/Stack/Stack");

var _Stack2 = _interopRequireDefault(_Stack);

var _Stackable = require("../components/Stack/Stackable");

var _Stackable2 = _interopRequireDefault(_Stackable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js?entry";

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Stack2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_Stackable2.default, { type: "light", id: "about", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_AboutSection2.default, (0, _extends3.default)({}, _constants.about, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }))), _react2.default.createElement(_Stackable2.default, { id: "portfolio", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_Portfolio2.default, { projectGroups: _constants.portfolio, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_Stackable2.default, { type: "dark", id: "contact", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_Contact2.default, { list: _constants.list, message: _constants.desc, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement(_Stackable2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_FinalSection2.default, { links: _constants.links, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWJvdXRTZWN0aW9uIiwiUG9ydGZvbGlvIiwiQ29udGFjdCIsIkZpbmFsU2VjdGlvbiIsImxpc3QiLCJkZXNjIiwibGlua3MiLCJwb3J0Zm9saW8iLCJhYm91dCIsIlN0YWNrIiwiU3RhY2thYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFTLEFBQU0sQUFBTSxBQUFPLEFBQVcsQUFBYTs7QUFDcEQsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBZSxBQUV0Qjs7Ozs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMscUNBQVUsTUFBWCxBQUFnQixTQUFRLElBQXhCLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw2REFBRCxBQUFrQjs7Z0JBQWxCO2tCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7QUFBQSx3QkFFRixBQUFDLHFDQUFVLElBQVgsQUFBYztnQkFBZDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBRCxBQUFXLEFBQWU7Z0JBQTFCO2tCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7dUJBRUYsQUFBQyxxQ0FBVSxNQUFYLEFBQWdCLFFBQU8sSUFBdkIsQUFBMEI7Z0JBQTFCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLG1DQUFELEFBQVMsQUFBTSx1QkFBZixBQUFxQixBQUFTO2dCQUE5QjtrQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsd0NBQUQsQUFBYyxBQUFPO2dCQUFyQjtrQkFiUixBQUNFLEFBQ0UsQUFVRSxBQUNFLEFBS1Q7QUFMUzs7QUFkViIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzLW1haXIvcG9ydGZvbGlvL3BvcnRmb2xpbyJ9