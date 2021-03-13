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

var _AuthContext = require("../AuthComponents/AuthContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NewCourseForm(props) {
  const {
    user
  } = (0, _AuthContext.useAuth)();
  const [field1, setField1] = (0, _react.useState)("");
  const [field2, setField2] = (0, _react.useState)("");
  const [field3, setField3] = (0, _react.useState)("");

  function validateForm() {
    return field1.length > 0 && field2.length > 0 && field3.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (user) {
      const listRef = _firebase.default.database().ref('users/' + user.uid + '/courses');

      const newRef = listRef.push();
      const key = newRef.key;
      newRef.set({
        courseTitle: field1,
        courseName: field2,
        instructor: field3,
        color: "teal",
        custom: true,
        id: key
      });
    }

    props.closeModal();
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "NewCourseForm"
  }, /*#__PURE__*/_react.default.createElement(_Form.default, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "field1"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Course code"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: field1,
    onChange: e => setField1(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "field2"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Course name"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: field2,
    onChange: e => setField2(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "field3"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Instructor"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: field3,
    onChange: e => setField3(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    block: true,
    size: "lg",
    type: "submit",
    disabled: !validateForm()
  }, "Submit")));
}

NewCourseForm.propTypes = {
  closeModal: _propTypes.default.func
};
var _default = NewCourseForm;
exports.default = _default;