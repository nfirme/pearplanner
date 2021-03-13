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

var _firebase = _interopRequireDefault(require("../../firebase"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SignUpForm() {
  let history = (0, _reactRouterDom.useHistory)();
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [confirmPass, setConfirmPass] = (0, _react.useState)("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && password === confirmPass;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await _firebase.default.auth().createUserWithEmailAndPassword(email, password);
      history.push('/app');
    } catch (_unused) {
      console.log("error");
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Signup"
  }, /*#__PURE__*/_react.default.createElement(_Form.default, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "email"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Email"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "password"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Password"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "confirmPass"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Confirm Password"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    type: "password",
    value: confirmPass,
    onChange: e => setConfirmPass(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "send-sign-up",
    block: true,
    size: "lg",
    type: "submit",
    disabled: !validateForm()
  }, "Sign Up")));
}

var _default = SignUpForm;
exports.default = _default;