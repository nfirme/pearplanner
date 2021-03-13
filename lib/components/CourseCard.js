"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.replace.js");

var _react = _interopRequireDefault(require("react"));

require("./CourseCard.css");

var _CourseCardDropdown = _interopRequireDefault(require("./CourseCardDropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CourseCard(props) {
  const idStr = props.courseCode.replace(/ /g, "_");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "CourseCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card flex-row flex-wrap course-card",
    style: {
      borderRadius: 16,
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "card-block stretched-link text-decoration-none",
    "data-toggle": "collapse",
    href: "#" + idStr
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header",
    style: {
      backgroundColor: "var(--" + props.courseColor + ")"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-block px-2 py-3"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "card-title mb-0"
  }, props.courseCode), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, props.courseTitle))), /*#__PURE__*/_react.default.createElement(_CourseCardDropdown.default, {
    id: idStr,
    courseId: props.courseId,
    resources: props.resources
  }));
}

CourseCard.propTypes = {
  courseCode: _propTypes.default.string,
  courseTitle: _propTypes.default.string,
  courseColor: _propTypes.default.string,
  courseId: _propTypes.default.string,
  resources: _propTypes.default.array
};
var _default = CourseCard;
exports.default = _default;