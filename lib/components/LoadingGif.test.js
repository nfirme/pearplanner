"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _LoadingGif = _interopRequireDefault(require("./LoadingGif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("renders LoadingGif component", () => {
  const div = document.createElement("div");

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_LoadingGif.default, null), div);
});