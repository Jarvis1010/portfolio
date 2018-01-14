'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _AboutSection = require('../components/AboutSection/AboutSection');

var _AboutSection2 = _interopRequireDefault(_AboutSection);

var _Portfolio = require('../components/Portfolio/Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = require('../components/Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _FinalSection = require('../components/FinalSection/FinalSection');

var _FinalSection2 = _interopRequireDefault(_FinalSection);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 900px;\n  margin: 0;\n'], ['\n  max-width: 900px;\n  margin: 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 0 1 400px;\n'], ['\n  flex: 0 1 400px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n   width: 100%;\n  margin: 0;\n'], ['\n   width: 100%;\n  margin: 0;\n']);

var ContentSection = _styledComponents2.default.section(_templateObject);

var About = ContentSection.extend(_templateObject2);

var Final = _styledComponents2.default.section(_templateObject3);

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(About, { id: 'about', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_AboutSection2.default, (0, _extends3.default)({}, _constants.about, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), _react2.default.createElement(ContentSection, { id: 'portfolio', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_Portfolio2.default, { projectGroups: _constants.portfolio, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), _react2.default.createElement(ContentSection, { id: 'contact', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWJvdXRTZWN0aW9uIiwiUG9ydGZvbGlvIiwiQ29udGFjdCIsIkZpbmFsU2VjdGlvbiIsInN0eWxlZCIsImxpc3QiLCJkZXNjIiwicGFnZU1ldGEiLCJsaW5rcyIsInBvcnRmb2xpbyIsImFib3V0IiwiQ29udGVudFNlY3Rpb24iLCJzZWN0aW9uIiwiQWJvdXQiLCJleHRlbmQiLCJGaW5hbCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFNLEFBQVUsQUFBTyxBQUFXLEFBQWE7Ozs7Ozs7Ozs7QUFFOUQsSUFBTSxpQkFBaUIsMkJBQWpCLEFBQXdCLFFBQTlCOztBQUtBLElBQU0sUUFBUSxlQUFSLEFBQXVCLE9BQTdCOztBQUlBLElBQU0sUUFBUSwyQkFBUixBQUFlLFFBQXJCLEFBS0E7O2tCQUFlLGlCQUFTLEFBQ3RCO3lCQUNFLEFBQUMsNkRBQUQsQUFBWTs7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO0FBQUEsSUFBQSxrQkFDRyxjQUFELFNBQU8sSUFBUCxBQUFVO2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLDZEQUFELEFBQWtCOztnQkFBbEI7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLHdCQUVELGNBQUQsa0JBQWdCLElBQWhCLEFBQW1CO2dCQUFuQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBRCxBQUFXLEFBQWU7Z0JBQTFCO2tCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7dUJBRUQsY0FBRCxrQkFBZ0IsSUFBaEIsQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLG1DQUFELEFBQVMsQUFBTSx1QkFBZixBQUFxQixBQUFTO2dCQUE5QjtrQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFO3VCQUVELGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsd0NBQUQsQUFBYyxBQUFPO2dCQUFyQjtrQkFaTixBQUNFLEFBVUUsQUFDRSxBQUlQO0FBSk87O0FBYlIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0phcnZpczEwMDAvcG9ydGZvbGlvL3BvcnRmb2xpbzIifQ==