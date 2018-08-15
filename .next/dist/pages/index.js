"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/pages/index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 900px;\n  margin: 0;\n"], ["\n  max-width: 900px;\n  margin: 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  flex: 0 1 400px;\n"], ["\n  flex: 0 1 400px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  margin: 0;\n"], ["\n  width: 100%;\n  margin: 0;\n"]);

var ContentSection = _styledComponents2.default.section(_templateObject);

var About = ContentSection.extend(_templateObject2);

var Final = _styledComponents2.default.section(_templateObject3);

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(About, { id: "about", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_AboutSection2.default, (0, _extends3.default)({}, _constants.about, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), _react2.default.createElement(ContentSection, { id: "portfolio", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_Portfolio2.default, { projectGroups: _constants.portfolio, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), _react2.default.createElement(ContentSection, { id: "contact", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_Contact2.default, { list: _constants.list, message: _constants.desc, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), _react2.default.createElement(Final, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_FinalSection2.default, { links: _constants.links, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWJvdXRTZWN0aW9uIiwiUG9ydGZvbGlvIiwiQ29udGFjdCIsIkZpbmFsU2VjdGlvbiIsInN0eWxlZCIsImxpc3QiLCJkZXNjIiwicGFnZU1ldGEiLCJsaW5rcyIsInBvcnRmb2xpbyIsImFib3V0IiwiQ29udGVudFNlY3Rpb24iLCJzZWN0aW9uIiwiQWJvdXQiLCJleHRlbmQiLCJGaW5hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBTSxBQUFVLEFBQU8sQUFBVyxBQUFhOzs7Ozs7Ozs7O0FBRTlELElBQU0saUJBQWlCLDJCQUFqQixBQUF3QixRQUE5Qjs7QUFLQSxJQUFNLFFBQVEsZUFBUixBQUF1QixPQUE3Qjs7QUFJQSxJQUFNLFFBQVEsMkJBQVIsQUFBZSxRQUFyQixBQUtBOztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRCxTQUFPLElBQVAsQUFBVTtnQkFBVjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw2REFBRCxBQUFrQjs7Z0JBQWxCO2tCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7QUFBQSx3QkFFRCxjQUFELGtCQUFnQixJQUFoQixBQUFtQjtnQkFBbkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMscUNBQUQsQUFBVyxBQUFlO2dCQUExQjtrQkFMSixBQUlFLEFBQ0UsQUFFRjtBQUZFO3VCQUVELGNBQUQsa0JBQWdCLElBQWhCLEFBQW1CO2dCQUFuQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxtQ0FBRCxBQUFTLEFBQU0sdUJBQWYsQUFBcUIsQUFBUztnQkFBOUI7a0JBUkosQUFPRSxBQUNFLEFBRUY7QUFGRTt1QkFFRCxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHdDQUFELEFBQWMsQUFBTztnQkFBckI7a0JBWk4sQUFDRSxBQVVFLEFBQ0UsQUFJUDtBQUpPOztBQWJSIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXMtbWFpci9wb3J0Zm9saW8vcG9ydGZvbGlvIn0=