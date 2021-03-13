"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _SignUpForm = _interopRequireDefault(require("./SignUpForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SignUpModal() {
  const [show, setShow] = (0, _react.useState)(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "sign-up",
    style: {
      marginLeft: 4
    },
    variant: "primary",
    onClick: handleShow
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    centered: true,
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, null, "Sign up to PearPlanner")), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, /*#__PURE__*/_react.default.createElement(_SignUpForm.default, null))));
}

var _default = SignUpModal;
exports.default = _default;