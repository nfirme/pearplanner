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

function NewResourceForm(props) {
  const {
    user
  } = (0, _AuthContext.useAuth)();
  const [name, setName] = (0, _react.useState)("");
  const [link, setLink] = (0, _react.useState)("");

  function validateForm() {
    return name.length > 0 && link.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (user) {
      const courseId = props.courseId;

      const listRef = _firebase.default.database().ref('users/' + user.uid + '/courses/' + courseId + '/resources');

      const newRef = listRef.push();
      newRef.set({
        name: name,
        link: link
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
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Resource name"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Form.default.Group, {
    size: "lg",
    controlId: "field2"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Label, null, "Link to resource"), /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    autoFocus: true,
    type: "text",
    value: link,
    onChange: e => setLink(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    block: true,
    size: "lg",
    type: "submit",
    disabled: !validateForm()
  }, "Submit")));
}

NewResourceForm.propTypes = {
  closeModal: _propTypes.default.func,
  courseId: _propTypes.default.string
};
var _default = NewResourceForm;
exports.default = _default;