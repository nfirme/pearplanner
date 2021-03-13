"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./LoadingGif.css");

var _loading = _interopRequireDefault(require("./loading.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadingGif() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "loadingGif",
    src: _loading.default,
    alt: "Loading your class data..."
  }));
}

var _default = LoadingGif;
exports.default = _default;