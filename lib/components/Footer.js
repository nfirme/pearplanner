"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Footer.css");

var _firebase = _interopRequireDefault(require("../firebase"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  let history = (0, _reactRouterDom.useHistory)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    "data-testid": "button",
    style: {
      backgroundColor: "transparent",
      color: "green",
      borderRadius: 10,
      float: "right",
      marginRight: 10
    },
    variant: "success",
    onClick: () => {
      _firebase.default.auth().signOut();

      history.push('/');
    }
  }, "Sign-out"));
}

var _default = Footer;
exports.default = _default;