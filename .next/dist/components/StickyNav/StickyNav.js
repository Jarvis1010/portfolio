"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _NavBar = require("../NavBar");

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/StickyNav/StickyNav.js";


var navs = [{ nav: "About", href: "/#about" }, { nav: "Portfolio", href: "/#portfolio" }, { nav: "Contact", href: "/#contact" }];

exports.default = function () {
  return _react2.default.createElement(_NavBar.NavWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_NavBar.Brand, { brandName: "Travis Waith-Mair", href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_NavBar.NavSlider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, navs.map(function (_ref, i) {
    var nav = _ref.nav,
        href = _ref.href;
    return _react2.default.createElement(_NavBar.NavItem, { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement(_link2.default, { href: href, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, nav)));
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RpY2t5TmF2L1N0aWNreU5hdi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdldyYXBwZXIiLCJCcmFuZCIsIk5hdlNsaWRlciIsIk5hdkl0ZW0iLCJMaW5rIiwibmF2cyIsIm5hdiIsImhyZWYiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZLEFBQU8sQUFBVyxBQUFlOztBQUN0RCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLE9BQU8sQ0FDWCxFQUFFLEtBQUYsQUFBTyxTQUFTLE1BREwsQUFDWCxBQUFzQixhQUN0QixFQUFFLEtBQUYsQUFBTyxhQUFhLE1BRlQsQUFFWCxBQUEwQixpQkFDMUIsRUFBRSxLQUFGLEFBQU8sV0FBVyxNQUhwQixBQUFhLEFBR1gsQUFBd0IsQUFHMUI7O2tCQUFlLFlBQUE7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLCtCQUFNLFdBQVAsQUFBa0IscUJBQXFCLE1BQXZDLEFBQTRDO2dCQUE1QztrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQUssSUFBSSxnQkFBQSxBQUFnQixHQUFoQjtRQUFBLEFBQUcsV0FBSCxBQUFHO1FBQUgsQUFBUSxZQUFSLEFBQVE7MkJBQ2hCLEFBQUMsaUNBQVEsS0FBVCxBQUFjO2tCQUFkO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFZO2tCQUFaO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUFJO0FBQUo7QUFBQSxPQUhJLEFBQ1IsQUFDRSxBQUNFO0FBUEcsQUFDYixBQUVFLEFBQ0c7QUFKUCIsImZpbGUiOiJTdGlja3lOYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==