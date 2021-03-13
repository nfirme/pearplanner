"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("renders NavBar component", () => {
  const div = document.createElement("div");

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_NavBar.default, null), div);
});