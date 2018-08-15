"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ContactList = require("../ContactList/ContactList");

var _ContactList2 = _interopRequireDefault(_ContactList);

var _ContentSection = require("../ContentSection/ContentSection");

var _ContentSection2 = _interopRequireDefault(_ContentSection);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/Contact/Contact.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  flex: 1 1 300px;\n  margin: 0 1em;\n"], ["\n  flex: 1 1 300px;\n  margin: 0 1em;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-flow: row wrap;\n"], ["\n  display: flex;\n  flex-flow: row wrap;\n"]);

var FlexItem = _styledComponents2.default.p(_templateObject);

var FlexWrapper = _styledComponents2.default.div(_templateObject2);

var Contact = exports.Contact = function Contact(_ref) {
  var className = _ref.className,
      list = _ref.list,
      message = _ref.message;
  return _react2.default.createElement(_ContentSection2.default, { title: "Contact", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_ContactList2.default, { list: list, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(FlexItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, message)));
};

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFjdExpc3QiLCJDb250ZW50U2VjdGlvbiIsInN0eWxlZCIsIkZsZXhJdGVtIiwicCIsIkZsZXhXcmFwcGVyIiwiZGl2IiwiQ29udGFjdCIsImNsYXNzTmFtZSIsImxpc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTzs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsRUFBeEI7O0FBS0EsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLElBQTNCLEFBS0E7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsY0FBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztNQUFILEFBQWMsWUFBZCxBQUFjO01BQWQsQUFBb0IsZUFBcEIsQUFBb0I7eUJBQ3pDLEFBQUMsMENBQWUsT0FBaEIsQUFBc0I7Z0JBQXRCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsdUNBQVksTUFBYixBQUFtQjtnQkFBbkI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0MsY0FBRDs7Z0JBQUE7a0JBQUEsQUFBVztBQUFYO0FBQUEsS0FKaUIsQUFDckIsQUFDRSxBQUVFO0FBSkMsQUFTUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXMtbWFpci9wb3J0Zm9saW8vcG9ydGZvbGlvIn0=