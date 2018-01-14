'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Jarvis1000/portfolio/portfolio2/components/NavCollapse/NavCollapse.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display:none;\n  text-align:center;\n  text-decoration:none;\n  align-self:flex-end;\n  cursor:pointer;\n  color:white;\n  @media screen and (max-width: 700px) {\n      display:inline;\n  }\n'], ['\n  display:none;\n  text-align:center;\n  text-decoration:none;\n  align-self:flex-end;\n  cursor:pointer;\n  color:white;\n  @media screen and (max-width: 700px) {\n      display:inline;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    flex:1;\n    padding: 0 1em;\n    @media screen and (max-width: 700px) {\n        flex-flow:column;\n    }\n'], ['\n    display: flex;\n    flex:1;\n    padding: 0 1em;\n    @media screen and (max-width: 700px) {\n        flex-flow:column;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex:1;\n  justify-content: space-between;\n  @media (max-width: 700px) {\n      flex-flow:column;\n      align-items:center;\n      ', '\n  }\n'], ['\n  display: flex;\n  flex:1;\n  justify-content: space-between;\n  @media (max-width: 700px) {\n      flex-flow:column;\n      align-items:center;\n      ', '\n  }\n']);

var Hamburger = _styledComponents2.default.button(_templateObject);

var Collapse = _styledComponents2.default.div(_templateObject2);

var ResponsiveWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.hide && 'display:none';
});

var NavCollapse = function (_React$Component) {
  (0, _inherits3.default)(NavCollapse, _React$Component);

  function NavCollapse(props) {
    (0, _classCallCheck3.default)(this, NavCollapse);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavCollapse.__proto__ || (0, _getPrototypeOf2.default)(NavCollapse)).call(this, props));

    _this.state = {
      visible: true
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavCollapse, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState(function (state) {
        return { visible: !state.visible };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(Collapse, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Hamburger, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, '\u2630'), _react2.default.createElement(ResponsiveWrapper, { hide: !this.state.visible, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, children));
    }
  }]);

  return NavCollapse;
}(_react2.default.Component);

exports.default = NavCollapse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2Q29sbGFwc2UvTmF2Q29sbGFwc2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJIYW1idXJnZXIiLCJidXR0b24iLCJDb2xsYXBzZSIsImRpdiIsIlJlc3BvbnNpdmVXcmFwcGVyIiwicHJvcHMiLCJoaWRlIiwiTmF2Q29sbGFwc2UiLCJzdGF0ZSIsInZpc2libGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLDJCQUFaLEFBQW1CLE9BQXpCOztBQVlBLElBQU0sV0FBVywyQkFBWCxBQUFrQixJQUF4Qjs7QUFTQSxJQUFNLCtDQUFBLEFBQTJCLHNCQU96QixpQkFBQTtTQUFTLE1BQUEsQUFBTSxRQUFmLEFBQXVCO0FBUC9CLEFBQU0sQ0FBb0I7O0ksQUFXcEI7dUNBQ0o7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7ZUFBTCxBQUFhLEFBQ0YsQUFFWDtBQUhhLEFBQ1g7VUFFRixBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FMbkIsQUFLakI7V0FDRDs7Ozs7Z0NBQ1csQSxHQUFHLEFBQ2I7UUFBQSxBQUFFLEFBQ0Y7V0FBQSxBQUFLLFNBQVMsaUJBQUE7ZUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUF0QixBQUFVLEFBQWtCO0FBQTFDLEFBQ0Q7Ozs7NkJBQ1E7bUJBQ3lCLEtBRHpCLEFBQzhCO1VBRDlCLEFBQ0MsbUJBREQsQUFDQztVQURELEFBQ1ksa0JBRFosQUFDWSxBQUNuQjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFELGFBQVcsU0FBUyxLQUFwQixBQUF5QjtvQkFBekI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwyQkFBQyxjQUFELHFCQUFtQixNQUFNLENBQUMsS0FBQSxBQUFLLE1BQS9CLEFBQXFDO29CQUFyQztzQkFBQSxBQUNHO0FBREg7U0FISixBQUNFLEFBRUUsQUFLTDs7Ozs7RUF0QnVCLGdCQUFNLEEsQUF5QmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdkNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYXJ2aXMxMDAwL3BvcnRmb2xpby9wb3J0Zm9saW8yIn0=