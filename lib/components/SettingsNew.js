"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AuthContext = require("./AuthComponents/AuthContext");

var _SettingsForm = _interopRequireDefault(require("./SettingsForm"));

require("./SettingsForm.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Settings() {
  const {
    user
  } = (0, _AuthContext.useAuth)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Settings"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Settings"), /*#__PURE__*/_react.default.createElement("div", null, user.email), /*#__PURE__*/_react.default.createElement(_SettingsForm.default, null));
}

var _default = Settings;
exports.default = _default;