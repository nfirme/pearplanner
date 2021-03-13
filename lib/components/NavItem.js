"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/jsx-key: 0 */
function NavItem(props) {
  const pix = props.d.map(str => /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: str
  }));
  return /*#__PURE__*/_react.default.createElement("a", {
    className: props.active,
    href: props.link
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "4em",
    height: "4em",
    viewBox: "0 0 16 16",
    className: props.name,
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, pix));
}

NavItem.propTypes = {
  active: _propTypes.default.string,
  link: _propTypes.default.string,
  name: _propTypes.default.string,
  d: _propTypes.default.array
};
var _default = NavItem;
exports.default = _default;