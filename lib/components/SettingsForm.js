"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _Alert = _interopRequireDefault(require("react-bootstrap/Alert"));

require("./SettingsForm.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { useAuth } from './AuthComponents/AuthContext'
// import firebase from '../firebase'
function SettingsForm() {
  const [field, setField] = (0, _react.useState)("");
  const [success, setSuccess] = (0, _react.useState)(false);

  function validateForm() {
    return field.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "SettingsFormComponent"
  }, success && /*#__PURE__*/_react.default.createElement(_Alert.default, {
    variant: "success",
    className: "success-alert"
  }, "Successfully updated Canvas token!"), /*#__PURE__*/_react.default.createElement(_Form.default, {
    onSubmit: handleSubmit,
    className: "SettingsForm"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "field"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "New Canvas Token"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: field,
    onChange: e => setField(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    block: true,
    size: "lg",
    type: "submit",
    disabled: !validateForm()
  }, "Submit")));
}

var _default = SettingsForm;
exports.default = _default;