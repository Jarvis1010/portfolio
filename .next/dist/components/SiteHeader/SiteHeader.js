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

var _jsxFileName = "/Users/travis-mair/portfolio/portfolio/components/SiteHeader/SiteHeader.js";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2l0ZUhlYWRlci9TaXRlSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2V3JhcHBlciIsIkJyYW5kIiwiTmF2U2xpZGVyIiwiTmF2SXRlbSIsIkxpbmsiLCJuYXZzIiwibmF2IiwiaHJlZiIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVksQUFBTyxBQUFXLEFBQWU7O0FBQ3RELEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sT0FBTyxDQUNYLEVBQUUsS0FBRixBQUFPLFNBQVMsTUFETCxBQUNYLEFBQXNCLGFBQ3RCLEVBQUUsS0FBRixBQUFPLGFBQWEsTUFGVCxBQUVYLEFBQTBCLGlCQUMxQixFQUFFLEtBQUYsQUFBTyxXQUFXLE1BSHBCLEFBQWEsQUFHWCxBQUF3QixBQUcxQjs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsK0JBQU0sV0FBUCxBQUFrQixxQkFBcUIsTUFBdkMsQUFBNEM7Z0JBQTVDO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQ0csQUFBSyxJQUFJLGdCQUFBLEFBQWdCLEdBQWhCO1FBQUEsQUFBRyxXQUFILEFBQUc7UUFBSCxBQUFRLFlBQVIsQUFBUTsyQkFDaEIsQUFBQyxpQ0FBUSxLQUFULEFBQWM7a0JBQWQ7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7a0JBQVo7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLE9BSEksQUFDUixBQUNFLEFBQ0U7QUFQRyxBQUNiLEFBRUUsQUFDRztBQUpQIiwiZmlsZSI6IlNpdGVIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpcy1tYWlyL3BvcnRmb2xpby9wb3J0Zm9saW8ifQ==