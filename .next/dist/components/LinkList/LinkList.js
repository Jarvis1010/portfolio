'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fa = require('react-icons/lib/fa');

var _LinkListStyles = require('./LinkListStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travis-mair/portfolio/portfolio/components/LinkList/LinkList.js';


function iconPicker(content) {
  switch (content) {
    case 'github':
      {
        return _react2.default.createElement(_fa.FaGithub, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        });
      }
    case 'twitter':
      {
        return _react2.default.createElement(_fa.FaTwitter, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        });
      }
    case 'linkedin':
      {
        return _react2.default.createElement(_fa.FaLinkedin, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        });
      }
    default:
      {
        return '';
      }
  }
}

var LinkList = exports.LinkList = function LinkList(_ref) {
  var links = _ref.links;
  return _react2.default.createElement(_LinkListStyles.ListOfLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, links && links.map(function (link) {
    return _react2.default.createElement(_LinkListStyles.IconLink, { key: link.href, href: link.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, iconPicker(link.content));
  }));
};

exports.default = LinkList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlua0xpc3QvTGlua0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGYUdpdGh1YiIsIkZhVHdpdHRlciIsIkZhTGlua2VkaW4iLCJMaXN0T2ZMaW5rcyIsIkljb25MaW5rIiwiaWNvblBpY2tlciIsImNvbnRlbnQiLCJMaW5rTGlzdCIsImxpbmtzIiwibWFwIiwibGluayIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFVLEFBQVc7O0FBQzlCLEFBQVMsQUFBYSxBQUFnQjs7Ozs7OztBQUV0QyxTQUFBLEFBQVMsV0FBVCxBQUFvQixTQUFTLEFBQzNCO1VBQUEsQUFBUSxBQUNOO1NBQUEsQUFBSyxBQUFVO0FBQ2I7K0JBQU8sQUFBQzs7c0JBQUQ7d0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxTQUFBO0FBRVQ7U0FBQSxBQUFLLEFBQVc7QUFDZDsrQkFBTyxBQUFDOztzQkFBRDt3QkFBUCxBQUFPLEFBQ1I7QUFEUTtBQUFBLFNBQUE7QUFFVDtTQUFBLEFBQUssQUFBWTtBQUNmOytCQUFPLEFBQUM7O3NCQUFEO3dCQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsU0FBQTtBQUVUO0FBQVM7QUFDUDtlQUFBLEFBQU8sQUFDUjtBQVpILEFBY0Q7O0FBRUQ7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsZUFBQTtNQUFBLEFBQUcsYUFBSCxBQUFHO3lCQUN6QixBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLGlCQUVJLEFBQU0sSUFBSSxnQkFBQTsyQkFDUixBQUFDLDBDQUFTLEtBQUssS0FBZixBQUFvQixNQUFNLE1BQU0sS0FBaEMsQUFBcUM7a0JBQXJDO29CQUFBLEFBQ0c7QUFESDtLQUFBLGFBQ2MsS0FGTixBQUNSLEFBQ0csQUFBZ0I7QUFMSCxBQUN0QixBQUVJLEdBQUE7QUFIQyxBQVdQOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxpbmtMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXMtbWFpci9wb3J0Zm9saW8vcG9ydGZvbGlvIn0=