"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NewResourceModal = _interopRequireDefault(require("./FormComponents/NewResourceModal"));

var _ResourceLink = _interopRequireDefault(require("./ResourceLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/jsx-key: 0, */
function CourseCardDropdown(props) {
  const resourceLinks = props.resources.map(r => {
    return /*#__PURE__*/_react.default.createElement(_ResourceLink.default, {
      resourceId: r[0],
      link: r[1].link,
      name: r[1].name,
      courseId: props.courseId
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse",
    id: props.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card card-body",
    style: {
      borderRadius: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      textAlign: "center"
    }
  }, "Resources"), /*#__PURE__*/_react.default.createElement(_NewResourceModal.default, {
    courseId: props.courseId
  }), /*#__PURE__*/_react.default.createElement("ul", null, resourceLinks)));
}

CourseCardDropdown.propTypes = {
  id: _propTypes.default.number,
  courseId: _propTypes.default.string,
  resources: _propTypes.default.array
};
var _default = CourseCardDropdown;
exports.default = _default;