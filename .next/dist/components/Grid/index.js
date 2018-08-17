"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledConstants = require("../constants/styled-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"], ["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-gap: ", ";\n  width: 100%;\n"]);

var gaps = {
  "0": "0",
  "4": _styledConstants.spacing4,
  "8": _styledConstants.spacing8,
  "16": _styledConstants.spacing16,
  "24": "1.5rem",
  "32": _styledConstants.spacing32,
  "64": _styledConstants.spacing64,
  "128": _styledConstants.spacing128,
  default: _styledConstants.spacing16
};

var createColumns = function createColumns(_ref) {
  var columns = _ref.columns,
      minWidth = _ref.minWidth;
  return "repeat(" + (columns ? columns : "auto-fit") + ", \n   minmax(" + (minWidth ? minWidth : "1px") + ",1fr))";
};

var Grid = _styledComponents2.default.div(_templateObject, createColumns, function (props) {
  return gaps[props.gapSize] || gaps.default;
});

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR3JpZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJzcGFjaW5nNCIsInNwYWNpbmc4Iiwic3BhY2luZzE2Iiwic3BhY2luZzMyIiwic3BhY2luZzY0Iiwic3BhY2luZzEyOCIsImdhcHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29sdW1ucyIsImNvbHVtbnMiLCJtaW5XaWR0aCIsIkdyaWQiLCJkaXYiLCJwcm9wcyIsImdhcFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDSzs7Ozs7O0FBRVAsSUFBTTtPQUFPLEFBQ04sQUFDTDtBQUZXLEFBRU4sQUFDTDtBQUhXLEFBR04sQUFDTDtBQUpXLEFBSUwsQUFDTjtRQUxXLEFBS0wsQUFDTjtBQU5XLEFBTUwsQUFDTjtBQVBXLEFBT0wsQUFDTjtBQVJXLEFBUUosQUFDUDtBQVRGLEFBQWEsQUFTRjtBQVRFLEFBQ1g7O0FBV0YsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0Isb0JBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztNQUFILEFBQVksZ0JBQVosQUFBWTtzQkFDdEIsVUFBQSxBQUFVLFVBREEsQUFDVSxrQ0FDcEIsV0FBQSxBQUFXLFdBRkQsQUFFWSxTQUZaO0FBQXRCOztBQUlBLElBQU0sa0NBQUEsQUFBYyxxQkFBZCxBQUVxQixlQUNiLGlCQUFBO1NBQVMsS0FBSyxNQUFMLEFBQVcsWUFBWSxLQUFoQyxBQUFxQztBQUhuRCxBQUFNLEFBT04sQ0FQYTs7a0JBT2IsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzLW1haXIvcG9ydGZvbGlvL3BvcnRmb2xpbyJ9